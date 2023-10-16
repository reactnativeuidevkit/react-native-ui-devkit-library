/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
* Copyright © 2023 React Native UI DevKit Library - All rights reserved
*/
import React, { useContext } from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';

// React Native UI DevKit
import { useColors, Icon, Item, TitleFontSize, BorderRadius } from 'react-native-ui-devkit'

import { GlobalContext } from '../libs/globalContext';

const Header = ({ type }) => {
    const { global, setGlobal } = useContext(GlobalContext);
    const colors = useColors();

    const iconSize = Platform.OS == 'android' ? 80 : 60;
    let iconBackgroundColor = colors.primary;

    let title = 'Library';
    if (type == 'home') {
        iconBackgroundColor = '#04A1CE';
    } else if (type == 'code') {
        title = 'Build';
        iconBackgroundColor = '#04A1CE';
    } else if (type == 'list') {
        title = 'List';
    } else if (type == 'item') {
        title = 'Item';
    } else if (type == 'card') {
        title = 'Card';
    } else if (type == 'flatList') {
        title = 'FlatList';
    } else if (type == 'checkbox') {
        title = 'Checkbox';
    } else if (type == 'radio') {
        title = 'Radio';
    } else if (type == 'switch') {
        title = 'Switch';
    } else if (type == 'collapsible') {
        title = 'Collapsible';
    } else if (type == 'icon') {
        title = 'Icon';
    } else if (type == 'textInput') {
        title = 'TextInput';
        iconBackgroundColor = '#39CA61';
    } else if (type == 'button') {
        title = 'Button';
        iconBackgroundColor = colors.notification;
    } else if (type == 'action') {
        title = 'Action';
        iconBackgroundColor = colors.notification;
    } else if (type == 'swipeable') {
        title = 'Swipeable';
        iconBackgroundColor = colors.notification;
    } else if (type == 'divider') {
        title = 'Divider';
    } else if (type == 'dividerAndroidTablet') {
        title = 'DividerAndroidTablet';
    } else if (type == 'separator') {
        title = 'separator';
    } else if (type == 'fonts') {
        title = 'Fonts';
        iconBackgroundColor = '#ff9900';
    } else if (type == 'functions') {
        title = 'Functions';
        iconBackgroundColor = '#ff9900';
    } else if (type == 'useColors') {
        title = 'useColors()';
        iconBackgroundColor = colors.notification;
    } else if (type == 'marginTop') {
        title = 'marginTop()';
        iconBackgroundColor = colors.notification;
    } else if (type == 'marginBottom') {
        title = 'marginBottom()';
        iconBackgroundColor = colors.notification;
    } else if (type == 'marginHorizontal') {
        title = 'marginHorizontal()';
        iconBackgroundColor = colors.notification;
    } else if (type == 'paddingTop') {
        title = 'paddingTop()';
        iconBackgroundColor = colors.notification;
    } else if (type == 'paddingBottom') {
        title = 'paddingBottom()';
        iconBackgroundColor = colors.notification;
    } else if (type == 'paddingHorizontal') {
        title = 'paddingHorizontal()';
        iconBackgroundColor = colors.notification;
    } else if (type == 'borderRadius') {
        title = 'borderRadius()';
        iconBackgroundColor = colors.notification;
    } else if (type == 'androidOldVersion') {
        title = 'androidOldVersion()';
        iconBackgroundColor = colors.notification;
    } else if (type == 'iosOldVersion') {
        title = 'iosOldVersion()';
        iconBackgroundColor = colors.notification;
    }

    return (
        <>
            <Item data={{
                component: (
                    <View style={{ alignItems: 'center', paddingVertical: 20 }}>
                        <View style={[{ width: iconSize, height: iconSize, backgroundColor: iconBackgroundColor, alignItems: 'center', justifyContent: 'center' }, BorderRadius()]}>
                            {type == 'home' && <Image source={{ uri: Image.resolveAssetSource(require('../static/img/icon-white.png')).uri }} style={{ width: iconSize / 1.3, height: iconSize / 2 }} />}
                            {type == 'code' && <Icon name='code' type='font-awesome' size={iconSize / 1.5} color={'#fff'} />}
                            {type == 'list' && <Icon name='list' type='feather' size={iconSize / 1.5} color={'#fff'} />}
                            {type == 'item' && <Icon name='view-day' type='material-community' size={iconSize / 1.5} color={'#fff'} />}
                            {type == 'card' && <Icon name='card-text' type='material-community' size={iconSize / 1.5} color={'#fff'} />}
                            {type == 'flatList' && <Icon name='list' type='feather' size={iconSize / 1.5} color={'#fff'} />}
                            {type == 'checkbox' && <Icon name='check' type='entypo' size={iconSize / 1.5} color={'#fff'} />}
                            {type == 'radio' && <Icon name='radio-button-on' type='ionicons' size={iconSize / 1.5} color={'#fff'} />}
                            {type == 'switch' && <Icon name='toggle-switch-off-outline' type='material-community' size={iconSize / 1.5} color={'#fff'} />}
                            {type == 'collapsible' && <Icon name='chevron-collapse' type='ionicons' size={iconSize / 1.5} color={'#fff'} />}
                            {type == 'icon' && <Icon name='icons' type='font-awesome5' size={iconSize / 1.6} color={'#fff'} />}
                            {type == 'textInput' && <Icon name='cursor-text' type='material-community' size={iconSize / 1.6} color={'#fff'} />}
                            {type == 'button' && <Icon name='touch-app' type='material' size={iconSize / 1.6} color={'#fff'} />}
                            {type == 'action' && <Icon name='dots-vertical' type='material-community' size={iconSize / 1.6} color={'#fff'} />}
                            {type == 'swipeable' && <Icon name='swipe' type='material' size={iconSize / 1.6} color={'#fff'} />}
                            {type == 'fonts' && <Icon name='format-text' type='material-community' size={iconSize / 1.5} color={'#fff'} />}
                            {type == 'divider' && <Icon name='view-day-outline' type='material-community' size={iconSize / 1.5} color={'#fff'} />}
                            {type == 'dividerAndroidTablet' && <Icon name='view-day-outline' type='material-community' size={iconSize / 1.5} color={'#fff'} />}
                            {type == 'separator' && <Icon name='remove-outline' type='ionicons' size={iconSize / 1.5} color={'#fff'} />}
                            {type == 'functions' && <Icon name='cogs' type='material-community' size={iconSize / 1.5} color={'#fff'} />}
                            {type == 'useColors' && <Icon name='color-lens' type='material' size={iconSize / 1.5} color={'#fff'} />}
                            {type == 'marginTop' && <Icon name='dock-top' type='material-community' size={iconSize / 1.5} color={'#fff'} />}
                            {type == 'marginBottom' && <Icon name='dock-bottom' type='material-community' size={iconSize / 1.5} color={'#fff'} />}
                            {type == 'marginHorizontal' && <Icon name='arrow-split-vertical' type='material-community' size={iconSize / 1.5} color={'#fff'} />}
                            {type == 'paddingTop' && <Icon name='align-top' type='entypo' size={iconSize / 1.5} color={'#fff'} />}
                            {type == 'paddingBottom' && <Icon name='align-bottom' type='entypo' size={iconSize / 1.5} color={'#fff'} />}
                            {type == 'paddingHorizontal' && <Icon name='arrow-expand-horizontal' type='material-community' size={iconSize / 1.5} color={'#fff'} />}
                            {type == 'borderRadius' && <Icon name='vector-radius' type='material-community' size={iconSize / 1.5} color={'#fff'} />}
                            {type == 'androidOldVersion' && <Icon name='android' type='font-awesome' size={iconSize / 1.5} color={'#fff'} />}
                            {type == 'iosOldVersion' && <Icon name='apple-ios' type='material-community' size={iconSize / 1.5} color={'#fff'} />}
                        </View>
                        <Text style={[styles.text, { color: colors.text }, TitleFontSize(1.5)]}>
                            {title}
                        </Text>
                    </View>
                )
            }} index={0} count={2} />
            <Item data={{
                icon: { name: global.dark ? 'dark-mode' : 'light-mode', type: 'material', size: 20, color: colors.background, backgroundColor: colors.text },
                title: `Theme`,
                description: global.dark ? 'Dark' : 'Light',
                switch: {
                    value: global.dark, onValueChange: (value) => {
                        setGlobal((prevState) => ({ ...prevState, dark: value }));
                    }
                }
            }}
                index={1} count={2} />
        </>
    );
};

const styles = StyleSheet.create({
    text: {
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 10
    },
});

export default Header;
