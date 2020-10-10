//Import React and Hooks we needed
import React, { useState, useEffect } from 'react';

//Import all required component
import { View, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import ActivityIndicatorLoader from './Components/ActivityIndicatorLoader';

const SplashScreen = (props) => {
  //State for ActivityIndicator animation
  let [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('userInfo').then((value) => {
        return props.navigation.navigate(value ? 'DrawerNavigationRoutes' : 'Auth');
      });
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../Image/minion.png')}
        style={{ width: '90%', resizeMode: 'contain', margin: 30 }}
      />
      <ActivityIndicatorLoader animating={animating} />
    </View>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
});
