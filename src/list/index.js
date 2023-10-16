/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
* Copyright © 2023 React Native UI DevKit Library - All rights reserved
*/
import React, { useContext, useState } from 'react';
import { Alert, Platform, ScrollView, Text } from 'react-native';

// React Native UI DevKit
import { useColors, List, Divider, Item, DescriptionFontSize } from 'react-native-ui-devkit';

import { GlobalContext } from '../../libs/globalContext';
import Header from '../../libs/header';

const Lists = () => {
    useContext(GlobalContext);
    const colors = useColors();
    const [vars, setVars] = useState({ switch: true, check: true })

    return (
        <ScrollView>
            <Header type={'list'} />

            <Item data={{
                component:
                    <Text style={[DescriptionFontSize(), { margin: 15, color: colors.text }]}>
                        {`List rendering is limited to 10 items, maintaining application performance.\n\nTo render dynamic, infinite scroll lists, use Item in a FlatList.`}
                    </Text>,
                padding: false
            }}
                header={'NOTE'} headerOnAndroid />

            <List data={[
                { title: 'Item only' },
                { title: 'Item with description', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus.' },
                { title: 'Item with subdescription for iOS', subdescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus.' },
                { title: 'Disabled Item only', disabled: true },
                {
                    icon: { name: 'toggle-switch-off-outline', type: 'material-community', size: 20, color: '#fff', backgroundColor: colors.primary },
                    title: 'Item with switch',
                    switch: {
                        value: vars.switch,
                        onValueChange: (value) => {
                            setVars((prevState) => ({ ...prevState, switch: value }));
                        }
                    }
                },
                {
                    ...Platform.OS == 'ios' && { icon: { name: 'toggle-switch-off-outline', type: 'material-community', size: 20, color: '#fff', backgroundColor: colors.primary } },
                    title: 'Item with check',
                    checkbox: vars.check,
                    onPress: async () => {
                        setVars((prevState) => ({ ...prevState, check: !prevState.check }));
                    }
                },
                {
                    icon: { name: 'more-horiz', type: 'material', size: 20, color: '#fff', backgroundColor: colors.primary },
                    title: 'Item with button action',
                    action: {
                        icon: { name: 'more-horiz', type: 'material', size: 30, color: colors.text },
                        onPress: async () => { Alert.alert('Warning', 'Item with button action'); },
                        force: true
                    }
                },
                {
                    icon: { name: 'loading', type: 'material-community', size: 20, color: '#fff', backgroundColor: colors.primary },
                    title: 'Item with loading',
                    loading: true,
                    onPress: async () => { Alert.alert('Warning', 'Item with action'); }
                },
                {
                    icon: { name: 'bell-badge', type: 'material-community', size: 20, color: '#fff', backgroundColor: colors.primary },
                    title: 'Item with badge and action',
                    badge: {
                        value: '+99'
                    },
                    onPress: async () => { Alert.alert('Warning', 'Item with badge and action'); }
                },
                {
                    icon: { name: 'bell-badge', type: 'material-community', size: 20, color: '#fff', backgroundColor: colors.primary },
                    title: 'Item with badge',
                    badge: {
                        value: '9',
                        color: {
                            badge: colors.notification,
                            text: '#fff'
                        }
                    }
                }
            ]} header={'List with header on Android and iOS'} footer={'List with footer on Android and iOS'} headerOnAndroid footerOnAndroid />

            <List data={[
                {
                    icon: { name: 'color-lens', type: 'material', size: 20, color: '#fff', backgroundColor: colors.primary },
                    title: 'Title color',
                    color: {
                        title: colors.primary
                    }
                },
                {
                    icon: { name: 'color-lens', type: 'material', size: 20, color: '#fff', backgroundColor: colors.primary },
                    title: 'Title with description color',
                    description: 'Description',
                    color: {
                        title: colors.primary,
                        description: colors.notification
                    }
                }
            ]} />

            <List data={[
                { icon: { name: 'home', type: 'material', size: 20, color: '#fff', backgroundColor: colors.primary }, title: 'Only Item with icon' },
                { icon: { name: 'search', type: 'material', size: 20, color: '#fff', backgroundColor: colors.notification }, title: 'Only Item with icon' },
                { icon: { name: 'close', type: 'material', size: 20, color: '#fff', backgroundColor: '#ff9933' }, title: 'Only Item with icon' }
            ]} header={'List with header only iOS'} footer={'List with footer only iOS'} />

            <List data={[
                { title: 'Item with action', onPress: async () => { Alert.alert('Warning', 'Item with action'); } },
                { title: 'Item with action', onPress: async () => { Alert.alert('Warning', 'Item with action'); } },
                { title: 'Item with action', onPress: async () => { Alert.alert('Warning', 'Item with action'); } }
            ]} />

            <List data={[
                { icon: { name: 'home', type: 'material', size: 20, color: '#fff', backgroundColor: colors.primary }, title: 'Item with icon and action', onPress: async () => { Alert.alert('Warning', 'Item with action'); } },
                { icon: { name: 'search', type: 'material', size: 20, color: '#fff', backgroundColor: colors.notification }, title: 'Item with icon and action', onPress: async () => { Alert.alert('Warning', 'Item with action'); } },
                { icon: { name: 'close', type: 'material', size: 20, color: '#fff', backgroundColor: '#ff9933' }, title: 'Item with icon and action', onPress: async () => { Alert.alert('Warning', 'Item with action'); } }
            ]} />

            <List data={[
                { title: 'Item only' },
                { title: 'Item only' },
                { title: 'Item only' }
            ]} header={'Exapanded list'} footer={'The expanded list is often used in contact lists, conversations, among others.\nNOTE: On iOS < 15 is already set as default, so it has no effect.'} headerOnAndroid footerOnAndroid expanded />

            <List data={[
                { title: 'Share', color: { title: colors.primary }, chevron: false, onPress: async () => { Alert.alert('Warning', 'Share action'); } },
                { title: 'Report', color: { title: colors.notification }, chevron: false, onPress: async () => { Alert.alert('Warning', 'Report action'); } }
            ]} />

            <Divider />
        </ScrollView>
    );
}

export default Lists;
