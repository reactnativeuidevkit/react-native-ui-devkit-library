/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
* Copyright © 2023 React Native UI DevKit Library - All rights reserved
*/
import React, { useContext } from 'react';
import { ScrollView, Platform } from 'react-native';

// React Native UI DevKit
import { useColors, List, Divider } from 'react-native-ui-devkit';

import { GlobalContext } from '../../libs/globalContext';
import Header from '../../libs/header';

const Functions = (props) => {
    const { navigation } = props;
    useContext(GlobalContext);
    const colors = useColors();

    return (
        <ScrollView>
            <Header type={'functions'} />

            <List data={[
                { icon: { name: 'color-lens', type: 'material', size: 23, color: '#fff', backgroundColor: colors.notification }, title: 'userColors()', ...Platform.OS == 'android' && { description: 'src/functions/userColors' }, ...Platform.OS == 'ios' && { subdescription: 'src/functions/userColors' }, onPress: async () => { navigation.navigate('FunctionsUseColors'); } },
                { icon: { name: 'dock-top', type: 'material-community', size: 19, color: '#fff', backgroundColor: colors.notification }, title: 'marginTop()', ...Platform.OS == 'android' && { description: 'src/functions/marginTop' }, ...Platform.OS == 'ios' && { subdescription: 'src/functions/marginTop' }, onPress: async () => { navigation.navigate('FunctionsMarginTop'); } },
                { icon: { name: 'dock-bottom', type: 'material-community', size: 19, color: '#fff', backgroundColor: colors.notification }, title: 'marginBottom()', ...Platform.OS == 'android' && { description: 'src/functions/marginBottom' }, ...Platform.OS == 'ios' && { subdescription: 'src/functions/marginBottom' }, onPress: async () => { navigation.navigate('FunctionsMarginBottom'); } },
                { icon: { name: 'arrow-split-vertical', type: 'material-community', size: 19, color: '#fff', backgroundColor: colors.notification }, title: 'marginHorizontal()', ...Platform.OS == 'android' && { description: 'src/functions/marginHorizontal' }, ...Platform.OS == 'ios' && { subdescription: 'src/functions/marginHorizontal' }, onPress: async () => { navigation.navigate('FunctionsMarginHorizontal'); } },
                { icon: { name: 'align-top', type: 'entypo', size: 19, color: '#fff', backgroundColor: colors.notification }, title: 'paddingTop()', ...Platform.OS == 'android' && { description: 'src/functions/paddingTop' }, ...Platform.OS == 'ios' && { subdescription: 'src/functions/paddingTop' }, onPress: async () => { navigation.navigate('FunctionsPaddingTop'); } },
                { icon: { name: 'align-bottom', type: 'entypo', size: 19, color: '#fff', backgroundColor: colors.notification }, title: 'paddingBottom()', ...Platform.OS == 'android' && { description: 'src/functions/paddingBottom' }, ...Platform.OS == 'ios' && { subdescription: 'src/functions/paddingBottom' }, onPress: async () => { navigation.navigate('FunctionsPaddingBottom'); } },
                { icon: { name: 'arrow-expand-horizontal', type: 'material-community', size: 18, color: '#fff', backgroundColor: colors.notification }, title: 'paddingHorizontal()', ...Platform.OS == 'android' && { description: 'src/functions/paddingHorizontal' }, ...Platform.OS == 'ios' && { subdescription: 'src/functions/paddingHorizontal' }, onPress: async () => { navigation.navigate('FunctionsPaddingHorizontal'); } },
                { icon: { name: 'vector-radius', type: 'material-community', size: 19, color: '#fff', backgroundColor: colors.notification }, title: 'borderRadius()', ...Platform.OS == 'android' && { description: 'src/functions/borderRadius' }, ...Platform.OS == 'ios' && { subdescription: 'src/functions/borderRadius' }, onPress: async () => { navigation.navigate('FunctionsBorderRadius'); } },
                { icon: { name: 'android', type: 'font-awesome', size: 19, color: '#fff', backgroundColor: colors.notification }, title: 'androidOldVersion()', ...Platform.OS == 'android' && { description: 'src/functions/androidOldVersion\n\nOnly supported Android' }, ...Platform.OS == 'ios' && { subdescription: 'src/functions/androidOldVersion\n\nOnly supported Android' }, onPress: async () => { navigation.navigate('FunctionsAndroidOldVersion'); } },
                { icon: { name: 'apple-ios', type: 'material-community', size: 19, color: '#fff', backgroundColor: colors.notification }, title: 'iosOldVersion()', ...Platform.OS == 'android' && { description: 'src/functions/iosOldVersion\n\nOnly supported iOS' }, ...Platform.OS == 'ios' && { subdescription: 'src/functions/iosOldVersion\n\nOnly supported iOS' }, onPress: async () => { navigation.navigate('FunctionsIosOldVersion'); } },
            ]} />

            <Divider />
        </ScrollView>
    );
}

export default Functions;
