import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import Colors from '@/constants/Colors';

interface SocialButtonProps {
  provider: 'google' | 'apple' | 'facebook';
  onPress: () => void;
  style?: ViewStyle;
}

const SocialButton: React.FC<SocialButtonProps> = ({ 
  provider, 
  onPress,
  style
}) => {
  const getProviderText = () => {
    switch (provider) {
      case 'google':
        return 'Continue with Google';
      case 'apple':
        return 'Continue with Apple';
      case 'facebook':
        return 'Continue with Facebook';
      default:
        return 'Continue with Google';
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.button, style]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>{getProviderText()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.neutral[300],
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.neutral[800],
    marginLeft: 12,
  },
});

export default SocialButton;