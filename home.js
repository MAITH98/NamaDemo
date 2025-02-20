import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Navbar from './Navbar';

export default function HomeScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState('Home');

  // Handlers
  const handlePressProfile = () => {
    navigation.navigate('Profile');
  };

  const handlePressRedeem = () => {
    navigation.navigate('Redeem');
  };

  const handlePressElse = () => {
    Alert.alert(
      'Demo Feature',
      "This demo doesn't cover that feature. Please try tapping on the two available functions: Profile & Redeem Points."
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Profile Row */}
      <View style={styles.profileRow}>
        <View style={styles.leftSection}>
          <TouchableOpacity onPress={handlePressProfile}>
            <Image
              source={require('./assets/profile.png')}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <View style={styles.profileDetails}>
            <Text style={styles.userName}>Ahmed AL-Jabri</Text>
            <Text style={styles.userPhone}>+968 0000 0000</Text>
            <View style={styles.membershipRow}>
              <Image
                source={require('./assets/star.png')}
                style={styles.membershipIcon}
              />
              <Text style={styles.pointsText}>2,480</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={handlePressElse}>
          <Image
            source={require('./assets/logo.png')}
            style={styles.namaLogo}
          />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={{ paddingBottom: 100 }} // Added bottom gap
      >
        {/* News Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>News</Text>
          <TouchableOpacity onPress={handlePressElse}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.newsContainer} onPress={handlePressElse}>
          <Image
            source={require('./assets/news-example.png')}
            style={styles.newsImage}
          />
        </TouchableOpacity>

        {/* Services Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Services</Text>
          <TouchableOpacity onPress={handlePressElse}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.servicesGrid}>
          <TouchableOpacity style={styles.serviceItem} onPress={handlePressElse}>
            <Image
              source={require('./assets/pay-bill.png')}
              style={styles.serviceIcon}
            />
            <Text style={styles.serviceText}>Pay Bill</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem} onPress={handlePressElse}>
            <Image
              source={require('./assets/prepaid.png')}
              style={styles.serviceIcon}
            />
            <Text style={styles.serviceText}>Prepaid</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem} onPress={handlePressElse}>
            <Image
              source={require('./assets/faq.png')}
              style={styles.serviceIcon}
            />
            <Text style={styles.serviceText}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem} onPress={handlePressElse}>
            <Image
              source={require('./assets/survey.png')}
              style={styles.serviceIcon}
            />
            <Text style={styles.serviceText}>Survey</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem} onPress={handlePressElse}>
            <Image
              source={require('./assets/about-us.png')}
              style={styles.serviceIcon}
            />
            <Text style={styles.serviceText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceItem} onPress={handlePressElse}>
            <Image
              source={require('./assets/contact-us.png')}
              style={styles.serviceIcon}
            />
            <Text style={styles.serviceText}>Contact Us</Text>
          </TouchableOpacity>
        </View>

        {/* Other Services Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Other Services</Text>
          <TouchableOpacity onPress={handlePressElse}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>

        {/* Redeem Points Card */}
        <TouchableOpacity style={styles.cardContainer} onPress={handlePressRedeem}>
          <View style={styles.cardContent}>
            <Image
              source={require('./assets/starpoint.png')}
              style={styles.cardIcon}
            />
            <View style={styles.cardTextColumn}>
              <Text style={styles.cardTextTop}>Loyalty Program</Text>
              <Text style={styles.cardTextMiddle}>Redeem Points</Text>
              <Text style={styles.cardTextBottom}>
                Use your points to pay bills and enjoy exclusive rewards!
              </Text>
            </View>
            <Image
              source={require('./assets/arrow.png')}
              style={styles.arrowIcon}
            />
          </View>
        </TouchableOpacity>

        {/* Cashback Rewards Card */}
        <TouchableOpacity style={styles.cardContainer} onPress={handlePressElse}>
          <View style={styles.cardContent}>
            <Image
              source={require('./assets/money-icon.png')}
              style={styles.cardIcon}
            />
            <View style={styles.cardTextColumn}>
              <Text style={styles.cardTextTop}>Exclusive Offer</Text>
              <Text style={styles.cardTextMiddle}>Cashback Rewards</Text>
              <Text style={styles.cardTextBottom}>
                Earn cashback on bill payments and save more.
              </Text>
            </View>
            <Image
              source={require('./assets/arrow.png')}
              style={styles.arrowIcon}
            />
          </View>
        </TouchableOpacity>

        {/* Priority Support Card */}
        <TouchableOpacity style={styles.cardContainer} onPress={handlePressElse}>
          <View style={styles.cardContent}>
            <Image
              source={require('./assets/support-icon.png')}
              style={styles.cardIcon}
            />
            <View style={styles.cardTextColumn}>
              <Text style={styles.cardTextTop}>Premium Access</Text>
              <Text style={styles.cardTextMiddle}>Priority Support</Text>
              <Text style={styles.cardTextBottom}>
                Get fast-track assistance for all your transactions.
              </Text>
            </View>
            <Image
              source={require('./assets/arrow.png')}
              style={styles.arrowIcon}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* Navbar placed outside the ScrollView so it remains pinned at the bottom */}
      <Navbar
        selectedTab={selectedTab}
        onPressHome={() => setSelectedTab('Home')}
        onPressProfile={() => setSelectedTab('Profile')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /* Container for the entire screen */
  container: {
    flex: 1,
    backgroundColor: '#F5F4F9', // Updated to match nav bar color
  },
  /* Profile Row */
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  /* Left Section: Profile Image + Details */
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
  },
  profileDetails: {
    marginLeft: 16,
  },
  userName: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: '#000',
  },
  userPhone: {
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
    color: 'rgba(0, 0, 0, 0.4)',
    marginVertical: 2,
  },
  membershipRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  membershipIcon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  pointsText: {
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
    color: '#101010',
  },
  /* Right Section: Logo */
  namaLogo: {
    width: 76.87,
    height: 67.65,
    resizeMode: 'contain',
  },
  /* Scrollable Area */
  scrollArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  /* Section Header */
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAllText: {
    fontSize: 14,
    color: '#888888',
  },
  /* News Section */
  newsContainer: {
    marginHorizontal: 16,
    marginTop: 8,
  },
  newsImage: {
    width: '100%',
    height: 150,
    borderRadius: 19.39,
    resizeMode: 'cover',
  },
  /* Services Section */
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 12,
  },
  serviceItem: {
    width: '28%',
    margin: '2%',
    backgroundColor: '#F5333E',
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 16,
  },
  serviceIcon: {
    width: 44,
    height: 44,
    marginBottom: 8,
  },
  serviceText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#fff',
    opacity: 0.6,
    textAlign: 'center',
  },
  /* Redeem Points Card */
  cardContainer: {
    width: 372,
    height: 101,
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 8,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 12,
  },
  cardIcon: {
    width: 78,
    height: 78,
    marginRight: 12,
  },
  cardTextColumn: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTextTop: {
    fontFamily: 'Inter-Regular',
    fontSize: 10,
    color: '#6DD400',
    marginBottom: 2,
  },
  cardTextMiddle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 2,
  },
  cardTextBottom: {
    fontSize: 12,
    color: '#666',
  },
  arrowIcon: {
    width: 5.56,
    height: 10,
    marginLeft: 8,
    resizeMode: 'contain',
  },
  /* HISTORY & DETAILS Buttons */
  historyDetailsContainer: {
    flexDirection: 'row',
    marginTop: 26,
    paddingHorizontal: 16,
  },
  historyButton: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsButton: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  historyButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  /* Divider */
  divider: {
    height: 1,
    backgroundColor: '#DFDFDF',
    marginTop: 31,
    marginBottom: 0,
    marginHorizontal: 16,
  },
  /* Deals Section */
  dealsScroll: {
    marginTop: 16,
    marginBottom: 16,
  },
  dealsOneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  dealLogoNew: {
    width: 112,
    height: 112,
    resizeMode: 'contain',
    marginRight: 16,
  },
  /* Benefits Section */
  benefitsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    marginBottom: 30,
  },
  benefitItem: {
    alignItems: 'center',
    width: 100,
  },
  benefitIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  benefitText: {
    fontSize: 13,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    color: '#000',
  },
});
