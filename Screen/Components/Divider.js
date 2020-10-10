//Import React
import React from 'react';

//Import all required component
import { View, StyleSheet } from 'react-native';

const Divider = () => {
  return (
    <>
      <View style={styles.profileHeaderLine} />
    </>
  );
};

const styles = StyleSheet.create({
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
    marginBottom: 10,
  },
});

export default Divider;
