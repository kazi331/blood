import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  TextInput, 
  StyleSheet, 
  Keyboard, 
  TouchableOpacity, 
  Text 
} from 'react-native';
import Colors from '@/constants/Colors';

interface OTPInputProps {
  codeLength: number;
  onCodeFilled: (code: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ 
  codeLength = 4, 
  onCodeFilled 
}) => {
  const [code, setCode] = useState<string[]>(Array(codeLength).fill(''));
  const inputs = useRef<Array<TextInput | null>>([]);

  useEffect(() => {
    // Focus the first input when component mounts
    if (inputs.current[0]) {
      inputs.current[0]?.focus();
    }
  }, []);

  const handleChangeText = (text: string, index: number) => {
    // Ensure we only get one character
    const digit = text.slice(-1);
    
    // Update the code array
    const newCode = [...code];
    newCode[index] = digit;
    setCode(newCode);

    // If input is filled, move to the next input field
    if (digit && index < codeLength - 1) {
      inputs.current[index + 1]?.focus();
    }

    // Check if all inputs are filled and call callback
    if (newCode.every(c => c !== '') && newCode.join('').length === codeLength) {
      Keyboard.dismiss();
      onCodeFilled(newCode.join(''));
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      // Move to previous input on backspace with empty current field
      inputs.current[index - 1]?.focus();
    }
  };

  const handlePaste = async () => {
    try {
      const clipboardContent = await navigator.clipboard.readText();
      if (clipboardContent && /^\d+$/.test(clipboardContent)) {
        const pastedCode = clipboardContent.slice(0, codeLength).split('');
        const filledCode = [...pastedCode, ...Array(codeLength - pastedCode.length).fill('')];
        setCode(filledCode);

        if (filledCode.filter(Boolean).length === codeLength) {
          onCodeFilled(filledCode.join(''));
          Keyboard.dismiss();
        } else {
          // Focus on the next empty input
          const emptyIndex = filledCode.findIndex(c => c === '');
          if (emptyIndex >= 0) {
            inputs.current[emptyIndex]?.focus();
          }
        }
      }
    } catch (error) {
      console.error('Failed to read clipboard', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        {[...Array(codeLength)].map((_, index) => (
          <TextInput
            key={`otp-${index}`}
            ref={ref => inputs.current[index] = ref}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            value={code[index]}
            onChangeText={text => handleChangeText(text, index)}
            onKeyPress={e => handleKeyPress(e, index)}
            selectionColor={Colors.primary[500]}
          />
        ))}
      </View>
      <TouchableOpacity onPress={handlePaste} style={styles.pasteButton}>
        <Text style={styles.pasteText}>Paste from clipboard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
  },
  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  input: {
    width: 56,
    height: 56,
    borderWidth: 1,
    borderColor: Colors.neutral[300],
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 24,
    color: Colors.neutral[900],
    backgroundColor: Colors.white,
  },
  pasteButton: {
    alignSelf: 'center',
  },
  pasteText: {
    color: Colors.primary[500],
    fontSize: 14,
  },
});

export default OTPInput;