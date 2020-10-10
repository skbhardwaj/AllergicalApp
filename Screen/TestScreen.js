import React from 'react';
import { TextInput, Button, View } from 'react-native';

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');
  console.log(navigation.getParam('user'));
  console.log(navigation);

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
      <Button
        title="Go Back"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('HomeScreen', { user: 'sssss' });
        }}
      />
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Analyse"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('HomeScreen', { post: postText });
        }}
      />
    </View>
  );
}

export default CreatePostScreen;
