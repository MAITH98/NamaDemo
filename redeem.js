import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Navbar from './Navbar'; // Ensure the path is correct

export default function Redeem({ navigation }) {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.fullScreen}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.contentContainer}>
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

          <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 70 }}>
            <View style={styles.cardContainer}>
              <Image
                source={require('./assets/card.png')}
                style={styles.cardImage}
              />
            </View>

            <View style={styles.historyDetailsContainer}>
              <TouchableOpacity style={styles.historyButton}>
                <Text style={styles.historyButtonText}>HISTORY</Text>
              </TouchableOpacity>

              <View style={{ width: 16 }} />

              <TouchableOpacity style={styles.detailsButton}>
                <Text style={styles.historyButtonText}>DETAILS</Text>
              </TouchableOpacity>
            </View>

            {/* Divider */}
            <View style={styles.divider} />

            {/* Deals Section */}
            <Text style={styles.sectionHeading}>DEALS</Text>

            <ScrollView
              horizontal
              style={styles.dealsScroll}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.dealsOneRow}>
                <Image
                  source={require('./assets/talabat.png')}
                  style={styles.dealLogoNew}
                />
                <Image
                  source={require('./assets/red.png')}
                  style={styles.dealLogoNew}
                />
                <Image
                  source={require('./assets/omantel.png')}
                  style={styles.dealLogoNew}
                />
                <Image
                  source={require('./assets/otaxi.png')}
                  style={styles.dealLogoNew}
                />
              </View>
            </ScrollView>

            {/* Benefits Section */}
            <Text style={styles.sectionHeading}>BENEFITS</Text>

            <View style={styles.benefitsRow}>
              <View style={styles.benefitItem}>
                <Image
                  source={require('./assets/extra-returns.png')}
                  style={styles.benefitIcon}
                />
                <Text style={styles.benefitText}>Extra Returns</Text>
              </View>

              <View style={styles.benefitItem}>
                <Image
                  source={require('./assets/early-deals.png')}
                  style={styles.benefitIcon}
                />
                <Text style={styles.benefitText}>Early Deals</Text>
              </View>

              <View style={styles.benefitItem}>
                <Image
                  source={require('./assets/vip.png')}
                  style={styles.benefitIcon}
                />
                <Text style={styles.benefitText}>Priority Support</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Navbar at the bottom */}
        <Navbar
          selectedTab="Redeem"
          onPressHome={() => navigation.navigate('Home')}
          onPressRedeem={() => navigation.navigate('Redeem')}
          onPressProfile={() => navigation.navigate('Profile')}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: '#F5F4F9', // Greyish background covering the unsafe area
  },
  safeArea: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background for safe area content
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
  cardContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  cardImage: {
    width: 372,
    height: 235,
    resizeMode: 'cover',
  },
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
  divider: {
    height: 1,
    backgroundColor: '#DFDFDF',
    marginTop: 31,
    marginBottom: 0,
    marginHorizontal: 16,
  },
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
  sectionHeading: {
    marginTop: 24,
    marginLeft: 16,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
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
