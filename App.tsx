import React, { useState } from 'react';
import {
  Alert,
  Button,
  Image,
  Text,
  TextInput,
  View,
  ToastAndroid,
} from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  const checkPalindrome = () => {
    const processedText = text.toLowerCase().replace(/[^a-z0-9]/gi, '');
    const reversedText = processedText.split('').reverse().join('');

    if (processedText === reversedText) {
      
      ToastAndroid.show('ini Palindrome!', ToastAndroid.SHORT);
      Alert.alert('Palindrome!', 'ini Palindrome!.', [{ text: 'OK' }]);
    } else {
      ToastAndroid.show('ini bukan Palindrome.', ToastAndroid.SHORT);
      Alert.alert('bukan Palindrome!', 'ini bukan Palindrome.', [{ text: 'OK' }]);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello, Brooo</Text>
      <Image
        source={{
          uri: 'https://www.wikihow.com/images_en/thumb/9/90/Buy-Your-First-Set-of-DJ-Equipment-Step-1-Version-2.jpg/v4-460px-Buy-Your-First-Set-of-DJ-Equipment-Step-1-Version-2.jpg',
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text>Palindrome Validator</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'black',
          width: 200,
          height: 40,
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}
        placeholder="massukin Text"
        value={text}
        onChangeText={setText}
      />
      <Button title="kirim" onPress={checkPalindrome} />
    </View>
  );
}