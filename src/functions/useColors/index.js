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

const FunctionsUseColors = (props) => {
    useContext(GlobalContext);
    const colors = useColors();

    return (
        <ScrollView>
            <Header type={'useColors'} />

            <Item data={{
                component:
                    <Text style={[DescriptionFontSize(), { margin: 15, color: colors.text }]}>
                        {`useColors() returns the native colors according to the platform and version used, respecting the light or dark theme.`}
                    </Text>,
                padding: false
            }}
                header={'Usage'} headerOnAndroid index={0} count={2} />

            <Item data={{
                component:
                    <Text style={[DescriptionFontSize(), { color: colors.text, paddingVertical: 15 }]}>
{`import React from 'react';
import { Text } from "react-native";

// React Native UI DevKit
import { useColors } from 'react-native-ui-devkit';

const App = () => {
    const colors = useColors();

    return (
        <Text style={{ color: colors.text }}>Text</Text>
    );
}

export default App;`}
                    </Text>
            }} index={1} count={2} />

            <Divider />
        </ScrollView>
    );
}

export default FunctionsUseColors;
