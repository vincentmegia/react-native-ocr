import { Button } from '@rneui/base';
import React from 'react';
import { View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const AndroidCamera = () => {
  const onPress = async () => {
    const imageResult = await ImagePicker.openCamera({
      // width: 30?0,
      height: 400,
      cropping: true,
    });
    console.log('imageResult: ', imageResult);
  };

  return (
    <View>
      <Button title="Capture Android" onPress={onPress} />
    </View>
  );
};
export default AndroidCamera;
