import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
import Colors from '@/constants/Colors';
import Button from '@/components/common/Button';
import InputField from '@/components/auth/InputField';
import Header from '@/components/common/Header';
import SocialButton from '@/components/auth/SocialButton';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{email?: string, password?: string}>({});
  
  const { signInWithEmail, signInWithGoogle, loading, error } = useAuth();

  const validate = () => {
    const newErrors: {email?: string, password?: string} = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSignIn = async () => {
    if (validate()) {
      await signInWithEmail(email, password);
    }
  };
  
  const handlePhoneSignIn = () => {
    router.push('/phone-verification');
  };

  return (
    <View style={styles.container}>
      <Header showBackButton title="Sign In" />
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>Rooh</Text>
          </View>
        </View>
        
        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}
        
        <View style={styles.form}>
          <InputField
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            type="email"
            error={errors.email}
          />
          
          <InputField
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            type="password"
            error={errors.password}
          />
          
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          
          <Button
            title="Sign In"
            onPress={handleSignIn}
            loading={loading}
            style={styles.signInButton}
          />
          
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
          </View>
          
          <TouchableOpacity style={styles.phoneButton} onPress={handlePhoneSignIn}>
            <Text style={styles.phoneButtonText}>Sign in with Phone Number</Text>
          </TouchableOpacity>
          
          <SocialButton
            provider="google"
            onPress={() => signInWithGoogle()}
            style={styles.socialButton}
          />
          
          <View style={styles.signUpContainer}>
            <Text style={styles.noAccountText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/sign-up')}>
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollView: {
    flex: 1,
  },
  content: {
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
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: Colors.primary[500],
    fontSize: 14,
  },
  signInButton: {
    marginBottom: 24,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.neutral[300],
  },
  orText: {
    marginHorizontal: 16,
    color: Colors.neutral[500],
    fontSize: 14,
  },
  phoneButton: {
    alignItems: 'center',
    marginBottom: 16,
  },
  phoneButtonText: {
    color: Colors.primary[500],
    fontSize: 16,
    fontWeight: '500',
  },
  socialButton: {
    marginBottom: 24,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  noAccountText: {
    color: Colors.neutral[600],
    fontSize: 14,
  },
  signUpText: {
    color: Colors.primary[500],
    fontWeight: '600',
    fontSize: 14,
  },
});