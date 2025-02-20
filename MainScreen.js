import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as LocalAuthentication from 'expo-local-authentication';

export default function MainScreen({ onLoginSuccess, navigation }) {
  const handleFaceIdLogin = async () => {
    try {
      // Check if the device supports biometric authentication
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      if (!hasHardware) {
        Alert.alert(
          'Face ID Not Supported',
          "Your device doesn't support Face ID or fingerprint authentication."
        );
        return;
      }

      // Check if biometrics are enrolled
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();
      if (!isEnrolled) {
        Alert.alert(
          'Not Enrolled',
          'No biometric authentication is set up on this device. Please enable Face ID in settings.'
        );
        return;
      }

      // Attempt authentication
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate with Face ID',
        cancelLabel: 'Cancel',
        fallbackLabel: 'Use Passcode',
        disableDeviceFallback: false,
      });

      if (result.success) {
        Alert.alert('Authenticated', 'You have successfully logged in with Apple ID!');
        onLoginSuccess();  // Notify App.js to switch to the HomeScreen.
      } else {
        if (result.error === 'user_cancel') {
          Alert.alert('Authentication Canceled', 'You canceled Face ID authentication.');
        } else if (result.error === 'not_enrolled') {
          Alert.alert('Not Enrolled', 'No Face ID enrolled on this device.');
        } else {
          Alert.alert('Authentication Failed', 'Face ID was not recognized. Try again.');
        }
      }
    } catch (error) {
      Alert.alert('Error', `An error occurred: ${error.message}`);
      console.warn('Face ID Error:', error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('./assets/namalogo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleFaceIdLogin}>
          <View style={styles.buttonContent}>
            <Image
              source={require('./assets/apple-icon.png')}
              style={styles.appleIcon}
            />
            <Text style={styles.buttonText}>Login with Apple</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <View style={styles.buttonContent}>
            <Image
              source={require('./assets/google-icon.png')}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Login with Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <View style={styles.buttonContent}>
            <Image
              source={require('./assets/outlook-icon.png')}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Login with Outlook</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Don’t have an account?</Text>
        <Text style={[styles.footerText, styles.signUpText]}> Sign up</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '50%',
    height: '50%',
    marginBottom: 40,
  },
  buttonsContainer: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 30,
  },
  loginButton: {
    width: '100%',
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appleIcon: {
    width: 18,
    height: 23,
    marginRight: 8,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  buttonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
  },
  footerContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  footerText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#999',
  },
  signUpText: {
    color: 'red',
  },
});
