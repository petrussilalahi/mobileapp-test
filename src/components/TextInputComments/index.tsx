import React from 'react';
import {View, Button, TextInput} from 'react-native';
import {styles} from './styles';
export default function TextInputComments({
  setCommet,
  handleComment,
  commet,
}: any) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper} />
      <TextInput
        placeholder="Enter Comment"
        style={styles.textInput}
        onChangeText={text => setCommet(text)}
        value={commet}
      />
      <Button
        title="Comment"
        onPress={() => handleComment()}
        disabled={commet === '' ? true : false}
      />
    </View>
  );
}
