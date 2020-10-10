//Import React
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

//Import all required component
import { View, Text } from 'react-native';

import List from '../Components/List';

const SettingsScreen = () => {
  const [user, setUser] = useState('');
  // const [list, setList] = useState([]);

  const listData = [
    {
      key: '1',
      text: 'Almonds',
    },
    {
      key: '2',
      text: 'Wheat',
    },
    {
      key: '3',
      text: 'Dairy',
    },
    {
      key: '4',
      text: 'Soy',
    },
  ];

  useEffect(() => {
    // get all details of user
    AsyncStorage.getItem('userInfo').then((data) => {
      const u = JSON.parse(data);
      setUser(u);
    });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
      <Text style={{ fontSize: 23, marginTop: 10 }}>Setting Screen</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>
        Hey {user.name}, you can update the list here
      </Text>

      <List listData={listData} />
    </View>
  );
};
export default SettingsScreen;
