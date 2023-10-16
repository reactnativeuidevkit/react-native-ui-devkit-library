/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
* Copyright © 2023 React Native UI DevKit Library - All rights reserved
*/
import React, { useContext } from 'react';
import { Alert, ScrollView } from 'react-native';

// React Native UI DevKit
import { List, Item, Divider } from 'react-native-ui-devkit';

import { GlobalContext } from '../../libs/globalContext';
import Header from '../../libs/header';

const Action = () => {
  useContext(GlobalContext);

  return (
    <ScrollView>
      <Header type={'action'} />

      <Item data={{
        icon: { name: 'android', type: 'font-awesome', size: 20, color: '#fff', backgroundColor: '#7BBA3C' },
        title: 'Item 1',
        action: {
          icon: { name: 'more-horizontal', type: 'feather', size: 20 },
          onPress: async () => {
            Alert.alert('Warning', 'Item 1 - Action')
          }
        }
      }} header={'Action only Android'} footer={'Item with action only Android'} headerOnAndroid footerOnAndroid />

      <Item data={{
        icon: { name: 'apple', type: 'font-awesome', size: 20, color: '#000', backgroundColor: '#eee' },
        title: 'Item 2',
        action: {
          icon: { name: 'more-horizontal', type: 'feather', size: 20 },
          iOS: true,
          onPress: async () => {
            Alert.alert('Warning', 'Item 2 - Action')
          }
        }
      }} header={'Action on Android and iOS'} footer={'Item with action on Android and iOS'} headerOnAndroid footerOnAndroid />

      <List data={[
        {
          icon: { name: 'android', type: 'font-awesome', size: 20, color: '#fff', backgroundColor: '#7BBA3C' },
          title: 'Action only Android',
          action: {
            icon: { name: 'more-horizontal', type: 'feather', size: 20 },
            onPress: async () => {
              Alert.alert('Warning', 'Action only Android - Action')
            }
          }
        }, {
          icon: { name: 'apple', type: 'font-awesome', size: 20, color: '#000', backgroundColor: '#eee' },
          title: 'Action on Android and iOS',
          action: {
            icon: { name: 'more-horizontal', type: 'feather', size: 20 },
            iOS: true,
            onPress: async () => {
              Alert.alert('Warning', 'Action on Android and iOS - Action')
            }
          }
        }
      ]} />

      <Divider />
    </ScrollView>
  );
}

export default Action;
