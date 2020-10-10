// from https://github.com/tensorflow/tfjs/tree/master/tfjs-react-native/integration_rn59

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
// import { fetch } from '@tensorflow/tfjs-react-native';

import BackButton from './Components/BackButton';

const CaptureScreen2 = (props) => {
  const [tfReady, setTfReady] = useState(false);
  const [modelReady, setModelReady] = useState(false);

  useEffect(() => {
    (async function loadTF() {
      await tf.ready();
      setTfReady(true);
    })();
    (async function loadModel() {
      await mobilenet.load();
      setModelReady(true);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <BackButton {...props} to={'HomeScreen'} />

      <Text>TFJS ready? {tfReady ? <Text>Yes</Text> : ''}</Text>
      <Text>Model ready? {modelReady ? <Text>Yes</Text> : <Text>Loading Model...</Text>}</Text>
    </View>
  );
};

// class CaptureScreen2 extends React.Component {
//   state = {
//     isTfReady: false,
//     isModelReady: false,
//   };

//   async componentDidMount() {
//     await tf.ready();
//     // this.setState({
//     //   isTfReady: true,
//     // });
//     this.state.isTfReady = true;

//     this.model = await mobilenet.load();
//     // this.setState({ isModelReady: true });
//     this.state.isModelReady = true;

//     //Output in Expo console
//     console.log(this.state.isTfReady);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <BackButton {...this.props} to={'HomeScreen'} />

//         <Text>TFJS ready? {this.state.isTfReady ? <Text>Yes</Text> : ''}</Text>
//         <Text>
//           Model ready? {this.state.isModelReady ? <Text>Yes</Text> : <Text>Loading Model...</Text>}
//         </Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CaptureScreen2;
