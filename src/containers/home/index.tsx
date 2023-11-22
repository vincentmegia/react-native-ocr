import React, { useContext, useEffect, useState } from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { Header as HeaderRNE, Icon, Text } from '@rneui/themed';
import styles from '../../globalStyles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, Card, Divider } from '@rneui/base';
import { Info, clipboardCopyInfo, createInfo } from '../../models/info';
import { useNavigation } from '@react-navigation/native';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import TextRecognition from '@react-native-ml-kit/text-recognition';
import { createTextProcessor } from '../../textProcessor';
import { GlobalContext } from '../../App';

const Home = ({ route }: any) => {
  const [info, setInfo] = useState<Info>(createInfo());
  const [log, setLog] = useState('');
  const navigation = useNavigation<any>();

  console.log('route info: ', route);

  useEffect(() => {
    console.log('info datA: ', info);
    if (!route.params) return;
    console.log('processing data');
    const tokens = route.params.split('\n');
    const processor = createTextProcessor(tokens);
    const processResult = processor.process() || createInfo();
    setInfo(processResult);
  }, [route]);

  const process = async (imageResult: ImagePickerResponse) => {
    if (!imageResult) {
      return;
    }
    const assets = imageResult?.assets || [];
    console.log('asset uri: ', assets[0].uri);
    const result = await TextRecognition.recognize(assets[0].uri || '');
    console.log('------- result.text: ', result.text);
    setLog(result.text);
    const tokens = result.text.split('\n');
    const processor = createTextProcessor(tokens);
    const processResult = processor.process() || createInfo();
    setInfo(processResult);
  };

  const onGalleryPress = async () => {
    setInfo(createInfo());
    const imageResult = await launchImageLibrary({
      presentationStyle: 'fullScreen',
      mediaType: 'mixed',
    });
    process(imageResult);
  };

  const onCameraPress = async () => {
    console.log('navigating to camera');
    setInfo(createInfo());
    navigation.navigate('Camera');

    // const imageResult = await launchCamera({
    //    presentationStyle: "fullScreen",
    //    mediaType: "mixed",
    //    quality: 1,
    // })
    // process(imageResult)
  };

  const onCopyClipboard = () => {
    clipboardCopyInfo(info);
  };

  return (
    <SafeAreaProvider>
      <StatusBar />
      <HeaderRNE
        leftComponent={styles.headerLeftComponent}
        rightComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={() => {}}>
              <Icon name="description" color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerLeftComponentLeftIcon}
              onPress={() => {}}
            >
              <Icon type="antdesign" name="rocket1" color="white" />
            </TouchableOpacity>
          </View>
        }
        centerComponent={{ text: 'Scan', style: styles.heading }}
      />

      <Card>
        <Card.Title>Document Info</Card.Title>
        <Card.Divider />
        <Text style={styles.text}>Id: {info?.idValue}</Text>
        <Text style={styles.text}>Id Type: {info?.idType}</Text>
        <Text style={styles.text}>Full Name: {info?.fullName}</Text>
        <Text style={styles.text}>Birth Date: {info?.birthDate}</Text>
      </Card>

      <Button
        title="Choose from gallery"
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        onPress={onGalleryPress}
      />
      <Button
        title="Use camera"
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        onPress={onCameraPress}
      />
      <Button
        title="Copy to clipboard"
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        onPress={onCopyClipboard}
      />

      <Divider style={styles.divider} />
      <Text style={styles.text}>Logs: {log}</Text>
    </SafeAreaProvider>
  );
};

export default Home;
