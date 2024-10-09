import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, ScrollView ,Image} from 'react-native';

export default function Screen1() {
  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.header}>
        <LinearGradient 
        colors={['#FFE6A9', '#F6F3ED']} 
        style={styles.container}
        locations={[0.1, 1]} // 1:10 ratio
        >

            <Image 
              source={require('../../assets/images/MM-text-icon.png')}
              style={styles.headImage}
              />
          <Text style={styles.greeting}>Shubhodaya, <Text style={styles.greeting2}>Satish</Text></Text>
          
        </LinearGradient>
      </View>

      <View style={styles.thePadding}>

      
      <View style={styles.wisdomCard}>
        
        <Text style={styles.wisdomTitle}>Today's Wisdom</Text>
        <Image 
              source={require('../../assets/images/WisdomDejain.png')}
              style={styles.wisdomDejain}
              />
        <Text style={styles.wisdomQuote}>Let the breath lead the way.</Text>
        <Image 
              source={require('../../assets/images/WisdomDejain.png')}
              style={[styles.wisdomDejain, { 
                transform: [{ rotate: '180deg' }], 
                marginTop: 5                       
              }]} 
              />
      </View>
      
      <Text style={styles.sectionTitle}>What's on Today?</Text>
      
      <View style={styles.eventCard}>
        
        <Text style={styles.eventText}>
          This year, the most famous festival of Lord Jagannatha will be celebrated with great grandeur in Puri state of Odisha.
        </Text>
      </View>
      
      <View style={styles.pagination}>
        <View style={[styles.paginationDot, styles.activeDot]} />
        <View style={styles.paginationDot} />
        <View style={styles.paginationDot} />
      </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F3ED',
    color:'#CC5C1F',
   
  },
  thePadding:{
    padding:20,
  },
  header: {
    marginTop: 0,
  },
  logo: {
    fontFamily: 'Lexend-Bold',
    fontSize: 20,
    color: '#FF6B35',
  },
  greeting: {
    fontFamily: 'Lexend-SemiBold',
    fontSize: 20,
    color:'#CC5C1F',
    marginTop: 10,
    marginLeft: 20,
  },
  greeting2: {
    fontFamily: 'Lexend-Regular',
    fontSize: 20,
    color:'#CC5C1F',
    marginTop: 10,
    marginLeft: 20,
  },
  wisdomCard: {
    backgroundColor: '#FFF0E6',
    borderRadius: 10,
    borderWidth: 1,
    borderColor:"#FFB790",
    padding: 10,
    marginTop: 20,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  wisdomDejain:{
    width:90,
    objectFit:'contain',
  },
  wisdomTitle: {
    fontFamily: 'Lexend-Regular',
    fontSize: 10,
    opacity: 0.5,
    color: '#666666',
  },
  wisdomQuote: {
    fontFamily: 'Source-Serif-Regular',
    fontSize: 18,
    color: '#CC5C1F',
  },
  sectionTitle: {
    fontFamily: 'Lexend-SemiBold',
    fontSize: 20,
    color: '#CC5C1F',
    marginTop: 30,
    marginBottom: 15,
  },
  eventCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headImage:{
    height:75,
    width:75,
    marginTop : 40,
    marginLeft : 20,
    objectFit:'contain',
  },
  eventImage: {
    width: '100%',
    height: 200,
  },
  eventText: {
    fontFamily: 'Lexend-Regular',
    fontSize: 16,
    color: '#333333',
    padding: 15,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#CCCCCC',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FF6B35',
  },
});