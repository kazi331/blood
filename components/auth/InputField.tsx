import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors';
import { Eye, EyeOff, Mail, Lock, Phone } from 'lucide-react-native';

interface InputFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  type?: 'text' | 'email' | 'password' | 'phone';
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  autoCapitalize = 'none',
  keyboardType = 'default',
  type = 'text',
  error,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const renderIcon = () => {
    switch (type) {
      case 'email':
        return <Mail color={Colors.neutral[500]} size={20} />;
      case 'password':
        return <Lock color={Colors.neutral[500]} size={20} />;
      case 'phone':
        return <Phone color={Colors.neutral[500]} size={20} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, error && styles.inputError]}>
        <View style={styles.iconContainer}>
          {renderIcon()}
        </View>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={type === 'password' ? !isPasswordVisible : secureTextEntry}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          placeholderTextColor={Colors.neutral[400]}
        />
        {type === 'password' && (
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            {isPasswordVisible ? (
              <EyeOff color={Colors.neutral[500]} size={20} />
            ) : (
              <Eye color={Colors.neutral[500]} size={20} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.neutral[200],
    backgroundColor: Colors.white,
    paddingVertical: 8,
  },
  inputError: {
    borderColor: Colors.error,
  },
  iconContainer: {
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: Colors.neutral[800],
  },
  eyeIcon: {
    padding: 12,
  },
  errorText: {
    color: Colors.error,
    fontSize: 12,
    marginTop: 4,
    marginLeft: 12,
  },
});

export default InputField;