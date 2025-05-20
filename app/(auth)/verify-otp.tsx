import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
import Colors from '@/constants/Colors';
import Button from '@/components/common/Button';
import OTPInput from '@/components/auth/OTPInput';
import Header from '@/components/common/Header';

export default function VerifyOTPScreen() {
  const { phone } = useLocalSearchParams<{ phone: string }>();
  const [countdown, setCountdown] = useState(60);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  const { verifyOTP, loading } = useAuth();
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [countdown]);
  
  const handleResendCode = () => {
    // Implement resend code logic
    setCountdown(60);
  };
  
  const handleVerify = async () => {
    if (!otp || otp.length !== 6) {
      setError('Please enter a valid verification code');
      return;
    }
    
    try {
      await verifyOTP(phone || '', otp);
      router.replace('/(tabs)');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Header showBackButton title="Verify OTP" />
      
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>Rooh</Text>
          </View>
        </View>
        
        <Text style={styles.description}>
          Enter the 6-digit verification code sent to 
          <Text style={styles.phoneText}> {phone}</Text>
        </Text>
        
        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
        
        <OTPInput 
          codeLength={6} 
          onCodeFilled={(code) => setOtp(code)} 
        />
        
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>
            Didn't receive the code? 
          </Text>
          
          {countdown > 0 ? (
            <Text style={styles.countdownText}>
              Resend in {countdown}s
            </Text>
          ) : (
            <TouchableOpacity onPress={handleResendCode}>
              <Text style={styles.resendButtonText}>Resend Code</Text>
            </TouchableOpacity>
          )}
        </View>
        
        <Button
          title="Verify"
          onPress={handleVerify}
          loading={loading}
          style={styles.button}
        />
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
  phoneText: {
    fontWeight: '600',
    color: Colors.neutral[800],
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
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  resendText: {
    fontSize: 14,
    color: Colors.neutral[600],
  },
  countdownText: {
    fontSize: 14,
    color: Colors.neutral[500],
    marginLeft: 4,
  },
  resendButtonText: {
    fontSize: 14,
    color: Colors.primary[500],
    fontWeight: '600',
    marginLeft: 4,
  },
  button: {
    marginTop: 8,
  },
});