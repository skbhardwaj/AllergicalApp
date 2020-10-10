import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
// import ProgressCircle from 'react-native-progress/Circle';
// import TesseractOcr, {
//   LANG_ENGLISH,
//   LEVEL_WORD,
//   useEventListener,
// } from 'react-native-tesseract-ocr';

import ActivityIndicatorLoader from './Components/ActivityIndicatorLoader';
import Divider from './Components/Divider';

import BackButton from './Components/BackButton';

const DEFAULT_HEIGHT = 500;
const DEFAULT_WITH = 600;
const defaultPickerOptions = {
  cropping: true,
  height: DEFAULT_HEIGHT,
  width: DEFAULT_WITH,
};

function CaptureScreen4(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imgSrc, setImgSrc] = useState(null);
  const [text, setText] = useState('');
  const [user, setUser] = useState('');
  const [allergy, setAllergy] = useState([]);

  const URL = 'http://1dfcf26e21d6.ngrok.io/analyzeImage';
  let TOKEN =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaXNoYW50QG1haWwuY29tIiwiZXhwIjoxNjAyMzM1MjY5LCJpYXQiOjE2MDIzMTcyNjl9.X7Zek7DZl6m2P_CWJx2yJlDwlYQJUBM2MC82yKHqQBkPohrLNe7hYrQGgqow6G6I3bqbDOJ3ImtZPZzLxrKt8g';

  TOKEN =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaXNoYW50QG1haWwuY29tIiwiZXhwIjoxNjAyMzQwNDk5LCJpYXQiOjE2MDIzMjI0OTl9.TktTyQ40kVYmDgjfpQKpq6Wp4GLp_roBH5cP4zV-ivN-hXskD-_X_9RPKPWcaD7LZBk-5UroUYuzUhtFtF5Yrg';

  TOKEN =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaXNoYW50QG1haWwuY29tIiwiZXhwIjoxNjAyMzQxODQ4LCJpYXQiOjE2MDIzMjM4NDh9.TZU78LkmRDc-Oe4ICJiF91FxESnc4k7sTR4HvZj3x0xLg1rvCHGGufCQa-W5PXI6_ZjhyJYr64RLCsQYfgLAAw';

  // console.log(props.navigation.getParam('user'));

  useEffect(() => {
    setUser(props.navigation.getParam('user'));
  }, [props.navigation]);

  // useEventListener('onProgressChange', (p) => {
  //   setProgress(p.percent / 100);
  // });

  const sendImageForProcessing = async (image) => {
    setIsLoading(true);
    // try {
    //   const tesseractOptions = { level: LEVEL_WORD };
    //   const recognizedText = await TesseractOcr.recognize(
    //     photo.uri,
    //     LANG_ENGLISH,
    //     tesseractOptions,
    //   );
    //   console.log('recognizedText====>>>>>>', recognizedText.replace(/-\n/g, ''));
    //   setText(recognizedText);
    // } catch (e) {
    //   console.log(e);
    //   setText('');
    // }

    const photo = {
      uri: image.path, // == image path file:///storage/emulated/0/Pictures/1511787860629.jpg
      type: 'image/jpeg',
      name: 'photo.jpg',
      size: image.size, //==> size of image
    };

    const formdata = new FormData();
    formdata.append('file', photo);

    let res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data; ',
        authorization: `Bearer ${TOKEN}`,
      },
      body: formdata,
    });
    const responseJson = await res.json();
    const allergies = responseJson?.allergy;
    setAllergy(allergies);

    console.log('=======>>>>', allergies);

    setIsLoading(false);
  };

  const recognizeFromPicker = async (options = defaultPickerOptions) => {
    try {
      const image = await ImagePicker.openPicker(options);
      setImgSrc({ uri: image.path });

      await sendImageForProcessing(image);
      // await recognizeTextFromImage(image.path);
    } catch (err) {
      if (err.message !== 'User cancelled image selection') {
        console.error(err);
      }
    }
  };

  const recognizeFromCamera = async (options = defaultPickerOptions) => {
    try {
      const image = await ImagePicker.openCamera(options);
      setImgSrc({ uri: image.path });

      await sendImageForProcessing(image);
    } catch (err) {
      if (err.message !== 'User cancelled image selection') {
        console.error(err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <BackButton {...props} to={'HomeScreen'} />

      <Text style={styles.title}>Hello {user.name}, lets scan !</Text>
      <Text style={styles.instructions}>Select an image source:</Text>

      <View style={styles.options}>
        <View style={styles.button}>
          <Button
            disabled={isLoading}
            title="Camera"
            onPress={() => {
              recognizeFromCamera();
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            disabled={isLoading}
            title="Picker"
            onPress={() => {
              recognizeFromPicker();
            }}
          />
        </View>
      </View>
      {imgSrc && (
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imgSrc} />
          <Divider />
          <ActivityIndicatorLoader animating={isLoading} size={'large'} color={'#307ecc'} />
          {isLoading ? (
            <Text>Parsing ...</Text>
          ) : allergy.length ? (
            <>
              <Image
                source={require('../Image/sad.png')}
                style={{ height: 100, resizeMode: 'contain', alignSelf: 'center' }}
              />
              <Text>{'Seems unsafe !!!'}</Text>
            </>
          ) : (
            <>
              <Image
                source={require('../Image/happy.png')}
                style={{ height: 100, resizeMode: 'contain', alignSelf: 'center' }}
              />
              <Text>{'SAFE !!!'}</Text>
            </>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  button: {
    marginHorizontal: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginVertical: 15,
    height: DEFAULT_HEIGHT / 2.5,
    width: DEFAULT_WITH / 2.5,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default CaptureScreen4;
