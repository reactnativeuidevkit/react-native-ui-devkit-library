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

const FlatListComponent = (props) => {
    const { navigation } = props;
    useContext(GlobalContext);
    const colors = useColors();

    return (
        <ScrollView>
            <Header type={'flatList'} />

            <List data={[
                { icon: { name: 'list', type: 'feather', size: 20, color: '#fff', backgroundColor: colors.primary }, title: 'Simple', ...Platform.OS == 'android' && { description: 'src/flatList/simple' }, ...Platform.OS == 'ios' && { subdescription: 'src/flatList/simple' }, onPress: async () => { navigation.navigate('FlatListSimple'); } },
                { icon: { name: 'chatbox', type: 'ionicons', size: 19, color: '#fff', backgroundColor: '#39CA61' }, title: 'Chat', ...Platform.OS == 'android' && { description: 'src/flatList/chat' }, ...Platform.OS == 'ios' && { subdescription: 'src/flatList/chat' }, onPress: async () => { navigation.navigate('FlatListChat'); } },
                { icon: { name: 'user', type: 'font-awesome', size: 19, color: '#fff', backgroundColor: colors.notification }, title: 'User', ...Platform.OS == 'android' && { description: 'src/flatList/user' }, ...Platform.OS == 'ios' && { subdescription: 'src/flatList/user' }, onPress: async () => { navigation.navigate('FlatListUser'); } },
                { icon: { name: 'contact-phone', type: 'material', size: 19, color: '#fff', backgroundColor: colors.notification }, title: 'Contact', ...Platform.OS == 'android' && { description: 'src/flatList/contact' }, ...Platform.OS == 'ios' && { subdescription: 'src/flatList/contact' }, onPress: async () => { navigation.navigate('FlatListContact'); } },
                { icon: { name: 'shopping-bag', type: 'font-awesome5', size: 18, color: '#fff', backgroundColor: '#ff9933' }, title: 'Product', ...Platform.OS == 'android' && { description: 'src/flatList/product' }, ...Platform.OS == 'ios' && { subdescription: 'src/flatList/product' }, onPress: async () => { navigation.navigate('FlatListProduct'); } }
            ]} header={'Examples'} headerOnAndroid />

            <Divider />
        </ScrollView>
    );
}

export default FlatListComponent;
