/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
* Copyright © 2023 React Native UI DevKit Library - All rights reserved
*/
import React, { useContext, useState } from 'react';
import { Alert, Image, Platform, ScrollView, Text, View } from 'react-native';

// React Native UI DevKit
import { useColors, Icon, Item, Divider, TitleFontSize, MediumFontSize, DescriptionFontSize, BorderRadius } from 'react-native-ui-devkit';

import { GlobalContext } from '../../libs/globalContext';
import Header from '../../libs/header';

const Items = () => {
  useContext(GlobalContext);
  const colors = useColors();
  const [vars, setVars] = useState({ switch: true, check: true })

  return (
    <ScrollView>
      <Header type={'item'} />

      <Item data={{ title: 'Text printing only' }} header={'Item with header on Android and iOS'} footer={'Item with footer on Android and iOS'} headerOnAndroid footerOnAndroid />

      <Item data={{ title: 'Text with description', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus.' }} />

      <Item data={{ title: 'Text with subdescription for iOS', subdescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus.' }} />

      <Item data={{ title: 'Disabled text printing only', disabled: true }} />

      <Item data={{
        icon: { name: 'toggle-switch-off-outline', type: 'material-community', size: 20, color: '#fff', backgroundColor: colors.primary },
        title: 'Text printing with switch',
        switch: {
          value: vars.switch,
          onValueChange: (value) => {
            setVars((prevState) => ({ ...prevState, switch: value }));
          }
        }
      }} />

      <Item data={{
        ...Platform.OS == 'ios' && { icon: { name: 'toggle-switch-off-outline', type: 'material-community', size: 20, color: '#fff', backgroundColor: colors.primary } },
        title: 'Text printing with check',
        checkbox: vars.check,
        onPress: async () => {
          setVars((prevState) => ({ ...prevState, check: !prevState.check }));
        }
      }} />

      <Item data={{
        icon: { name: 'more-horiz', type: 'material', size: 20, color: '#fff', backgroundColor: colors.primary },
        title: 'Text with button action',
        action: {
          icon: { name: 'more-horiz', type: 'material', size: 30, color: colors.text },
          onPress: async () => { Alert.alert('Warning', 'Text with button action'); },
          force: true
        }
      }} />

      <Item data={{
        icon: { name: 'loading', type: 'material-community', size: 20, color: '#fff', backgroundColor: colors.primary },
        title: 'Text with loading',
        loading: true,
        onPress: async () => { Alert.alert('Warning', 'Text printing with action'); }
      }} />

      <Item data={{
        icon: { name: 'bell-badge', type: 'material-community', size: 20, color: '#fff', backgroundColor: colors.primary },
        title: 'Text with badge and action',
        badge: {
          value: '+99'
        },
        onPress: async () => { Alert.alert('Warning', 'Text with badge and action'); }
      }} />

      <Item data={{
        icon: { name: 'bell-badge', type: 'material-community', size: 20, color: '#fff', backgroundColor: colors.primary },
        title: 'Text with badge',
        badge: {
          value: '9',
          color: {
            badge: colors.notification,
            text: '#fff'
          }
        }
      }} />

      <Item data={{
        icon: { name: 'color-lens', type: 'material', size: 20, color: '#fff', backgroundColor: colors.primary },
        title: 'Title color',
        color: {
          title: colors.primary
        }
      }} />

      <Item data={{
        icon: { name: 'color-lens', type: 'material', size: 20, color: '#fff', backgroundColor: colors.primary },
        title: 'Title with description color',
        description: 'Description',
        color: {
          title: colors.primary,
          description: colors.notification
        }
      }} />

      <Item data={{ icon: { name: 'search', type: 'material', size: 20, color: '#fff', backgroundColor: colors.notification }, title: 'Only text printing with icon' }} header={'Item with header only iOS'} footer={'Item with footer only iOS'} />

      <Item data={{ title: 'Text printing with action', onPress: async () => { Alert.alert('Warning', 'Text printing with action'); } }} />

      <Item data={{ icon: { name: 'close', type: 'material', size: 20, color: '#fff', backgroundColor: '#ff9933' }, title: 'Text printing with icon and action', onPress: async () => { Alert.alert('Warning', 'Text printing with action'); } }} />

      <Item data={{ title: 'Text printing only' }} header={'Exapanded item'} footer={'The expanded item is often used in contact item, conversations, among others.\nNOTE: On iOS < 15 is already set as default, so it has no effect.'} headerOnAndroid footerOnAndroid expanded />

      <Item data={{ title: 'Share', color: { title: colors.primary }, chevron: false, onPress: async () => { Alert.alert('Warning', 'Share action'); } }} />

      <Item data={{ title: 'Report', color: { title: colors.notification }, chevron: false, onPress: async () => { Alert.alert('Warning', 'Report action'); } }} />

      <Item data={{
        icon: {
          component:
            <Image
              source={{ uri: Image.resolveAssetSource(require('../../static/img/avatar-1.png')).uri }}
              style={{ width: 60, height: 60, borderRadius: 30 }}
            />
        },
        component:
          <View style={{ flex: 1, marginLeft: 10 }}>
            <View style={{ marginVertical: 8 }}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginRight: 0 }}>
                <Text style={[{ flex: 1, color: colors.text, marginRight: 5 }, TitleFontSize()]} numberOfLines={1}>Ivor Fugler</Text>
                <View style={{ alignItems: 'flex-end' }}>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={[DescriptionFontSize(), { color: colors.secondary }]}>22:37</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginRight: 0 }}>
                <View style={{ flex: 1, flexDirection: 'row', height: 40 }}>
                  <Text style={[{ color: colors.secondary }, MediumFontSize()]} numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio nisi, commodo eu semper sed, elementum a risus. Nulla facilisi.</Text>
                </View>
                <Icon name={'pushpin'} type={'antdesign'} size={18} color={colors.tertiary} style={{ marginLeft: 5 }} />
              </View>
            </View>
          </View>,
        chevron: false,
        delay: false,
        onPress: async () => {
          Alert.alert('Warning', 'Chat item');
        }
      }} header={'Chat item'} footer={'This item is just an example of how flexible your component is. You can create according to your need.'} headerOnAndroid footerOnAndroid />

      <Item data={{
        icon: {
          component:
            <Image
              source={{ uri: Image.resolveAssetSource(require('../../static/img/avatar-1.png')).uri }}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
        },
        component:
          <View style={{ flex: 1, marginLeft: 10 }}>
            <View style={{ marginVertical: 8 }}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginRight: 0 }}>
                <Text style={[{ flex: 1, color: colors.text, marginRight: 5 }, TitleFontSize()]} numberOfLines={1}>Ivor Fugler</Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginRight: 0 }}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={[{ color: colors.secondary }, DescriptionFontSize()]} numberOfLines={1}>@fugler</Text>
                  <Icon name={'verified'} type={'material'} size={13} color={colors.primary} style={{ marginLeft: (Platform.OS == 'ios' ? 2 : 5) }} />
                </View>
              </View>
            </View>
          </View>,
        chevron: false,
        delay: false,
        onPress: async () => {
          Alert.alert('Warning', 'User item');
        }
      }} header={'User item'} footer={'This item is just an example of how flexible your component is. You can create according to your need.'} headerOnAndroid footerOnAndroid />

      <Item data={{
        icon: {
          component:
            <Image
              source={{ uri: Image.resolveAssetSource(require('../../static/img/avatar-1.png')).uri }}
              style={[{ width: 30, height: 30, borderRadius: 15 }]}
            />
        },
        component:
          <Text style={[{ color: colors.text, marginLeft: 10 }, TitleFontSize()]} numberOfLines={1}>Ivor Fugler</Text>,
        chevron: false,
        delay: false,
        onPress: async () => {
          Alert.alert('Warning', 'Contact item');
        }
      }} header={'Contact item'} footer={'This item is just an example of how flexible your component is. You can create according to your need.'} headerOnAndroid footerOnAndroid />

      <Item data={{
        icon: {
          component:
            <Image
              source={{ uri: Image.resolveAssetSource(require('../../static/img/product-1.png')).uri }}
              style={[{ width: 100, height: 100, margin: 10 }, BorderRadius()]}
            />
        },
        component:
          <View style={{ flex: 1, marginRight: 15 }}>
            <View style={{ marginVertical: 8 }}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginRight: 0 }}>
                <Text style={[{ flex: 1, color: colors.text, marginRight: 5 }, TitleFontSize()]} numberOfLines={1}>Camera</Text>
                <View style={{ alignItems: 'flex-end' }}>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={[DescriptionFontSize(), { color: colors.primary }]}>NEW</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginRight: 0 }}>
                <Text style={[{ color: colors.secondary, height: 35 }, DescriptionFontSize()]} numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus.</Text>
              </View>
              <Text style={[{ color: colors.primary, fontWeight: '500' }, TitleFontSize(1.8)]} numberOfLines={2}>$ 999.00</Text>
            </View>
          </View>,
        chevron: false,
        delay: false,
        padding: false,
        onPress: async () => {
          Alert.alert('Warning', 'Product item');
        }
      }} header={'Product item'} footer={'This item is just an example of how flexible your component is. You can create according to your need.'} headerOnAndroid footerOnAndroid />

      <Divider />
    </ScrollView>
  );
}

export default Items;
