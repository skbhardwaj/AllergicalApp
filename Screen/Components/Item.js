//Import React
import React, { useState, useEffect } from 'react';

//Import all required component
import { View, Text, Button } from 'react-native';

const Item = (props) => {
  const { item, onDelete } = props;

  const onPress = () => {
    onDelete(item);
  };

  return (
    <View
      style={{
        marginBottom: 10,
        width: '100%',
      }}>
      <Text>{item.text}</Text>
      <Button title="Delete" onPress={onPress}></Button>
    </View>
  );
};
export default Item;
