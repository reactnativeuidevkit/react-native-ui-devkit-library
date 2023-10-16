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

const Checkbox = () => {
    useContext(GlobalContext);
    const colors = useColors();
    const [vars, setVars] = useState({ check: true, check1: true, check2: true, check3: false, check4: false })

    return (
        <ScrollView>
            <Header type={'checkbox'} />

            <List data={[
                {
                    ...Platform.OS == 'ios' && { icon: { name: 'notifications', type: 'material', size: 22, color: '#fff', backgroundColor: colors.primary } },
                    title: 'Checkbox 1 disabled',
                    checkbox: vars.check1,
                    disabled: true,
                    onPress: async () => {
                        setVars((prevState) => ({ ...prevState, check1: !prevState.check1 }));
                    }
                },
                {
                    ...Platform.OS == 'ios' && { icon: { name: 'notifications', type: 'material', size: 22, color: '#fff', backgroundColor: colors.primary } },
                    title: 'Checkbox 2',
                    checkbox: vars.check2,
                    onPress: async () => {
                        setVars((prevState) => ({ ...prevState, check2: !prevState.check2 }));
                    }
                },
                {
                    title: 'Checkbox 3',
                    ...Platform.OS == 'android' && { description: 'With description on Android' },
                    ...Platform.OS == 'ios' && { subdescription: 'With subdescription on iOS' },
                    checkbox: vars.check3,
                    onPress: async () => {
                        setVars((prevState) => ({ ...prevState, check3: !prevState.check3 }));
                    }
                },
                {
                    title: 'Checkbox 4 with loading',
                    checkbox: vars.check4,
                    loading: vars.loading,
                    onPress: async () => {
                        setVars((prevState) => ({ ...prevState, loading: true }));
                        setTimeout(() => {
                            setVars((prevState) => ({ ...prevState, check4: !prevState.check4, loading: false }));
                        }, 2000);

                    }
                }
            ]} header={'Checkbox added to list'} footer={'This checkbox list has different rendering for each platform, Android and iOS.'} headerOnAndroid footerOnAndroid />

            <Item data={{
                ...Platform.OS == 'ios' && { icon: { name: 'notifications', type: 'material', size: 22, color: '#fff', backgroundColor: colors.notification } },
                title: 'Checkbox',
                checkbox: vars.check,
                onPress: async () => {
                    setVars((prevState) => ({ ...prevState, check: !prevState.check }));
                }
            }} header={'Just a checkbox item'} footer={'This checkbox item has different rendering for each platform, Android and iOS.'} headerOnAndroid footerOnAndroid />

            <Divider />
        </ScrollView>
    );
}

export default Checkbox;
