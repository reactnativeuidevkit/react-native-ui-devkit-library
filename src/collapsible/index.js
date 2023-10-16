/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
* Copyright © 2023 React Native UI DevKit Library - All rights reserved
*/
import React, { useContext, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

// React Native UI DevKit
import { useColors, List, Divider, MediumFontSize } from 'react-native-ui-devkit';

import { GlobalContext } from '../../libs/globalContext';
import Header from '../../libs/header';

const Collapsible = () => {
    useContext(GlobalContext);
    const colors = useColors();
    const [vars, setVars] = useState({ collapsible: 1, collapsible1: false, collapsible2: false, collapsible3: false, onlyCollapsible: false })

    return (
        <ScrollView>
            <Header type={'collapsible'} />

            <List data={[
                {
                    icon: { name: 'chevron-collapse', type: 'ionicons', size: 18, color: '#fff', backgroundColor: colors.primary },
                    title: 'Collapsible 1',
                    delay: false,
                    collapsible: (vars.collapsible == 1),
                    onPress: async () => {
                        setVars((prevState) => ({ ...prevState, collapsible: prevState.collapsible == 1 ? null : 1 }));
                    }
                },
                vars.collapsible == 1 && {
                    component: (
                        <View style={{ flex: 1, marginVertical: 10 }}>
                            <Text style={[{ color: colors.text }, MediumFontSize()]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio nisi, commodo eu semper sed, elementum a risus. Nulla facilisi.</Text>
                        </View>
                    )
                },
                {
                    icon: { name: 'chevron-collapse', type: 'ionicons', size: 18, color: '#fff', backgroundColor: colors.primary },
                    title: 'Collapsible 2',
                    delay: false,
                    collapsible: (vars.collapsible == 2),
                    onPress: async () => {
                        setVars((prevState) => ({ ...prevState, collapsible: prevState.collapsible == 2 ? null : 2 }));
                    }
                },
                vars.collapsible == 2 && {
                    component: (
                        <View style={{ flex: 1, marginVertical: 10 }}>
                            <Text style={[{ color: colors.text }, MediumFontSize()]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio nisi, commodo eu semper sed, elementum a risus. Nulla facilisi.</Text>
                        </View>
                    )
                },
                {
                    icon: { name: 'chevron-collapse', type: 'ionicons', size: 18, color: '#fff', backgroundColor: colors.primary },
                    title: 'Collapsible 3',
                    delay: false,
                    collapsible: (vars.collapsible == 3),
                    onPress: async () => {
                        setVars((prevState) => ({ ...prevState, collapsible: prevState.collapsible == 3 ? null : 3 }));
                    }
                },
                vars.collapsible == 3 && {
                    component: (
                        <View style={{ flex: 1, marginVertical: 10 }}>
                            <Text style={[{ color: colors.text }, MediumFontSize()]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio nisi, commodo eu semper sed, elementum a risus. Nulla facilisi.</Text>
                        </View>
                    )
                }
            ]} header={'One at a time'} footer={'This foldable will only work one at a time.'} headerOnAndroid footerOnAndroid />

            <List data={[
                {
                    icon: { name: 'chevron-collapse', type: 'ionicons', size: 18, color: '#fff', backgroundColor: colors.primary },
                    title: 'Collapsible 1',
                    delay: false,
                    collapsible: vars.collapsible1,
                    onPress: async () => {
                        setVars((prevState) => ({ ...prevState, collapsible1: !prevState.collapsible1 }));
                    }
                },
                vars.collapsible1 && {
                    component: (
                        <View style={{ flex: 1, marginVertical: 10 }}>
                            <Text style={[{ color: colors.text }, MediumFontSize()]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio nisi, commodo eu semper sed, elementum a risus. Nulla facilisi.</Text>
                        </View>
                    )
                },
                {
                    icon: { name: 'chevron-collapse', type: 'ionicons', size: 18, color: '#fff', backgroundColor: colors.primary },
                    title: 'Collapsible 2',
                    delay: false,
                    collapsible: vars.collapsible2,
                    onPress: async () => {
                        setVars((prevState) => ({ ...prevState, collapsible2: !prevState.collapsible2 }));
                    }
                },
                vars.collapsible2 && {
                    component: (
                        <View style={{ flex: 1, marginVertical: 10 }}>
                            <Text style={[{ color: colors.text }, MediumFontSize()]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio nisi, commodo eu semper sed, elementum a risus. Nulla facilisi.</Text>
                        </View>
                    )
                },
                {
                    icon: { name: 'chevron-collapse', type: 'ionicons', size: 18, color: '#fff', backgroundColor: colors.primary },
                    title: 'Collapsible 3',
                    delay: false,
                    collapsible: vars.collapsible3,
                    onPress: async () => {
                        setVars((prevState) => ({ ...prevState, collapsible3: !prevState.collapsible3 }));
                    }
                },
                vars.collapsible3 && {
                    component: (
                        <View style={{ flex: 1, marginVertical: 10 }}>
                            <Text style={[{ color: colors.text }, MediumFontSize()]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio nisi, commodo eu semper sed, elementum a risus. Nulla facilisi.</Text>
                        </View>
                    )
                }
            ]} header={'Independent'} footer={'This foldable will work independently.'} headerOnAndroid footerOnAndroid />

            <List data={[
                {
                    icon: { name: 'chevron-collapse', type: 'ionicons', size: 18, color: '#fff', backgroundColor: colors.primary },
                    title: 'Collapsible',
                    delay: false,
                    collapsible: vars.onlyCollapsible,
                    onPress: async () => {
                        setVars((prevState) => ({ ...prevState, onlyCollapsible: !prevState.onlyCollapsible }));
                    }
                },
                vars.onlyCollapsible && {
                    component: (
                        <View style={{ flex: 1, marginVertical: 10 }}>
                            <Text style={[{ color: colors.text }, MediumFontSize()]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio nisi, commodo eu semper sed, elementum a risus. Nulla facilisi.</Text>
                        </View>
                    )
                }
            ]} header={'Only one'} footer={'This foldable will work independently.'} headerOnAndroid footerOnAndroid />

            <Divider />
        </ScrollView>
    );
}

export default Collapsible;
