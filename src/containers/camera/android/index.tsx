import { Button, Image, Overlay } from '@rneui/base';
import React, { useContext, useRef } from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraDevices,
} from 'react-native-vision-camera';
import Loader from '../../loader';
import styles from './styles';
import images from '../../../assets/images';
import TextRecognition from '@react-native-ml-kit/text-recognition';
import { GlobalContext } from '../../../App';
import { useNavigation } from '@react-navigation/native';

const AndroidCamera = () => {
  const cameraRef = useRef<Camera>(null);
  const device = useCameraDevice('back');
  const [info, setInfo] = useContext(GlobalContext);
  const navigation = useNavigation<any>();

  if (!device) return <Loader />;

  const onPress = async () => {
    const photo = await cameraRef?.current?.takePhoto();
    const path = `file://${photo?.path}` || '';
    console.log('photo: ', path);

    const result = await TextRecognition.recognize(path);
    console.log('------- result.text: ', result.text);
    setInfo(result.text);
    navigation.push('Home', result.text);

    // const tokens = result.text.split('\n');
    // const processor = createTextProcessor(tokens);
    // const processResult = processor.process() || createInfo();
  };

  return (
    <>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        device={device}
        photo={true}
        isActive={true}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <View style={styles.imageContainer}>
          <Image source={images.camera} style={styles.cameraImage} />
        </View>
      </TouchableOpacity>
    </>
  );
};
export default AndroidCamera;
