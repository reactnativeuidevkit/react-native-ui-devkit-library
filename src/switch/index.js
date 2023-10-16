/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
* Copyright © 2023 React Native UI DevKit Library - All rights reserved
*/
import React, { useContext, useState } from 'react';
import { Platform, ScrollView } from 'react-native';

// React Native UI DevKit
import { useColors, List, Item, Divider } from 'react-native-ui-devkit';

import { GlobalContext } from '../../libs/globalContext';
import Header from '../../libs/header';

const Switch = () => {
    useContext(GlobalContext);
    const colors = useColors();
    const [vars, setVars] = useState({ switch1: true })

    return (
        <ScrollView>
            <Header type={'switch'} />

            <List data={[
                {
                    icon: { name: 'toggle-switch-off-outline', type: 'material-community', size: 20, color: '#fff', backgroundColor: colors.primary },
                    title: 'Switch 1 disabled',
                    switch: {
                        value: true,
                        disabled: true
                    },
                    disabled: true
                },
                {
                    icon: { name: 'toggle-switch-off-outline', type: 'material-community', size: 20, color: '#fff', backgroundColor: colors.primary },
                    title: 'Switch 2',
                    switch: {
                        value: vars.switch2,
                        onValueChange: async (value) => {
                            setVars((prevState) => ({ ...prevState, switch2: value }));
                        }
                    }
                },
                {
                    title: 'Switch 3',
                    ...Platform.OS == 'android' && { description: 'With description on Android' },
                    ...Platform.OS == 'ios' && { subdescription: 'With subdescription on iOS' },
                    switch: {
                        value: vars.switch3,
                        onValueChange: async (value) => {
                            setVars((prevState) => ({ ...prevState, switch3: value }));
                        }
                    }
                },
                {
                    title: 'Switch 4 with loading',
                    loading: vars.loading,
                    switch: {
                        value: vars.switch4,
                        onValueChange: async (value) => {
                            setVars((prevState) => ({ ...prevState, loading: true }));
                            setTimeout(() => {
                                setVars((prevState) => ({ ...prevState, switch4: value, loading: false }));
                            }, 2000);
                        }
                    }
                }
            ]} header={'Switch added to list'} headerOnAndroid />

            <Item data={{
                icon: { name: 'toggle-switch-off-outline', type: 'material-community', size: 20, color: '#fff', backgroundColor: colors.notification },
                title: 'Switch',
                switch: {
                    value: vars.switch,
                    onValueChange: async (value) => {
                        setVars((prevState) => ({ ...prevState, switch: value }));
                    }
                }
            }} header={'Just a switch item'} headerOnAndroid />

            <Divider />
        </ScrollView>
    );
}

export default Switch;
