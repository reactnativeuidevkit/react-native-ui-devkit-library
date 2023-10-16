/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
* Copyright © 2023 React Native UI DevKit Library - All rights reserved
*/
import React, { useContext, useLayoutEffect } from 'react';
import { Appearance, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import KeepAwake from 'react-native-keep-awake';

// React Native UI DevKit
import { IosOldVersion, RNUIDevKitProvider, useColors } from 'react-native-ui-devkit';

import { GlobalContext, GlobalContextProvider } from './libs/globalContext';

import Home from './src';
import List from './src/list';
import Item from './src/item';
import Card from './src/card';
import FlatList from './src/flatList';
import FlatListSimple from './src/flatList/simple';
import FlatListChat from './src/flatList/chat';
import FlatListUser from './src/flatList/user';
import FlatListContact from './src/flatList/contact';
import FlatListProduct from './src/flatList/product';
import Checkbox from './src/checkbox';
import Radio from './src/radio';
import Switch from './src/switch';
import Collapsible from './src/collapsible';
import Icon from './src/icon';
import TextInput from './src/textInput';
import Button from './src/button';
import Action from './src/action';
import Swipeable from './src/swipeable';
import Divider from './src/divider';
import Separator from './src/separator';
import Fonts from './src/fonts';

import Functions from './src/functions';
import FunctionsUseColors from './src/functions/useColors';
import FunctionsMarginTop from './src/functions/marginTop';
import FunctionsMarginBottom from './src/functions/marginBottom';
import FunctionsMarginHorizontal from './src/functions/marginHorizontal';
import FunctionsPaddingTop from './src/functions/paddingTop';
import FunctionsPaddingBottom from './src/functions/paddingBottom';
import FunctionsPaddingHorizontal from './src/functions/paddingHorizontal';
import FunctionsBorderRadius from './src/functions/borderRadius';
import FunctionsAndroidOldVersion from './src/functions/androidOldVersion';
import FunctionsIosOldVersion from './src/functions/iosOldVersion';
import { isTablet } from 'react-native-device-info';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const { global } = useContext(GlobalContext);
  const colors = useColors();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ ...Platform.OS == 'android' && { animation: 'fade_from_bottom' }, ...Platform.OS == 'ios' && { statusBarStyle: global.dark ? 'light' : 'dark' } }}>
        <Stack.Screen name="Home" component={Home} options={{
          title: 'Library',
          headerStyle: { backgroundColor: colors.background },
          headerLargeTitle: !(isTablet() || Platform.isPad),
          headerShadowVisible: !(isTablet() || Platform.isPad) && Platform.OS == 'ios',
          headerLargeTitleShadowVisible: false,
          headerStyle: {
            backgroundColor: (!(isTablet() || Platform.isPad) ? Platform.OS == 'ios' ? colors.ios.headerBackground : colors.android.headerBackground : colors.background)
          },
          headerLargeStyle: {
            backgroundColor: colors.background
          }
        }} />
        <Stack.Screen name="List" component={List} options={{ title: 'List', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="Item" component={Item} options={{ title: 'Item', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="Card" component={Card} options={{ title: 'Card', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="FlatList" component={FlatList} options={{ title: 'FlatList', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="FlatListSimple" component={FlatListSimple} options={{ title: 'Simple', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="FlatListChat" component={FlatListChat} options={{ title: 'Chat', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="FlatListUser" component={FlatListUser} options={{ title: 'User', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="FlatListContact" component={FlatListContact} options={{ title: 'Contact', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="FlatListProduct" component={FlatListProduct} options={{ title: 'Product', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="Checkbox" component={Checkbox} options={{ title: 'Checkbox', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="Radio" component={Radio} options={{ title: 'Radio', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="Switch" component={Switch} options={{ title: 'Switch', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="Collapsible" component={Collapsible} options={{ title: 'Collapsible', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="Icon" component={Icon} options={{ title: 'Icon', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="TextInput" component={TextInput} options={{ title: 'TextInput', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="Button" component={Button} options={{ title: 'Button', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="Divider" component={Divider} options={{ title: 'Divider', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="Separator" component={Separator} options={{ title: 'Separator', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="Action" component={Action} options={{ title: 'Action', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="Swipeable" component={Swipeable} options={{ title: 'Swipeable', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="Fonts" component={Fonts} options={{ title: 'Fonts', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="Functions" component={Functions} options={{ title: 'Functions', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="FunctionsUseColors" component={FunctionsUseColors} options={{ title: 'useColors()', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="FunctionsMarginTop" component={FunctionsMarginTop} options={{ title: 'marginTop()', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="FunctionsMarginBottom" component={FunctionsMarginBottom} options={{ title: 'marginBottom()', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="FunctionsMarginHorizontal" component={FunctionsMarginHorizontal} options={{ title: 'marginHorizontal()', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="FunctionsPaddingTop" component={FunctionsPaddingTop} options={{ title: 'paddingTop()', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="FunctionsPaddingBottom" component={FunctionsPaddingBottom} options={{ title: 'paddingBottom()', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="FunctionsPaddingHorizontal" component={FunctionsPaddingHorizontal} options={{ title: 'paddingHorizontal()', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="FunctionsBorderRadius" component={FunctionsBorderRadius} options={{ title: 'borderRadius()', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="FunctionsIosOldVersion" component={FunctionsIosOldVersion} options={{ title: 'iosOldVersion()', headerStyle: { backgroundColor: colors.background } }} />
        <Stack.Screen name="FunctionsAndroidOldVersion" component={FunctionsAndroidOldVersion} options={{ title: 'androidOldVersion()', headerStyle: { backgroundColor: colors.background } }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Init = () => {
  const { global, setGlobal } = useContext(GlobalContext);

  useLayoutEffect(() => {
    if (Appearance.getColorScheme() == 'dark') {
      setGlobal(prevState => ({ ...prevState, dark: true }));
    }
  }, [])

  return (
    <RNUIDevKitProvider theme={global.dark ? 'dark' : 'light'}>
      <Routes />
    </RNUIDevKitProvider>
  )
}

function App() {
  KeepAwake.activate();

  return (
    <SafeAreaProvider>
      <GlobalContextProvider>
        <Init />
      </GlobalContextProvider>
    </SafeAreaProvider>
  );
}

export default App;