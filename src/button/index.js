/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
* Copyright © 2023 React Native UI DevKit Library - All rights reserved
*/
import React, { useContext } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';

// React Native UI DevKit
import { useColors, Button, Divider, TitleFontSize, DescriptionFontSize } from 'react-native-ui-devkit';

import { GlobalContext } from '../../libs/globalContext';
import Header from '../../libs/header';

const Buttons = () => {
    useContext(GlobalContext);
    const colors = useColors();

    return (
        <ScrollView>
            <Header type={'button'} />

            <Button data={{ title: 'Button', onPress: async () => { Alert.alert('Warning', 'Button'); } }} header={'Button with header on Android and iOS'} footer={'Button with footer on Android and iOS'} headerOnAndroid footerOnAndroid />
            <Button dashed data={{ title: 'Button', onPress: async () => { Alert.alert('Warning', 'Button'); } }} />
            <Button data={{ title: 'Button', disabled: true, onPress: async () => { Alert.alert('Warning', 'Button'); } }} />
            <Button data={{ title: 'Button', loading: true, onPress: async () => { Alert.alert('Warning', 'Button'); } }} />
            <Button data={{
                component:
                    <View style={{ alignItems: 'center', margin: 10 }}>
                        <Text style={[{ color: colors.primary }, TitleFontSize()]}>Button</Text>
                        <Text style={[{ color: colors.secondary }, DescriptionFontSize()]}>Component button</Text>
                    </View>
                ,
                onPress: async () => { Alert.alert('Warning', 'Button'); }
            }} />
            <Button data={{ icon: { name: 'search', type: 'feather', size: 22, color: colors.primary, backgroundColor: 'transparent' }, onPress: async () => { Alert.alert('Warning', 'Icon'); } }} />
            <Button data={{ title: 'Button', onPress: async () => { Alert.alert('Warning', 'Button'); } }} style={{ alignSelf: 'center' }} />

            <Divider />

            <Button blue data={{ title: 'Blue', onPress: async () => { Alert.alert('Warning', 'Blue'); } }} header={'Button with header on Android and iOS'} footer={'Button with footer on Android and iOS'} headerOnAndroid footerOnAndroid />
            <Button blue dashed data={{ title: 'blue', onPress: async () => { Alert.alert('Warning', 'blue'); } }} />
            <Button blue data={{ title: 'blue', disabled: true, onPress: async () => { Alert.alert('Warning', 'blue'); } }} />
            <Button blue data={{ title: 'blue', loading: true, onPress: async () => { Alert.alert('Warning', 'blue'); } }} />
            <Button blue data={{
                component:
                    <View style={{ alignItems: 'center', margin: 10 }}>
                        <Text style={[{ color: '#fff' }, TitleFontSize()]}>Blue</Text>
                        <Text style={[{ color: '#eee' }, DescriptionFontSize()]}>Component button</Text>
                    </View>
                ,
                onPress: async () => { Alert.alert('Warning', 'Blue'); }
            }} />
            <Button blue data={{ icon: { name: 'search', type: 'feather', size: 22, color: '#fff', backgroundColor: 'transparent' }, onPress: async () => { Alert.alert('Warning', 'Icon'); } }} />
            <Button blue data={{ title: 'Blue', onPress: async () => { Alert.alert('Warning', 'Blue'); } }} style={{ alignSelf: 'center' }} />

            <Divider />

            <Button gray data={{ title: 'Gray', onPress: async () => { Alert.alert('Warning', 'Gray'); } }} header={'Button with header on Android and iOS'} footer={'Button with footer on Android and iOS'} headerOnAndroid footerOnAndroid />
            <Button gray dashed data={{ title: 'Gray', onPress: async () => { Alert.alert('Warning', 'Gray'); } }} />
            <Button gray data={{ title: 'Gray', disabled: true, onPress: async () => { Alert.alert('Warning', 'Gray'); } }} />
            <Button gray data={{ title: 'Gray', loading: true, onPress: async () => { Alert.alert('Warning', 'Gray'); } }} />
            <Button gray data={{
                component:
                    <View style={{ alignItems: 'center', margin: 10 }}>
                        <Text style={[{ color: colors.primary }, TitleFontSize()]}>Gray</Text>
                        <Text style={[{ color: colors.secondary }, DescriptionFontSize()]}>Component button</Text>
                    </View>
                ,
                onPress: async () => { Alert.alert('Warning', 'Gray'); }
            }} />
            <Button gray data={{ icon: { name: 'search', type: 'feather', size: 22, color: colors.primary, backgroundColor: 'transparent' }, onPress: async () => { Alert.alert('Warning', 'Icon'); } }} />
            <Button gray data={{ title: 'Gray', onPress: async () => { Alert.alert('Warning', 'Destructive'); } }} style={{ alignSelf: 'center' }} />

            <Divider />

            <Button destructive data={{ title: 'Destructive', onPress: async () => { Alert.alert('Warning', 'Destructive'); } }} header={'Button with header on Android and iOS'} footer={'Button with footer on Android and iOS'} headerOnAndroid footerOnAndroid />
            <Button destructive dashed data={{ title: 'Destructive', onPress: async () => { Alert.alert('Warning', 'Destructive'); } }} />
            <Button destructive data={{ title: 'Destructive', disabled: true, onPress: async () => { Alert.alert('Warning', 'Destructive'); } }} />
            <Button destructive data={{ title: 'Destructive', loading: true, onPress: async () => { Alert.alert('Warning', 'Destructive'); } }} />
            <Button destructive data={{
                component:
                    <View style={{ alignItems: 'center', margin: 10 }}>
                        <Text style={[{ color: colors.notification }, TitleFontSize()]}>Destructive</Text>
                        <Text style={[{ color: colors.secondary }, DescriptionFontSize()]}>Component button</Text>
                    </View>
                ,
                onPress: async () => { Alert.alert('Warning', 'Destructive'); }
            }} />
            <Button destructive data={{ icon: { name: 'search', type: 'feather', size: 22, color: colors.notification, backgroundColor: 'transparent' }, onPress: async () => { Alert.alert('Warning', 'Icon'); } }} />
            <Button destructive data={{ title: 'Destructive', onPress: async () => { Alert.alert('Warning', 'Destructive'); } }} style={{ alignSelf: 'center' }} />

            <Divider />

            <Button transparent data={{ title: 'Transparent', onPress: async () => { Alert.alert('Warning', 'Transparent'); } }} header={'Button with header on Android and iOS'} footer={'Button with footer on Android and iOS'} headerOnAndroid footerOnAndroid />
            <Button transparent dashed data={{ title: 'Transparent', onPress: async () => { Alert.alert('Warning', 'Transparent'); } }} />
            <Button transparent data={{ title: 'Transparent', disabled: true, onPress: async () => { Alert.alert('Warning', 'Transparent'); } }} />
            <Button transparent data={{ title: 'Transparent', loading: true, onPress: async () => { Alert.alert('Warning', 'Transparent'); } }} />
            <Button transparent data={{
                component:
                    <View style={{ alignItems: 'center', margin: 10 }}>
                        <Text style={[{ color: colors.primary }, TitleFontSize()]}>Transparent</Text>
                        <Text style={[{ color: colors.secondary }, DescriptionFontSize()]}>Component button</Text>
                    </View>
                ,
                onPress: async () => { Alert.alert('Warning', 'Transparent'); }
            }} />
            <Button transparent data={{ icon: { name: 'search', type: 'feather', size: 22, color: colors.primary, backgroundColor: 'transparent' }, onPress: async () => { Alert.alert('Warning', 'Icon'); } }} />
            <Button transparent data={{ title: 'Transparent', onPress: async () => { Alert.alert('Warning', 'Transparent'); } }} style={{ alignSelf: 'center' }} />

            <Divider />

            <Button link data={{ title: 'Link', onPress: async () => { Alert.alert('Warning', 'Link'); } }} style={{ alignSelf: 'center' }} />
            <Button link small data={{ title: 'Small link', onPress: async () => { Alert.alert('Warning', 'Small link'); } }} style={{ alignSelf: 'center' }} />

            <Button link data={{ title: 'Link destructive', onPress: async () => { Alert.alert('Warning', 'Link'); } }} style={{ alignSelf: 'center' }} />
            <Button link small destructive data={{ title: 'Small link destructive', onPress: async () => { Alert.alert('Warning', 'Small link'); } }} style={{ alignSelf: 'center' }} />

            <Divider />

            <Button icon data={{ icon: { name: 'search', type: 'feather', size: 22, color: colors.primary }, onPress: async () => { Alert.alert('Warning', 'Icon'); } }} style={{ alignSelf: 'center' }} />

            <Divider />
        </ScrollView>
    );
}

export default Buttons;
