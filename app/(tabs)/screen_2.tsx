// app/(tabs)/screen_2.tsx
import { View, Text, StyleSheet } from 'react-native';

export default function Screen2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 2</Text>
      
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