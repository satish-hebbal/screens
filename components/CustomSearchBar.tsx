import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';

interface CustomSearchBarProps {
  onSearch: (text: string) => void;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

const CustomSearchBar: React.FC<CustomSearchBarProps> = ({ 
  onSearch, 
  placeholder = 'Search for a Temple',
  onFocus,
  onBlur
}) => {
  const [isActive, setIsActive] = useState(false);
  const [animatedValue] = useState(new Animated.Value(0));
  const inputRef = useRef<TextInput>(null);

  const handleFocus = () => {
    setIsActive(true);
    onFocus && onFocus();
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsActive(false);
    onBlur && onBlur();
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const overlayOpacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const inputTranslateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [40, 0],
  });

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Animated.View style={[styles.overlay, { opacity: overlayOpacity }]}>
          <Image
            source={require('../assets/icons/templeOverlay4.png')}
            style={styles.templeIcon}
            resizeMode="contain"
          />
        </Animated.View>
        <Animated.View style={[styles.inputContainer, { transform: [{ translateX: inputTranslateX }] }]}>
          <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#999999"
            onChangeText={onSearch}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </Animated.View>
        <TouchableOpacity style={styles.searchButton}>
          <Image
            source={require('../assets/icons/searchIcon.png')}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:20,
    paddingVertical: 0,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth:0.25,
    borderColor: '#E29469',  
    borderRadius: 25,
    height: 50,
    shadowColor: '#FF9933',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  overlay: {
    position: 'absolute',
    left: 15,
    height: '100%',
    justifyContent: 'center',
  },
  templeIcon: {
    width: 60,
    height: 30,
  },
  inputContainer: {
    marginLeft:20,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    fontFamily: 'Lexend-Regular',
    fontSize: 16,
    color: '#333333',
    paddingLeft: 15,
  },
  searchButton: {
    padding: 15,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
});

export default CustomSearchBar;