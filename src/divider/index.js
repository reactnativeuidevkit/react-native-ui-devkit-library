/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
* Copyright © 2023 React Native UI DevKit Library - All rights reserved
*/
import React, { useContext } from 'react';
import { ScrollView, Text } from 'react-native';

// React Native UI DevKit
import { useColors, Divider, List, Item, Button, DescriptionFontSize } from 'react-native-ui-devkit';

import { GlobalContext } from '../../libs/globalContext';
import Header from '../../libs/header';

const MiscellaneousDivider = () => {
    useContext(GlobalContext);
    const colors = useColors();

    return (
        <ScrollView>
            <Header type={'divider'} />

            <Item data={{
                component:
                    <Text style={[{ margin: 15, color: colors.text }, DescriptionFontSize()]}>
                        {`It is used to create spacing between components with the native specification of each Android and iOS platform.\n\nNOTE:\nLists, Items and Buttons already have native spacing.`}
                    </Text>,
                padding: false
            }} header={'What is it for'} headerOnAndroid />

            <Item data={{ title: 'Item 1' }} />
            <Item data={{ title: 'Item 2' }} />
            <List data={[{ title: 'Item 1' }, { title: 'Item 2' }]} />
            <Button blue data={{ title: 'Button', onPress: async () => { } }} />

            <Divider />
        </ScrollView>
    );
}

export default MiscellaneousDivider;
