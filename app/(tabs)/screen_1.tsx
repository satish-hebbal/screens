import React, { useState, useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH - 40; // Full width minus padding

const carouselData = [
  {
    id: '1',
    text: "This year, the most famous festival of Lord Jagannatha will be celebrated with great grandeur in Puri state of Odisha.",
  },
  {
    id: '2',
    text: "Join us for the annual Diwali celebration at the local community center this weekend.",
  },
  {
    id: '3',
    text: "Don't miss the special Ganesh Chaturthi prayers happening all week at the main temple.",
  },
];

export default function Screen1() {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    setActiveSlide(roundIndex);
  };

  const handleDotPress = (index) => {
    scrollViewRef.current?.scrollTo({ x: index * ITEM_WIDTH, animated: true });
    setActiveSlide(index);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <LinearGradient 
          colors={['#FFE6A9', '#F6F3ED']} 
          style={styles.container}
          locations={[0.1, 1]}
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
        
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {carouselData.map((item, index) => (
            <View key={item.id} style={styles.eventCard}>
              <View style={styles.eventImagePlaceholder} />
              <Text style={styles.eventText}>{item.text}</Text>
            </View>
          ))}
        </ScrollView>
        
        <View style={styles.pagination}>
          {carouselData.map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleDotPress(index)}
            >
              <View
                style={[
                  styles.paginationDot,
                  index === activeSlide ? styles.activeDot : null
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F3ED',
    color: '#CC5C1F',
  },
  thePadding: {
    padding: 20,
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
    color: '#CC5C1F',
    marginTop: 10,
    marginLeft: 20,
  },
  greeting2: {
    fontFamily: 'Lexend-Regular',
    fontSize: 20,
    color: '#CC5C1F',
    marginTop: 10,
    marginLeft: 20,
  },
  wisdomCard: {
    backgroundColor: '#FFF0E6',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFB790",
    padding: 10,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wisdomDejain: {
    width: 90,
    objectFit: 'contain',
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
    width: ITEM_WIDTH,
    backgroundColor: '#F3E4DD',
    borderRadius: 10,
    overflow: 'hidden',
  },
  headImage: {
    height: 75,
    width: 75,
    marginTop: 40,
    marginLeft: 20,
    objectFit: 'contain',
  },
  eventImagePlaceholder: {
    width: '100%',
    height: 150,
    backgroundColor: '#ffffff',
  },
  eventText: {
    fontFamily: 'Lexend-Regular',
    fontSize: 16,
    color: '#CC5C1F',
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
    backgroundColor: '#CC5C1F',
  },
});