/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
* Copyright © 2023 React Native UI DevKit Library - All rights reserved
*/
import React, { useContext } from 'react';
import { Alert, Image, PixelRatio, Platform, ScrollView, Text, View } from 'react-native';

// React Native UI DevKit
import { useColors, Icon, List, Item, Button, Divider, TitleFontSize, DescriptionFontSize, BorderRadius, IosOldVersion } from 'react-native-ui-devkit';

import { GlobalContext } from '../../libs/globalContext';
import Header from '../../libs/header';

const Cards = () => {
    useContext(GlobalContext);
    const colors = useColors();

    return (
        <ScrollView>
            <Header type={'card'} />

            <List data={[{
                component:
                    <View style={{ flex: 1, margin: 15, alignItems: 'center' }}>
                        <Image
                            source={{ uri: Image.resolveAssetSource(require('../../static/img/avatar-1.png')).uri }}
                            style={[{ width: 100, height: 100, marginBottom: 10 }, BorderRadius()]}
                        />
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={[{ flex: 1, color: colors.text, fontWeight: '500' }, TitleFontSize(1.5)]} numberOfLines={1}>Ivor Fugler</Text>
                            <Button data={{ title: 'ivor@fugler.com', onPress: async () => { Alert.alert('Warning', 'Card 1 - Link'); } }} link marginTop={false} />
                        </View>
                    </View>
            },
            {
                title: 'View Profile',
                color: {
                    title: colors.primary
                },
                onPress: async () => {
                    Alert.alert('Warning', 'Card 1 - View Profile');
                }
            }]} header={'Card Android and iOS'} footer={'This card has the same rendering on Android and iOS platform.'} headerOnAndroid footerOnAndroid />

            <Item data={{
                component:
                    <View style={{ flex: 1, margin: 15, alignItems: 'center' }}>
                        <Image
                            source={{ uri: Image.resolveAssetSource(require('../../static/img/avatar-1.png')).uri }}
                            style={[{ width: 100, height: 100, marginBottom: 10, borderRadius: 50 }]}
                        />
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={[{ flex: 1, color: colors.text, fontWeight: '500' }, TitleFontSize(1.5)]} numberOfLines={1}>Ivor Fugler</Text>
                            <Button data={{ title: 'ivor@fugler.com', onPress: async () => { Alert.alert('Warning', 'Card 2 - Link'); } }} link marginTop={false} />
                        </View>
                    </View>,
                chevron: false,
                delay: false,
                onPress: async () => {
                    Alert.alert('Warning', 'Card 2');
                }
            }} header={'Card Android and iOS'} footer={'This card has the same rendering on Android and iOS platform.'} headerOnAndroid footerOnAndroid />

            <List data={[
                {
                    icon: Platform.OS == 'ios' && {
                        component:
                            <View style={[{ marginVertical: 10, width: 60, height: 60, marginRight: 15 }]}>
                                <Image
                                    source={{ uri: Image.resolveAssetSource(require('../../static/img/avatar-1.png')).uri }}
                                    style={{ width: 60, height: 60, borderRadius: 30 }}
                                />
                            </View>
                    },
                    component:
                        <View style={{ flex: 1 }}>
                            <View style={{
                                flexDirection: "row",
                            }}>
                                <View style={[{ flex: 1, justifyContent: 'center' }, Platform.OS == 'android' && { marginLeft: 0, marginRight: 15 }]}>
                                    <Text style={{ color: colors.text, fontSize: ((Platform.OS == 'ios' ? 22 : (24 * PixelRatio.getFontScale()))) }} numberOfLines={1}>Ivor Fugler</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ color: colors.secondary }} numberOfLines={2}>
                                            @fugler
                                        </Text>
                                        <Icon name={'verified'} type={'material'} size={13} color={colors.primary} style={{ marginLeft: (Platform.OS == 'ios' ? 2 : 5) }} />
                                    </View>
                                </View>

                                {Platform.OS == 'android' &&
                                    <View style={[{ marginVertical: 16 }]}>
                                        <Image
                                            source={{ uri: Image.resolveAssetSource(require('../../static/img/avatar-1.png')).uri }}
                                            style={{ width: 60, height: 60, borderRadius: 30 }}
                                        />
                                    </View>
                                }
                            </View>
                        </View>,
                    onPress: async () => {
                        Alert.alert('Warning', 'Card 3');
                    }
                },
                {
                    title: 'Logout',
                    color: {
                        title: colors.notification
                    },
                    separator: { start: (Platform.OS == 'ios' ? (IosOldVersion ? 90 : 105) : 0) },
                    onPress: async () => {
                        Alert.alert('Warning', 'Card 3 - Logout');
                    }
                }
            ]} header={Platform.OS == 'android' ? 'Card Android' : 'Card iOS' + (IosOldVersion ? ' < 15' : ' 15+')} footer={'This card has different rendering for each platform, Android and iOS.'} headerOnAndroid footerOnAndroid />

            <Item data={{
                icon: Platform.OS == 'ios' && {
                    component:
                        <View style={[{ marginVertical: 10, width: 60, height: 60, marginRight: 15 }]}>
                            <Image
                                source={{ uri: Image.resolveAssetSource(require('../../static/img/avatar-1.png')).uri }}
                                style={{ width: 60, height: 60, borderRadius: 30 }}
                            />
                        </View>
                },
                component:
                    <View style={{ flex: 1 }}>
                        <View style={{
                            flexDirection: "row",
                        }}>
                            <View style={[{ flex: 1, justifyContent: 'center' }, Platform.OS == 'android' && { marginLeft: 0, marginRight: 15 }]}>
                                <Text style={{ color: colors.text, fontSize: ((Platform.OS == 'ios' ? 22 : (24 * PixelRatio.getFontScale()))) }} numberOfLines={1}>Ivor Fugler</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ color: colors.secondary }} numberOfLines={2}>
                                        @fugler
                                    </Text>
                                    <Icon name={'verified'} type={'material'} size={13} color={colors.primary} style={{ marginLeft: (Platform.OS == 'ios' ? 2 : 5) }} />
                                </View>
                            </View>

                            {Platform.OS == 'android' &&
                                <View style={[{ marginVertical: 16 }]}>
                                    <Image
                                        source={{ uri: Image.resolveAssetSource(require('../../static/img/avatar-1.png')).uri }}
                                        style={{ width: 60, height: 60, borderRadius: 30 }}
                                    />
                                </View>
                            }
                        </View>
                    </View>,
                onPress: async () => {
                    Alert.alert('Warning', 'Card 4');
                }
            }} header={Platform.OS == 'android' ? 'Card Android' : 'Card iOS' + (IosOldVersion ? ' < 15' : ' 15+')} footer={'This card has different rendering for each platform, Android and iOS.'} headerOnAndroid footerOnAndroid />

            <Item data={{
                component:
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, margin: 10, alignItems: 'center' }}>
                            <Image
                                source={{ uri: Image.resolveAssetSource(require('../../static/img/product-1.png')).uri }}
                                style={[{ width: 120, height: 120, margin: 10 }, BorderRadius()]}
                            />
                            <Text style={[DescriptionFontSize(), { color: colors.primary }]}>NEW</Text>
                            <View style={{ flex: 1, alignItems: 'center', marginHorizontal: 40 }}>
                                <Text style={[{ color: colors.text }, TitleFontSize(2)]} numberOfLines={1}>Camera</Text>
                                <Text style={[{ color: colors.secondary, textAlign: 'center' }, DescriptionFontSize()]} numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus.</Text>
                                <Text style={[{ color: colors.primary, fontWeight: '500' }, TitleFontSize(1.8)]} numberOfLines={2}>$ 999.00</Text>
                            </View>

                            <Button data={{
                                title: 'Buy',
                                delay: false,
                                onPress: async () => {
                                    Alert.alert('Warning', 'Card 5 - Buy');
                                }
                            }} blue />
                        </View>
                        <Button data={{
                            component: <Icon name={'share'} type={'font-awesome'} size={18} color={colors.primary} backgroundColor={'transparent'} />,
                            delay: false,
                            style: { backgroundColor: 'transparent' },
                            onPress: async () => {
                                Alert.alert('Warning', 'Card 5 - Share');
                            }
                        }} style={{ position: 'absolute', top: 10, right: Platform.OS == 'android' ? 10 : 0 }} />
                    </View>,
                chevron: false,
                delay: false,
                padding: false
            }} header={'Card Android and iOS'} footer={'This card has the same rendering on Android and iOS platform.'} headerOnAndroid footerOnAndroid />

            <Divider />
        </ScrollView>
    );
}

export default Cards;
