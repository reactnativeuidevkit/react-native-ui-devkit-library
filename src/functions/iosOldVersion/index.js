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

const FunctionsIosOldVersion = (props) => {
    useContext(GlobalContext);
    const colors = useColors();

    return (
        <ScrollView>
            <Header type={'iosOldVersion'} />

            <Item data={{
                component:
                    <Text style={[DescriptionFontSize(), { margin: 15, color: colors.text }]}>
                        {`Returns whether the iOS version is lower than 15 so you can perform specific deployments for older versions.`}
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
import { iosOldVersion } from 'react-native-ui-devkit';

const App = () => {
    return (
        <View style={[
            iosOldVersion(),
            {
                // your custom style here...
            }]}>
            <Text>Text</Text>
        </View>
    );
}

export default App;`}
                    </Text>
            }} footer={'Starting with version 15, there were many layout and behavior changes.'} footerOnAndroid index={1} count={2} />

            <Divider />
        </ScrollView>
    );
}

export default FunctionsIosOldVersion;
