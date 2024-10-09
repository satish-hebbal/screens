import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Screen3() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFE6A9" barStyle="dark-content" />
      <ScrollView>
        <LinearGradient 
          colors={['#FFE6A9', '#F6F3ED']} 
          style={styles.header}
          locations={[0.1, 1]}
        >
          <Image 
            source={require('../../assets/images/MM-text-icon.png')}
            style={styles.headImage}
          />
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.templeInfoCard}>
            <View style={styles.templeImage} />
            
            <View style={styles.templeInfo}>
              <View style={styles.statusContainer}>
                <Text style={styles.openStatus}>Open</Text>
                <Text style={styles.timings}>5am - 7pm</Text>
              </View>
              
              <Text style={styles.templeName}>Ganesh Temple</Text>
              <Text style={styles.templeAddress}>Rajeev Nagar Rd, Rajiv Nagar, Akshay Colony, Hubballi, Karnataka</Text>
              
              <TouchableOpacity style={styles.donateButton}>
                <Image 
                  source={require('../../assets/icons/donate.png')}
                  style={styles.donateIcon}
                />
                <Text style={styles.donateButtonText}>Donate Today</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Temple Seva</Text>
          
          <View style={styles.sevaContainer}>
            <TouchableOpacity style={styles.sevaCard}>
              <View style={styles.sevaImage} />
              <View style={styles.sevaInfo}>
                <Text style={styles.sevaName}>Birthday Special Archana</Text>
                <View style={styles.sevaBottom}>
                  <Text style={styles.sevaPrice}>₹ 251</Text>
                  <TouchableOpacity style={styles.chooseSevaButton}>
                    <Text style={styles.chooseSevaButtonText}>Choose Seva</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.sevaCard}>
              <View style={styles.sevaImage} />
              <View style={styles.sevaInfo}>
                <Text style={styles.sevaName}>Satyanarayan Puja</Text>
                <View style={styles.sevaBottom}>
                  <Text style={styles.sevaPrice}>₹ 501</Text>
                  <TouchableOpacity style={styles.chooseSevaButton}>
                    <Text style={styles.chooseSevaButtonText}>Choose Seva</Text>
                  </TouchableOpacity>
                </View>
              </View>
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
    backgroundColor: '#F6F3ED',
  },
  headImage:{
    height:75,
    width:75,
    marginTop : 20,
    objectFit:'contain',
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  content: {
    padding: 20,
  },
  templeInfoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  templeImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#E1E1E1',
  },
  templeInfo: {
    padding: 20,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  openStatus: {
    fontFamily: 'Lexend-SemiBold',
    fontSize: 16,
    color: '#4CAF50',
  },
  timings: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    color: '#CC5C1F',
  },
  templeName: {
    fontFamily: 'Lexend-Bold',
    fontSize: 24,
    color: '#CC5C1F',
    marginBottom: 5,
  },
  templeAddress: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    color: '#666666',
    marginBottom: 20,
  },
  donateButton: {
    flexDirection: 'row',
    backgroundColor: '#FFE6A9',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  donateIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  donateButtonText: {
    fontFamily: 'Lexend-SemiBold',
    fontSize: 16,
    color: '#CC5C1F',
  },
  sectionTitle: {
    fontFamily: 'Lexend-SemiBold',
    fontSize: 20,
    color: '#CC5C1F',
    marginBottom: 15,
  },
  sevaContainer: {
    flexDirection: 'column',
  },
  sevaCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  sevaImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#E1E1E1',
  },
  sevaInfo: {
    padding: 15,
  },
  sevaName: {
    fontFamily: 'Lexend-SemiBold',
    fontSize: 18,
    color: '#CC5C1F',
    marginBottom: 10,
  },
  sevaBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sevaPrice: {
    fontFamily: 'Lexend-Regular',
    fontSize: 16,
    color: '#666666',
  },
  chooseSevaButton: {
    backgroundColor: '#FFE6A9',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  chooseSevaButtonText: {
    fontFamily: 'Lexend-SemiBold',
    fontSize: 14,
    color: '#CC5C1F',
  },
});