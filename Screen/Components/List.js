//Import React
import React, { useState, useEffect } from 'react';

//Import all required component
import { View, Alert } from 'react-native';

import Item from './Item';

const List = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(props.listData);
  }, [props.listData]);

  const onDeleteHandler = (item) => {
    Alert.alert(
      'Delete',
      `Are you sure you want to delete ${item.text}?`,
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
            const newList = list.filter((el) => {
              return el.text !== item.text;
            });

            console.log(`Make ajax to delete ${item.text} !`);
            setList(newList);
          },
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
      <View style={{ fontSize: 18, marginTop: 10 }}>
        {list.map((item, index) => {
          return <Item key={index} item={item} onDelete={onDeleteHandler} />;
        })}
      </View>
    </View>
  );
};
export default List;
