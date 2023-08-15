import React, { useEffect, useRef } from 'react';
import { Platform, View, useWindowDimensions } from 'react-native';
import { Button } from '@rneui/themed';
import IOSCamera from './ios';
import RNFS from 'react-native-fs';
import CameraRoll from '@react-native-community/cameraroll';
import AndroidCamera from './android';
import { Camera } from 'react-native-vision-camera';
import styles from './styles';
import { Text } from '@rneui/base';

const CameraRoot = () => {
  useEffect(() => {
    const execute = async () => {
      // const newCameraPermission = await VisionCamera. .requestCameraPermission();
      const newCameraPermission = await Camera.requestCameraPermission();
    };
    execute();
  }, []);

  const onPress = async () => {
    // const { uri } = await cameraRef.current.capture();
    // console.log('photo uri: ', uri);
    // if (uri.startsWith('file://')) {
    //   // Platform dependent, iOS & Android uses '/'
    //   const pathSplitter = '/';
    //   // file:///foo/bar.jpg => /foo/bar.jpg
    //   const filePath = uri.replace('file://', '');
    //   // /foo/bar.jpg => [foo, bar.jpg]
    //   const pathSegments = filePath.split(pathSplitter);
    //   // [foo, bar.jpg] => bar.jpg
    //   const fileName = pathSegments[pathSegments.length - 1];
    //   const fullFilename = filePath;
    //   `${RNFS.DocumentDirectoryPath}/${fileName}`;
    //   console.log('fullFilename: ', fullFilename);
    //   const saveCamera = await CameraRoll.save(fullFilename);
    //   console.log('saveCamera result: ', saveCamera);
    //   await RNFS.moveFile(
    //     filePath,
    //     `${RNFS.DocumentDirectoryPath}/${fileName}`
    //   );
    // uri = `file://${destFilePath}`;
    // };/
  };

  const dimension = useWindowDimensions();
  return (
    <>
      <IOSCamera />
      
    </>
  );
};

export default CameraRoot;
