import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, ScrollView,Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomSearchBar from '@/components/CustomSearchBar'; // Adjust the import path as needed

export default function Screen2() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearch = (text: string) => {
    // Implement search functionality here
    console.log('Searching for:', text);
  };

  const handleSearchFocus = useCallback(() => {
    setIsSearchActive(true);
  }, []);

  const handleSearchBlur = useCallback(() => {
    setIsSearchActive(false);
  }, []);

  const handleOutsidePress = useCallback(() => {
    if (isSearchActive) {
      Keyboard.dismiss();
      setIsSearchActive(false);
    }
  }, [isSearchActive]);

  const popularSearches = [
    'Nearest Devi Temples', 'Matha', 'Hanuman Mandir Near me',
    'River side Temples', 'Hill top temples', 'Iskon Temple'
  ];

  const visitedTemples = [
    { name: 'Shri Gayatri Tapobhoomi', location: 'Hubli, Karnataka' },
    { name: 'Chandra Mouleshwara', location: 'Hubli, Karnataka' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFE6A9" barStyle="dark-content" />
      
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <ScrollView style={styles.container}>

        <View>
          <LinearGradient 
            colors={['#FFE6A9', '#F6F3ED']} 
            style={styles.header}
            locations={[0.5, 1]}
          >
        <Image 
              source={require('../../assets/images/MM-text-icon.png')}
              style={styles.headImage}
              />
          </LinearGradient>
      </View>
         
            {/* <Text style={styles.title}>MANDIR MANTHAN</Text> */}
            <CustomSearchBar 
              onSearch={handleSearch}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
            />
          

          <View style={styles.content}>
            <Text style={styles.sectionTitle}>Popular Searches</Text>
            <View style={styles.popularSearches}>
              {popularSearches.map((item, index) => (
                <TouchableOpacity key={index} style={styles.searchTag}>
                  <Text style={styles.searchTagText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.sectionTitle}>Did you visit?</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.visitedTemplesScroll}>
              {visitedTemples.map((temple, index) => (
                <View key={index} style={styles.templeCard}>
                  {/* Placeholder for temple image */}
                  <View style={styles.templeImagePlaceholder} />
                  <Text style={styles.templeText}>{temple.name}</Text>
                  <Text style={styles.templeLocation}>{temple.location}</Text>
                </View>
              ))}
            </ScrollView>

            <TouchableOpacity style={styles.exploreButton}>
            <Image 
              source={require('../../assets/icons/locationIcon.png')}
              style={styles.iconSize}
              />
              <Text style={styles.exploreButtonText}>Explore All Temples in Hubli-Dharwad</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ashramsButton}>
            <Image 
              source={require('../../assets/icons/AshramIcon.png')}
              style={styles.iconSize}
              />
              <Text style={styles.ashramsButtonText}>Ashrams Near you</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
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
  title: {
    fontFamily: 'Lexend-Bold',
    fontSize: 24,
    marginBottom: 16,
    color: '#CC5C1F',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Lexend-SemiBold',
    fontSize: 20,
    color: '#CC5C1F',
    marginTop: 10,
    marginBottom: 15,
  },
  popularSearches: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  searchTag: {
    backgroundColor: '#F3E4DD',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 5,
  },
  searchTagText: {
    fontFamily: 'Lexend-Regular',
    fontSize: 13,
    color: '#E29469',
  },
  visitedTemplesScroll: {
    marginBottom: 20,
  },
  templeCard: {
    backgroundColor: '#F3E4DD',
    borderRadius: 10,
    marginRight: 15,
    width: 200,
    overflow: 'hidden',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 3,
  },
  templeImagePlaceholder: {
    width: '100%',
    height: 120,
    backgroundColor: '#E1E1E1',
  },
  templeText: {
    fontFamily: 'Lexend-SemiBold',
    fontSize: 16,
    color: '#CC5C1F',
    padding: 10,
  },
  templeLocation: {
    fontFamily: 'Lexend-Regular',
    fontSize: 14,
    color: '#CC5C1F',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  iconSize:{
    height:20,
    width:20,
    marginHorizontal:20,
    objectFit:'contain',
  },
  exploreButton: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#F3E4DD',
    borderRadius: 15,
    borderWidth:1,
    borderColor:'#F0CBB7',
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  exploreButtonText: {
    fontFamily: 'Lexend-Mid',
    fontSize: 14,
    color: '#CC5C1F',
  },
  ashramsButton: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#F3E4DD',
    borderRadius: 15,
    borderWidth:1,
    borderColor:'#F0CBB7',
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  ashramsButtonText: {
    fontFamily: 'Lexend-Mid',
    fontSize: 14,
    color: '#CC5C1F',
  },
});