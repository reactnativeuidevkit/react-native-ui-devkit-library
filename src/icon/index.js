/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
* Copyright © 2023 React Native UI DevKit Library - All rights reserved
*/
import React, { useContext } from 'react';
import { Linking, ScrollView, Text, View } from 'react-native';

// React Native UI DevKit
import { useColors, Icon, Divider, List, TitleFontSize, DescriptionFontSize } from 'react-native-ui-devkit';

import { GlobalContext } from '../../libs/globalContext';
import Header from '../../libs/header';

const Icons = () => {
    useContext(GlobalContext);
    const colors = useColors();

    return (
        <ScrollView>
            <Header type={'icon'} />

            <List data={[
                {
                    component:
                        <View style={{ paddingVertical: 15 }}>
                            <Text style={[{ color: colors.text }, TitleFontSize()]}>Vector Icons (react-native-vector-icons)</Text>
                            <Text style={[{ color: colors.secondary }, DescriptionFontSize()]}>{`This project is licenced under the MIT License.\nAny bundled fonts are copyright to their respective authors and mostly under MIT or SIL OFL.`}</Text>

                            <View style={{ flex: 1, alignItems: 'center', marginTop: 30, marginBottom: 20 }}>
                                <View style={{ flex: 1, flexDirection: 'row', gap: 30 }}>
                                    <Icon name='home' type='antdesign' size={20} color={colors.text} />
                                    <Icon name='search' type='feather' size={20} color={colors.text} badge={{ value: 9 }} />
                                    <Icon name='list' type='font-awesome' size={18} color={colors.text} badge={{ value: 9, color: { text: colors.notification, badge: colors.card } }} />
                                    <Icon name='bell' type='font-awesome' size={18} color={colors.text} badge={{ value: 9, color: { badge: colors.notification } }} />
                                </View>
                            </View>
                        </View>
                }, {
                    title: 'npmjs.com/.../react-native-vector-icons',
                    color: {
                        title: colors.primary
                    },
                    chevron: false,
                    onPress: async () => { Linking.openURL('https://www.npmjs.com/package/react-native-vector-icons'); }
                }, {
                    title: 'oblador.github.io/react-native-vector-icons',
                    color: {
                        title: colors.primary
                    },
                    chevron: false,
                    onPress: async () => { Linking.openURL('https://oblador.github.io/react-native-vector-icons'); }
                }
            ]} header={'Third-party libraries'} footer={'If you want to use icons in your application, see the documentation.'} headerOnAndroid footerOnAndroid />

            <List data={[
                {
                    component:
                        <View style={{ paddingVertical: 15 }}>
                            <Text style={[{ color: colors.text }, TitleFontSize()]}>react-native-animatable</Text>
                            <Text style={[{ color: colors.secondary }, DescriptionFontSize()]}>MIT License. © Joel Arvidsson 2015</Text>

                            <View style={{ flex: 1, alignItems: 'center', marginTop: 30, marginBottom: 20 }}>
                                <View style={{ flex: 1, flexDirection: 'row', gap: 30 }}>
                                    <Icon name='home' type='antdesign' size={20} color={colors.text} animation='bounce' iterationCount={'infinite'} />
                                    <Icon name='search' type='feather' size={20} color={colors.text} badge={{ value: 9 }} animation='fadeIn' iterationCount={'infinite'} />
                                    <Icon name='list' type='font-awesome' size={18} color={colors.text} badge={{ value: 9, color: { text: colors.notification, badge: colors.card } }} animation='fadeOut' iterationCount={'infinite'} />
                                    <Icon name='bell' type='font-awesome' size={18} color={colors.text} badge={{ value: 9, color: { badge: colors.notification } }} animation='flash' iterationCount={'infinite'} />
                                </View>
                            </View>
                        </View>
                }, {
                    title: 'npmjs.com/.../react-native-animatable',
                    color: {
                        title: colors.primary
                    },
                    chevron: false,
                    onPress: async () => { Linking.openURL('https://www.npmjs.com/package/react-native-animatable'); }
                }
            ]} header={'Third-party libraries'} footer={'If you want to use icons in your application, see the documentation.'} headerOnAndroid footerOnAndroid />

            <Divider />
        </ScrollView>
    );
}

export default Icons;
