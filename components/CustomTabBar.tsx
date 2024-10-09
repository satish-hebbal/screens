import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

type IconProps = {
  focused: boolean;
  color: string;
  size: number;
};

type TabBarIconType = string | ((props: IconProps) => React.ReactNode);

const renderIcon = (icon: TabBarIconType, props: IconProps) => {
  if (typeof icon === 'string') {
    return <MaterialIcons name={icon as keyof typeof MaterialIcons.glyphMap} {...props} />;
  }
  if (typeof icon === 'function') {
    return icon(props);
  }
  return null;
};

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <LinearGradient
      colors={['#F6F3ED', '#FFE6A9']}
      style={styles.container}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined 
          ? options.tabBarLabel 
          : options.title !== undefined 
          ? options.title 
          : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={styles.tabItem}
          >
            <View style={[styles.iconContainer, isFocused && styles.activeIconContainer]}>
              {options.tabBarIcon && renderIcon(options.tabBarIcon, {
                focused: isFocused,
                color: '#8B0000',
                size: 24,
              })}
            </View>
            <Text style={styles.tabText}>{label!}</Text>
          </TouchableOpacity>
        );
      })}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIconContainer: {
    backgroundColor: '#fbbc04',
    width:55,
    height:30,
    borderRadius: 15,
  },
  tabText: {
    fontFamily: 'Lexend-Mid',
    color: '#8B0000',
    fontSize: 10,
  },
});

export default CustomTabBar;