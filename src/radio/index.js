/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
* Copyright © 2023 React Native UI DevKit Library - All rights reserved
*/
import React, { useContext, useState } from 'react';
import { Platform, ScrollView } from 'react-native';

// React Native UI DevKit
import { useColors, List, Divider } from 'react-native-ui-devkit';

import { GlobalContext } from '../../libs/globalContext';
import Header from '../../libs/header';

const Radio = () => {
    useContext(GlobalContext);
    const colors = useColors();
    const [vars, setVars] = useState({ radio: 1 })

    return (
        <ScrollView>
            <Header type={'radio'} />

            <List data={[
                {
                    ...Platform.OS == 'ios' && { icon: { name: 'volume-medium', type: 'ionicons', size: 30, color: colors.text, backgroundColor: 'transparent' } },
                    title: 'Radio 1',
                    radio: (vars.radio == 1),
                    onPress: async () => {
                        setVars((prevState) => ({ ...prevState, radio: 1 }));
                    }
                },
                {
                    ...Platform.OS == 'ios' && { icon: { name: 'volume-low-sharp', type: 'ionicons', size: 30, color: colors.text, backgroundColor: 'transparent' } },
                    title: 'Radio 2',
                    radio: (vars.radio == 2),
                    onPress: async () => {
                        setVars((prevState) => ({ ...prevState, radio: 2 }));
                    }
                },
                {
                    title: 'Radio 3',
                    ...Platform.OS == 'android' && { description: 'With description on Android' },
                    ...Platform.OS == 'ios' && { subdescription: 'With subdescription on iOS' },
                    radio: (vars.radio == 3),
                    onPress: async () => {
                        setVars((prevState) => ({ ...prevState, radio: 3 }));
                    }
                },
                {
                    title: 'Radio 4 with loading',
                    radio: (vars.radio == 4),
                    loading: vars.loading,
                    onPress: async () => {
                        setVars((prevState) => ({ ...prevState, loading: true }));
                        setTimeout(() => {
                            setVars((prevState) => ({ ...prevState, radio: 4, loading: false }));
                        }, 2000);

                    }
                }
            ]} footer={'This radio list has different rendering for each platform, Android and iOS.'} footerOnAndroid />

            <Divider />
        </ScrollView>
    );
}

export default Radio;