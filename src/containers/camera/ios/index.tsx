import React, { useRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { useAspectRatio } from '../../../hooks/aspectRatio';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import Loader from '../../loader';
import CameraRoll from '@react-native-community/cameraroll';
import { Button, Overlay } from '@rneui/themed';
import { Image } from '@rneui/base';
import images from '../../../assets/images';

const IOSCamera = () => {
  const { headerHeight, height, width } = useAspectRatio();
  const cameraRef = useRef<Camera>(null);
  const devices = useCameraDevices();
  const device = devices.back;

  if (!device) return <Loader />;

  const onPress = async () => {
    console.log('helllooooo');
    const photo = await cameraRef?.current?.takePhoto();
    const saveCamera = await CameraRoll.save(photo?.path || '');
    console.log('saving photo...', saveCamera);
  };

  return (
    <>
      <Overlay
        fullScreen={false}
        backdropStyle={styles.containerBackdrop}
        overlayStyle={styles.containerOverlay}
        isVisible={true}
        onBackdropPress={onPress}
      >
        <View style={styles.cameraContainer}>
          <Camera
            ref={cameraRef}
            style={styles.camera}
            device={device}
            photo={true}
            isActive={true}
          />
        </View>
      </Overlay>
      <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.imageContainer}>
          <Image source={images.camera} style={styles.cameraImage} />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default IOSCamera;
