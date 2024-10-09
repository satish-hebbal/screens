import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Screen5() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 5</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Lexend-Bold',
    fontSize: 24,
    marginBottom: 16,
  },
  subtitle: {
    fontFamily: 'Lexend-SemiBold',
    fontSize: 18,
    marginBottom: 8,
  },
  body: {
    fontFamily: 'Lexend-Regular',
    fontSize: 16,
  },
});