//Import React
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

//Import all required component
import { View, Text, Button } from 'react-native';
import Divider from '../Components/Divider';

const HomeScreen = (props) => {
  global.currentScreenIndex = 'HomeScreen';
  const [user, setUser] = useState('');

  useEffect(() => {
    // get all details of user
    AsyncStorage.getItem('userInfo').then((data) => {
      const u = JSON.parse(data);
      setUser(u);
    });
  }, []);

  const testHandler = () => {
    props.navigation.navigate('TestScreen', { user });
  };

  const pressHandler1 = () => {
    props.navigation.navigate('CaptureScreen1', { user });
  };

  const pressHandler2 = () => {
    props.navigation.navigate('CaptureScreen2', { user });
  };

  const pressHandler3 = () => {
    props.navigation.navigate('CaptureScreen3', { user });
  };

  const pressHandler4 = () => {
    props.navigation.navigate('CaptureScreen4', { user });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
      <Text style={{ fontSize: 23, marginTop: 10 }}>
        Home Screen {/* - {process.env.NODE_ENV} */}
      </Text>
      <Text style={{ fontSize: 18, marginTop: 10, marginBottom: 20 }}>home screen details</Text>
      {/* <Divider />
      <Button title="Test" onPress={testHandler} />
      <Divider />
      <Button title="Scan1 - tesseract" onPress={pressHandler1} />
      <Divider />
      <Button title="Scan2 - tfjs" onPress={pressHandler2} />
      <Divider />
      <Button title="Scan3 - pictionary" onPress={pressHandler3} /> */}
      <Divider />
      <Button title="Scan4 - basic" onPress={pressHandler4} />
    </View>
  );
};
export default HomeScreen;
