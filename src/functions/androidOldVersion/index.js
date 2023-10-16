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

const FunctionsAndroidOldVersion = (props) => {
    useContext(GlobalContext);
    const colors = useColors();

    return (
        <ScrollView>
            <Header type={'androidOldVersion'} />

            <Item data={{
                component:
                    <Text style={[DescriptionFontSize(), { margin: 15, color: colors.text }]}>
                        {`Returns whether the Android version is at or below API 26 so you can perform specific implementations for older versions.`}
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
import { androidOldVersion } from 'react-native-ui-devkit';

const App = () => {
    return (
        <View style={[
            androidOldVersion(),
            {
                // your custom style here...
            }]}>
            <Text>Text</Text>
        </View>
    );
}

export default App;`}
                    </Text>
            }} footer={'Starting with Android API version 26, there were many layout and behavior changes.'} footerOnAndroid index={1} count={2} />

            <Divider />
        </ScrollView>
    );
}

export default FunctionsAndroidOldVersion;
