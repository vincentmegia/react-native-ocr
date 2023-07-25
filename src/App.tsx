import React, { useState } from 'react';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import TextRecognition from 'react-native-text-recognition';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import { textProcessor } from './textProcessor';
import { Header as HeaderRNE, Icon, Text } from '@rneui/themed';
import styles from './globalStyles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, Card, Divider } from '@rneui/base';
import { Info, createInfo } from './models/info';
import { idTypeFilter } from './textProcessor/idTypeFilter';
import { idValueFilter } from './textProcessor/idValueFilter';
import { dateOfBirthFilter } from './textProcessor/dateOfBirthFilter';
import { fullNameFilter } from './textProcessor/fullNameFilter';

const App = () => {
  // pass the image's path to recognize
  const [info, setInfo] = useState<Info>(createInfo());

  const createTextProcessor = (texts: string[]) => {
    const info = createInfo();
    const textProcessorInstance = textProcessor(texts);

    // add filters
    textProcessorInstance.addFilter(idTypeFilter(info));
    textProcessorInstance.addFilter(idValueFilter(info));
    textProcessorInstance.addFilter(dateOfBirthFilter(info));
    textProcessorInstance.addFilter(fullNameFilter(info));
    return textProcessorInstance;
  };

  const process = async (imageResult: ImagePickerResponse) => {
    if (!imageResult) {
      return;
    }
    const assets = imageResult?.assets || [];
    const result = await TextRecognition.recognize(assets[0].uri || '');
    const processor = createTextProcessor(result);
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
    setInfo(createInfo());
    const imageResult = await launchCamera({
      presentationStyle: 'fullScreen',
      mediaType: 'mixed',
      quality: 1,
    });
    process(imageResult);
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
              onPress={() => {}}>
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

      <Divider style={styles.divider} />

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
        onPress={onGalleryPress}
      />
    </SafeAreaProvider>
  );
};

export default App;
