import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import IOSCamera from './ios';
import { Camera, useCameraPermission } from 'react-native-vision-camera';
import AndroidCamera from './android';

const CameraRoot = () => {
  const { hasPermission, requestPermission } = useCameraPermission()
  useEffect(() => {
    console.log('hasPermission: ', hasPermission)
  }, []);

  return <>{Platform.OS === 'ios' ? <IOSCamera /> : <AndroidCamera />}</>;
};

export default CameraRoot;
