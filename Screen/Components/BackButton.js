//Import React
import React from 'react';

//Import all required component
import { Button } from 'react-native';

import Divider from './Divider';

const BackButton = (props) => {
  const { to } = props;

  return (
    <>
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.navigate(to);
        }}
      />
      <Divider />
    </>
  );
};

// const styles = StyleSheet.create({
//   profileHeader: {
//     flexDirection: 'row',
//     backgroundColor: '#307ecc',
//     padding: 15,
//     textAlign: 'center',
//   },
//   profileHeaderPicCircle: {
//     width: 60,
//     height: 60,
//     borderRadius: 60 / 2,
//     color: 'white',
//     backgroundColor: '#ffffff',
//     textAlign: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   profileHeaderText: {
//     color: 'white',
//     alignSelf: 'center',
//     paddingHorizontal: 10,
//     fontWeight: 'bold',
//   },
//   profilePic: {
//     height: 60,
//     width: 60,
//     borderRadius: 60,
//   },
// });

export default BackButton;
