/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
* Copyright © 2023 React Native UI DevKit Library - All rights reserved
*/
import React, { useContext, useEffect } from 'react';
import { Linking, Platform, ScrollView, StatusBar, Text, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import NavigationBar from 'react-native-navbar-color';
import ExtraDimensions from 'react-native-extra-dimensions-android';
import SplashScreen from 'react-native-splash-screen';

// React Native UI DevKit
import { useColors, List, Item, Button, Divider, DescriptionFontSize } from 'react-native-ui-devkit';

import { GlobalContext } from '../libs/globalContext';
import { rgbToHex } from '../libs/helper';
import Header from '../libs/header';

const Home = (props) => {
    const { navigation } = props;
    const { global } = useContext(GlobalContext);
    const colors = useColors();

    useEffect(() => {
        if (Platform.OS == 'android') {
            StatusBar.setBackgroundColor(global.dark ? '#000000' : colors.background, true);
            StatusBar.setBarStyle(global.dark ? 'light-content' : 'dark-content', true);

            let soft = ExtraDimensions.getIsSoftMenuBar();
            let color = soft ? colors.background : rgbToHex('rgb(0, 0, 0)');
            NavigationBar.setColor(color);
        }

        setTimeout(() => {
            SplashScreen.hide();
        }, 10)
    }, [global.dark]);

    return (
        <ScrollView
            contentOffset={{ x: 0, y: -1 }}
            contentInsetAdjustmentBehavior={"automatic"}
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps="handled">
            <Header type={'home'} />

            <Button blue data={{ title: Platform.OS == 'android' ? 'Documentation' : 'Visit', onPress: () => { Linking.openURL('https://reactnativeuidevkit.com/docs') } }} header={'Documentation'} footer={'Complete documentation by accessing the website:\nhttps://reactnativeuidevkit.com/docs'} footerOnAndroid />

            <List data={[
                { icon: { name: 'list', type: 'feather', size: 20, color: '#fff', backgroundColor: colors.primary }, title: 'List', ...Platform.OS == 'android' && { description: 'src/list' }, ...Platform.OS == 'ios' && { subdescription: 'src/list' }, onPress: () => { navigation.navigate('List'); } },
                { icon: { name: 'view-day', type: 'material-community', size: 18, color: '#fff', backgroundColor: colors.primary }, title: 'Item', ...Platform.OS == 'android' && { description: 'src/item' }, ...Platform.OS == 'ios' && { subdescription: 'src/item' }, onPress: () => { navigation.navigate('Item'); } },
                { icon: { name: 'card-text', type: 'material-community', size: 18, color: '#fff', backgroundColor: colors.primary }, title: 'Card', ...Platform.OS == 'android' && { description: 'src/card' }, ...Platform.OS == 'ios' && { subdescription: 'src/card' }, onPress: () => { navigation.navigate('Card'); } },
                { icon: { name: 'list', type: 'feather', size: 20, color: '#fff', backgroundColor: colors.primary }, title: 'FlatList', ...Platform.OS == 'android' && { description: 'src/flatList' }, ...Platform.OS == 'ios' && { subdescription: 'src/flatList' }, onPress: () => { navigation.navigate('FlatList'); } },
                { icon: { name: 'check', type: 'entypo', size: 18, color: '#fff', backgroundColor: colors.primary }, title: 'Checkbox', ...Platform.OS == 'android' && { description: 'src/checkbox' }, ...Platform.OS == 'ios' && { subdescription: 'src/checkbox' }, onPress: () => { navigation.navigate('Checkbox'); } },
                { icon: { name: 'radio-button-on', type: 'ionicons', size: 19, color: '#fff', backgroundColor: colors.primary }, title: 'Radio', ...Platform.OS == 'android' && { description: 'src/radio' }, ...Platform.OS == 'ios' && { subdescription: 'src/radio' }, onPress: () => { navigation.navigate('Radio'); } },
                { icon: { name: 'toggle-switch-off-outline', type: 'material-community', size: 20, color: '#fff', backgroundColor: colors.primary }, title: 'Switch', ...Platform.OS == 'android' && { description: 'src/switch' }, ...Platform.OS == 'ios' && { subdescription: 'src/switch' }, onPress: () => { navigation.navigate('Switch'); } },
                { icon: { name: 'chevron-collapse', type: 'ionicons', size: 18, color: '#fff', backgroundColor: colors.primary }, title: 'Collapsible', ...Platform.OS == 'android' && { description: 'src/collapsible' }, ...Platform.OS == 'ios' && { subdescription: 'src/collapsible' }, onPress: () => { navigation.navigate('Collapsible'); } },
                { icon: { name: 'icons', type: 'font-awesome5', size: 16, color: '#fff', backgroundColor: colors.primary }, title: 'Icon', ...Platform.OS == 'android' && { description: 'src/icon' }, ...Platform.OS == 'ios' && { subdescription: 'src/icon' }, onPress: () => { navigation.navigate('Icon'); } }
            ]}
                header={'Lists, Items, Cards and more...'}
                footer={'With the List & Item component you can do practically everything you need in relation to the native interface for your application.'}
            />

            <Item data={{ icon: { name: 'cursor-text', type: 'material-community', size: 18, color: '#fff', backgroundColor: '#39CA61' }, title: 'TextInput', ...Platform.OS == 'android' && { description: 'src/textInput' }, ...Platform.OS == 'ios' && { subdescription: 'src/textInput' }, onPress: () => { navigation.navigate('TextInput'); } }} />

            <List data={[
                { icon: { name: 'touch-app', type: 'material', size: 20, color: '#fff', backgroundColor: colors.notification }, title: 'Button', ...Platform.OS == 'android' && { description: 'src/button' }, ...Platform.OS == 'ios' && { subdescription: 'src/button' }, onPress: () => { navigation.navigate('Button'); } },
                {
                    icon: { name: 'dots-vertical', type: 'material-community', size: 18, color: '#fff', backgroundColor: colors.notification },
                    title: 'Action',
                    ...Platform.OS == 'android' && { description: "src/action" },
                    ...Platform.OS == 'ios' && { subdescription: "src/action" },
                    onPress: () => { navigation.navigate('Action'); }
                },
                {
                    icon: { name: 'swipe', type: 'material', size: 18, color: '#fff', backgroundColor: colors.notification },
                    title: 'Swipeable',
                    ...Platform.OS == 'android' && { description: "src/swipeable\n\nOnly supported iOS" },
                    ...Platform.OS == 'ios' && { subdescription: "src/swipeable\n\nOnly supported iOS" },
                    onPress: () => { navigation.navigate('Swipeable'); }
                }
            ]} />

            <List data={[
                { icon: { name: 'view-day-outline', type: 'material-community', size: 20, color: '#fff', backgroundColor: colors.primary }, title: 'Divider', ...Platform.OS == 'android' && { description: 'src/divider' }, ...Platform.OS == 'ios' && { subdescription: 'src/divider' }, onPress: async () => { navigation.navigate('Divider'); } },
                { icon: { name: 'remove-outline', type: 'ionicons', size: 24, color: '#fff', backgroundColor: colors.primary }, title: 'Separator', ...Platform.OS == 'android' && { description: 'src/separator' }, ...Platform.OS == 'ios' && { subdescription: 'src/separator' }, onPress: async () => { navigation.navigate('Separator'); } }
            ]} />

            <List data={[
                { icon: { name: 'format-text', type: 'material-community', size: 18, color: '#fff', backgroundColor: '#ff9900' }, title: 'Fonts', ...Platform.OS == 'android' && { description: 'src/fonts' }, ...Platform.OS == 'ios' && { subdescription: 'src/fonts' }, onPress: () => { navigation.navigate('Fonts'); } },
                { icon: { name: 'cogs', type: 'material-community', size: 18, color: '#fff', backgroundColor: '#ff9900' }, title: 'Functions', ...Platform.OS == 'android' && { description: 'src/functions' }, ...Platform.OS == 'ios' && { subdescription: 'src/functions' }, onPress: () => { navigation.navigate('Functions'); } }
            ]} />

            <Divider />

            <View style={{ alignItems: "center" }}>
                <Text style={[{ color: colors.secondary, textAlign: 'center' }, DescriptionFontSize()]}>MIT License</Text>
                <Text style={[{ color: colors.secondary, textAlign: 'center' }, DescriptionFontSize()]}>React Native UI DevKit © Copyright {new Date().getFullYear()}</Text>
                <Text style={[{ color: colors.secondary, textAlign: 'center' }, DescriptionFontSize()]}>React Native UI DevKit Library © Copyright {new Date().getFullYear()}</Text>
                <Text style={[{ color: colors.secondary }, DescriptionFontSize()]}>v{DeviceInfo.getVersion()}</Text>
            </View>

            <Divider />
        </ScrollView>
    );
}

export default Home;
