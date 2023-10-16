/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
* Copyright © 2023 React Native UI DevKit Library - All rights reserved
*/
import React, { useContext } from 'react';
import { ScrollView, Text } from 'react-native';

// React Native UI DevKit
import { useColors, Item, DescriptionFontSize, Divider } from 'react-native-ui-devkit';

import { GlobalContext } from '../../../libs/globalContext';
import Header from '../../../libs/header';

const FunctionsPaddingTop = (props) => {
    useContext(GlobalContext);
    const colors = useColors();

    return (
        <ScrollView>
            <Header type={'paddingTop'} />

            <Item data={{
                component:
                    <Text style={[DescriptionFontSize(), { margin: 15, color: colors.text }]}>
                        {`Applies paddingTop() according to platform and version to any component that accepts the paddingTop property in its style.`}
                    </Text>,
                padding: false
            }}
                header={'Usage'} headerOnAndroid index={0} count={2} />

            <Item data={{
                component:
                    <Text style={[DescriptionFontSize(), { color: colors.text, paddingVertical: 15 }]}>
{`import React from 'react';
import { Text, View } from "react-native";

// React Native UI DevKit
import { paddingTop } from 'react-native-ui-devkit';

const App = () => {
    return (
        <View style={[
            paddingTop(),
            {
                // your custom style here...
            }]}>
            <Text>Text</Text>
        </View>
    );
}

export default App;`}
                    </Text>
            }} index={1} count={2} />

            <Divider />
        </ScrollView>
    );
}

export default FunctionsPaddingTop;
