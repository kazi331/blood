import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';
import Colors from '@/constants/Colors';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Header showBackButton />
      
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/3987249/pexels-photo-3987249.jpeg?auto=compress&cs=tinysrgb&w=1600' }}
            style={styles.logoBackground}
          />
          <View style={styles.logoWrapper}>
            <View style={styles.logo}>
              <Image
                source={{ uri: 'https://i.imgur.com/ZSj1v5s.png' }}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.appName}>Rooh</Text>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            title="Sign Up"
            onPress={() => router.push('/sign-up')}
            variant="outline"
            style={styles.button}
          />
          
          <Button
            title="Sign In"
            onPress={() => router.push('/sign-in')}
            style={styles.button}
          />
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
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
  },
  logoWrapper: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  logoImage: {
    width: 80,
    height: 80,
    tintColor: Colors.primary[500],
  },
  appName: {
    fontSize: 40,
    fontWeight: '700',
    color: Colors.primary[500],
    marginTop: 16,
  },
  buttonsContainer: {
    width: '100%',
    marginBottom: 24,
  },
  button: {
    marginBottom: 16,
  },
});