/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
* Copyright © 2023 React Native UI DevKit Library - All rights reserved
*/
import React, { useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';

// React Native UI DevKit
import { useColors, List, Divider, TitleFontSize, MediumFontSize, DescriptionFontSize } from 'react-native-ui-devkit';

import { GlobalContext } from '../../libs/globalContext';
import Header from '../../libs/header';

const Fonts = () => {
    useContext(GlobalContext);
    const colors = useColors();

    return (
        <ScrollView>
            <Header type={'fonts'} />

            <Divider />

            <View style={{ margin: 15 }}>
                <Text style={[{ color: colors.text, fontWeight: '600' }, TitleFontSize()]}>TitleFontSize()</Text>
                <Text style={[{ color: colors.text }, TitleFontSize()]}>This font size is the default for titles in lists, items, text entries, and buttons on Android and iOS.</Text>
                <Divider />
                <Text style={[{ color: colors.text, fontWeight: '600' }, MediumFontSize()]}>MediumFontSize()</Text>
                <Text style={[{ color: colors.text }, MediumFontSize()]}>This font size is used in descriptions of cards and other items on Android and iOS.</Text>
                <Divider />
                <Text style={[{ color: colors.text, fontWeight: '600' }, DescriptionFontSize()]}>DescriptionFontSize()</Text>
                <Text style={[{ color: colors.text }, DescriptionFontSize()]}>This font size is used in descriptions for lists, items, and buttons on Android and iOS.</Text>
            </View>

            <List data={[
                { component: <Text style={[{ color: colors.text }, TitleFontSize()]}>TitleFontSize()</Text> },
                { component: <Text style={[{ color: colors.text }, MediumFontSize()]}>MediumFontSize()</Text> },
                { component: <Text style={[{ color: colors.text }, DescriptionFontSize()]}>DescriptionFontSize()</Text> }
            ]} header={'Default'} headerOnAndroid />

            <List data={[
                { component: <Text style={[{ color: colors.text }, TitleFontSize(1.5)]}>TitleFontSize(1.5)</Text> },
                { component: <Text style={[{ color: colors.text }, MediumFontSize(1.5)]}>MediumFontSize(1.5)</Text> },
                { component: <Text style={[{ color: colors.text }, DescriptionFontSize(1.5)]}>DescriptionFontSize(1.5)</Text> }
            ]} header={'With scale (1.5)'} headerOnAndroid />

            <List data={[
                { component: <Text style={[{ color: colors.text }, TitleFontSize(2)]}>TitleFontSize(2)</Text> },
                { component: <Text style={[{ color: colors.text }, MediumFontSize(2)]}>MediumFontSize(2)</Text> },
                { component: <Text style={[{ color: colors.text }, DescriptionFontSize(2)]}>DescriptionFontSize(2)</Text> }
            ]} header={'With scale (2)'} headerOnAndroid />

            <Divider />
        </ScrollView>
    );
}

export default Fonts;
