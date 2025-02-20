import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Navbar from './Navbar'; // Ensure the path is correct

export default function Profile({ navigation }) {
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleLogout = () => {
    // Reset the navigator to only include the Main (login) screen
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={handleGoBack}>
            <Image
              source={require('./assets/back-arrow.png')}
              style={styles.backArrow}
            />
          </TouchableOpacity>
          <Image
            source={require('./assets/logo.png')}
            style={styles.logo}
          />
        </View>

        {/* Profile Image and Info */}
        <View style={styles.profileSection}>
          <Image
            source={require('./assets/profile.png')}
            style={styles.profileImage}
          />
          <Text style={styles.userName}>Ahmed AL-Jabri</Text>
          <Text style={styles.userPhone}>+968 0000 0000</Text>
        </View>

        {/* Settings Items */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Account</Text>
            <Image
              source={require('./assets/arrow-r.png')}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Language</Text>
            <Image
              source={require('./assets/arrow-r.png')}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Dark Mode</Text>
            <Image
              source={require('./assets/arrow-r.png')}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Divider between Dark Mode and Logout */}
        <View style={styles.divider} />

        {/* Logout Row */}
        <TouchableOpacity style={styles.logoutContainer} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
          <Image
            source={require('./assets/logout-icon.png')}
            style={styles.logoutIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Navbar at the bottom */}
      <Navbar
        selectedTab="Profile"
        onPressHome={() => navigation.navigate('Home')}
        onPressProfile={() => navigation.navigate('Profile')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F4F9', // Greyish color covering the unsafe area
  },
  // White background for the main content
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
  },
  backArrow: {
    width: 33,
    height: 33,
    resizeMode: 'contain',
  },
  logo: {
    width: 76.87,
    height: 67.65,
    resizeMode: 'contain',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  userName: {
    fontSize: 24,
    fontFamily: 'Roboto-Regular',
    color: '#000',
    marginBottom: 4,
  },
  userPhone: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: 'rgba(0, 0, 0, 0.4)',
  },
  menuContainer: {
    marginTop: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  menuItemText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: 'rgba(0, 0, 0, 0.7)',
  },
  arrowIcon: {
    width: 24,
    height: 24,
    tintColor: '#000',
    resizeMode: 'contain',
  },
  divider: {
    height: 1,
    backgroundColor: '#DFDFDF',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  logoutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  logoutText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: 'rgba(0, 0, 0, 0.7)',
  },
  logoutIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
