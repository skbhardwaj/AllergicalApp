//Import React
import React from 'react';

//Import all required component
import { View, StyleSheet, Text, Image } from 'react-native';

import Divider from './Divider';

const SidebarHeader = (props) => {
  const { name, pic } = props;

  return (
    <>
      <View style={styles.profileHeader}>
        <View style={styles.profileHeaderPicCircle}>
          {pic ? (
            <Image style={[styles.profilePic]} source={{ uri: pic }} />
          ) : (
            <Text style={{ fontSize: 25, color: '#307ecc' }}>
              {(name || 'X').charAt(0).toUpperCase()}
            </Text>
          )}
        </View>
        <Text style={styles.profileHeaderText}>{name || 'X'}</Text>
      </View>
      <Divider />
    </>
  );
};

const styles = StyleSheet.create({
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#307ecc',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profilePic: {
    height: 60,
    width: 60,
    borderRadius: 60,
  },
});

export default SidebarHeader;
