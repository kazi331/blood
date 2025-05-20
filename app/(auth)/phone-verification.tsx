import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
import Colors from '@/constants/Colors';
import Button from '@/components/common/Button';
import InputField from '@/components/auth/InputField';
import Header from '@/components/common/Header';

export default function PhoneVerificationScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  const { signInWithPhone, loading } = useAuth();
  
  const validatePhone = () => {
    if (!phoneNumber) {
      setError('Phone number is required');
      return false;
    }
    
    // Basic phone validation
    if (!/^\+?[1-9]\d{1,14}$/.test(phoneNumber)) {
      setError('Please enter a valid phone number');
      return false;
    }
    
    setError(null);
    return true;
  };
  
  const handleGetCode = async () => {
    if (validatePhone()) {
      try {
        await signInWithPhone(phoneNumber);
        router.push({
          pathname: '/verify-otp',
          params: { phone: phoneNumber }
        });
      } catch (err: any) {
        setError(err.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Header showBackButton title="Phone Verification" />
      
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>Rooh</Text>
          </View>
        </View>
        
        <Text style={styles.description}>
          We'll send a verification code to your phone number
        </Text>
        
        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
        
        <View style={styles.form}>
          <InputField
            placeholder="Phone Number (with country code)"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            type="phone"
            error={error || undefined}
          />
          
          <Button
            title="Get Code"
            onPress={handleGetCode}
            loading={loading}
            style={styles.button}
          />
          
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              By continuing, you agree to our
            </Text>
            <View style={styles.termsContainer}>
              <TouchableOpacity>
                <Text style={styles.termsText}>Terms of Service</Text>
              </TouchableOpacity>
              <Text style={styles.footerText}> and </Text>
              <TouchableOpacity>
                <Text style={styles.termsText}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    alignItems: 'center',
    marginTop: 24,
  },
  logoText: {
    fontSize: 36,
    fontWeight: '700',
    color: Colors.primary[500],
  },
  description: {
    fontSize: 16,
    color: Colors.neutral[600],
    textAlign: 'center',
    marginBottom: 32,
  },
  errorContainer: {
    backgroundColor: Colors.error + '20',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  errorText: {
    color: Colors.error,
    fontSize: 14,
  },
  form: {
    width: '100%',
  },
  button: {
    marginTop: 24,
  },
  footer: {
    marginTop: 48,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: Colors.neutral[600],
  },
  termsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 4,
  },
  termsText: {
    fontSize: 14,
    color: Colors.primary[500],
    fontWeight: '500',
  },
});