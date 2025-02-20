import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Navbar({ selectedTab = 'Home' }) {
  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Animated scale value for the FAB
  const fabScale = useRef(new Animated.Value(1)).current;

  const handleFabPress = () => {
    // Animate FAB scale up/down
    Animated.timing(fabScale, {
      toValue: menuOpen ? 1 : 1.1, // Increase size when opening, revert when closing
      duration: 200,
      useNativeDriver: true,
    }).start();

    // Toggle menu state
    setMenuOpen(!menuOpen);
  };

  const handlePressHome = () => {
    navigation.navigate('Home');
  };

  const handlePressProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.outerContainer}>
      {/* The wave or any bottom-centered background image */}
      <View style={styles.waveContainer}>
        <Image
          source={require('./assets/navbar-background.png')}
          style={styles.waveImage}
        />
      </View>

      {/* Nav content (tabs) */}
      <View style={styles.navContent}>
        {/* Left Tab: Home */}
        <TouchableOpacity style={styles.tabItem} onPress={handlePressHome}>
          <Image
            source={
              selectedTab === 'Home'
                ? require('./assets/home-selected.png')
                : require('./assets/home-unselected.png')
            }
            style={styles.tabIcon}
          />
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Home' && { color: '#F5333E' },
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>

        {/* Right Tab: Profile */}
        <TouchableOpacity style={styles.tabItem} onPress={handlePressProfile}>
          <Image
            source={
              selectedTab === 'Profile'
                ? require('./assets/profile-selected.png')
                : require('./assets/profile-unselected.png')
            }
            style={styles.tabIcon}
          />
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Profile' && { color: '#F5333E' },
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>

      {/* Center FAB (on top of everything) */}
      {menuOpen && (
        <View style={styles.menuIconsContainer}>
          <TouchableOpacity style={[styles.menuIconWrapper, { left: -60, top: -40 }]}>
            <Image
              source={require('./assets/phone.png')}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.menuIconWrapper, { top: -80 }]}>
            <Image
              source={require('./assets/mail.png')}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.menuIconWrapper, { right: -60, top: -40 }]}>
            <Image
              source={require('./assets/chat.png')}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
        </View>
      )}

      {/* Wrap the FAB in a TouchableOpacity, and animate its container */}
      <TouchableOpacity activeOpacity={1} onPress={handleFabPress} style={styles.fabTouchable}>
        <Animated.View
          style={[
            styles.fabButton,
            {
              // Change background color when menu is open
              backgroundColor: menuOpen ? '#F5F4F9' : '#F5333E',
              transform: [{ scale: fabScale }],
            },
          ]}
        >
          <Image
            source={
              menuOpen
                ? require('./assets/close.png') // X image
                : require('./assets/plus.png')  // + image
            }
            style={[
              styles.fabIcon,
              // Change icon color when menu is open
              { tintColor: menuOpen ? '#020619' : '#FFFFFF' },
            ]}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}

const FAB_SIZE = 60;

const styles = StyleSheet.create({
  outerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: 'transparent',
    zIndex: 999,
    overflow: 'visible',
  },
  waveContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  waveImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  navContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  tabItem: {
    bottom:20,
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
    marginBottom: 4,
  },
  tabText: {
    fontSize: 12,
    color: '#2E2925',
  },
  fabTouchable: {
    position: 'absolute',
    bottom: 60,
    left: '50%',
    transform: [{ translateX: -FAB_SIZE / 2 }],
  },
  fabButton: {
    width: FAB_SIZE,
    height: FAB_SIZE,
    borderRadius: FAB_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  fabIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  menuIconsContainer: {
    position: 'absolute',
    bottom: 30 + FAB_SIZE / 2,
    left: '50%',
    transform: [{ translateX: -FAB_SIZE / 2 }],
    width: FAB_SIZE,
    height: FAB_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIconWrapper: {
    position: 'absolute',
    backgroundColor: '#2E2925',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
    resizeMode: 'contain',
  },
});
