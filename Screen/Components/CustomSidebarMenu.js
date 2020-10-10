//Import React
import React, { useState, useEffect } from 'react';

//Import all required component
import { View, StyleSheet, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import SidebarHeader from './SidebarHeader';

const CustomSidebarMenu = (props) => {
  const [user, setUser] = useState('');

  let items = [
    {
      navOptionName: 'Home Screen',
      screenToNavigate: 'HomeScreen',
    },
    {
      navOptionName: 'Setting Screen',
      screenToNavigate: 'SettingsScreen',
    },
    {
      navOptionName: 'Logout',
      screenToNavigate: 'logout',
    },
  ];

  const handleClick = (index, screenToNavigate) => {
    if (screenToNavigate == 'logout') {
      props.navigation.toggleDrawer();
      Alert.alert(
        'Logout',
        'Are you sure? You want to logout?',
        [
          {
            text: 'Cancel',
            onPress: () => {
              return null;
            },
          },
          {
            text: 'Confirm',
            onPress: () => {
              AsyncStorage.clear();
              props.navigation.navigate('Auth');
              console.log('logout');
            },
          },
        ],
        { cancelable: false },
      );
    } else {
      props.navigation.toggleDrawer();
      global.currentScreenIndex = screenToNavigate;
      props.navigation.navigate(screenToNavigate);
    }
  };

  useEffect(() => {
    // get all details of user
    AsyncStorage.getItem('userInfo').then((data) => {
      // console.log('data in async------------------>>>>>>', data);
      const u = JSON.parse(data);
      setUser(u);
    });
  }, []);

  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <SidebarHeader {...user} />

      <View style={{ width: '100%', flex: 1 }}>
        {items.map((item, key) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 20,
              color: 'white',
              backgroundColor:
                global.currentScreenIndex === item.screenToNavigate ? '#4b9ff2' : '#307ecc',
            }}
            key={key}
            onStartShouldSetResponder={() => handleClick(key, item.screenToNavigate)}>
            <Text style={{ fontSize: 15, color: 'white' }}>{item.navOptionName}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#307ecc',
    paddingTop: 40,
    color: 'white',
  },
});
export default CustomSidebarMenu;
