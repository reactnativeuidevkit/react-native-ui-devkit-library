/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
* Copyright © 2023 React Native UI DevKit Library - All rights reserved
*/
import React, { useContext, useRef, useState } from 'react';
import { KeyboardAvoidingView, ScrollView, TextInput, Platform } from 'react-native';

// React Native UI DevKit
import { useColors, List, Item, Divider, TitleFontSize } from 'react-native-ui-devkit';

import { GlobalContext } from '../../libs/globalContext';
import Header from '../../libs/header';

const TextInputComponent = (props) => {
    const { navigation } = props;
    const { global } = useContext(GlobalContext);
    const colors = useColors();

    const [data, setData] = useState({ username: '', password: '', hidePassword: true, firstName: '', lastName: '', phone: '', email: '', disabledEmail: 'support@reactnativeuidevkit.com', loadingUsername: 'reactnativeuidevkit' });
    const [timestamp, setTimestamp] = useState();

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const phoneRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();
    const disabledEmailRef = useRef();
    const loadingUsernameRef = useRef();

    return (
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null}>
            <ScrollView keyboardShouldPersistTaps={'handled'}>
                <Header type={'textInput'} />

                <List data={[
                    {
                        icon: { name: 'email', type: 'entypo', size: 20, color: colors.secondary, backgroundColor: 'transparent' },
                        component:
                            <TextInput
                                ref={usernameRef}
                                placeholder='Username'
                                placeholderTextColor={colors.secondary}
                                keyboardType='ascii-capable'
                                keyboardAppearance={global.dark ? 'dark' : 'default'}
                                returnKeyType='next'
                                value={data?.username}
                                onSubmitEditing={() => { passwordRef?.current?.focus && passwordRef.current.focus(); }}
                                onFocus={() => { setTimestamp(new Date()) }} // todo: It is necessary to use it together with the cleaner.visible parameter
                                onBlur={() => { setTimestamp(new Date()) }} // todo: It is necessary to use it together with the cleaner.visible parameter
                                onChangeText={(text) => {
                                    setData((prevState) => ({ ...prevState, username: text }));
                                }}
                                style={[{ color: colors.text }, TitleFontSize()]} />,
                        ...usernameRef?.current?.isFocused && usernameRef?.current?.isFocused() && {
                            cleaner: {
                                visible: (data?.username?.length >= 1),
                                onPress: () => {
                                    setData((prevState) => ({ ...prevState, username: '' }));
                                    usernameRef?.current?.focus && usernameRef.current.focus();
                                }
                            }
                        }
                    },
                    {
                        icon: { name: 'lock', type: 'entypo', size: 20, color: colors.secondary, backgroundColor: 'transparent' },
                        component:
                            <TextInput
                                ref={passwordRef}
                                placeholder='Password'
                                placeholderTextColor={colors.secondary}
                                keyboardType='ascii-capable'
                                keyboardAppearance={global.dark ? 'dark' : 'default'}
                                returnKeyType='done'
                                value={data?.password}
                                onFocus={() => { setTimestamp(new Date()) }} // todo: It is necessary to use it together with the cleaner.visible parameter
                                onBlur={() => { setTimestamp(new Date()) }} // todo: It is necessary to use it together with the cleaner.visible parameter
                                onChangeText={(text) => {
                                    setData((prevState) => ({ ...prevState, password: text }));
                                }}
                                secureTextEntry={data.hidePassword}
                                style={[{ color: colors.text }, TitleFontSize()]} />,
                        ...passwordRef?.current?.isFocused && passwordRef?.current?.isFocused() && {
                            cleaner: {
                                visible: (data?.password?.length >= 1),
                                onPress: () => {
                                    setData((prevState) => ({ ...prevState, password: '' }));
                                    passwordRef?.current?.focus && passwordRef.current.focus();
                                }
                            }
                        },
                        action: {
                            force: true,
                            icon: { name: data.hidePassword ? 'eye' : 'eye-off', type: 'material-community', size: 25, color: colors.secondary },
                            onPress: async () => { setData((prevState) => ({ ...prevState, hidePassword: !prevState.hidePassword })); }
                        }
                    }
                ]} header={'Login'} footer={'Enter your username and password to access'} headerOnAndroid footerOnAndroid />

                <List data={[
                    {
                        component:
                            <TextInput
                                ref={firstNameRef}
                                placeholder='First name'
                                placeholderTextColor={colors.secondary}
                                keyboardType='ascii-capable'
                                keyboardAppearance={global.dark ? 'dark' : 'default'}
                                returnKeyType='next'
                                value={data?.firstName}
                                onSubmitEditing={() => { lastNameRef?.current?.focus && lastNameRef.current.focus(); }}
                                onFocus={() => { setTimestamp(new Date()) }} // todo: It is necessary to use it together with the cleaner.visible parameter
                                onBlur={() => { setTimestamp(new Date()) }} // todo: It is necessary to use it together with the cleaner.visible parameter
                                onChangeText={(text) => {
                                    setData((prevState) => ({ ...prevState, firstName: text }));
                                }}
                                style={[{ color: colors.text }, TitleFontSize()]} />,
                        ...firstNameRef?.current?.isFocused && firstNameRef?.current?.isFocused() && {
                            cleaner: {
                                visible: (data?.firstName?.length >= 1),
                                onPress: () => {
                                    setData((prevState) => ({ ...prevState, firstName: '' }));
                                    firstNameRef?.current?.focus && firstNameRef.current.focus();
                                }
                            }
                        }
                    },
                    {
                        component:
                            <TextInput
                                ref={lastNameRef}
                                placeholder='Last name'
                                placeholderTextColor={colors.secondary}
                                keyboardType='ascii-capable'
                                keyboardAppearance={global.dark ? 'dark' : 'default'}
                                returnKeyType='next'
                                value={data?.name}
                                onSubmitEditing={() => { phoneRef?.current?.focus && phoneRef.current.focus(); }}
                                onFocus={() => { setTimestamp(new Date()) }} // todo: It is necessary to use it together with the cleaner.visible parameter
                                onBlur={() => { setTimestamp(new Date()) }} // todo: It is necessary to use it together with the cleaner.visible parameter
                                onChangeText={(text) => {
                                    setData((prevState) => ({ ...prevState, name: text }));
                                }}
                                style={[{ color: colors.text }, TitleFontSize()]} />,
                        ...lastNameRef?.current?.isFocused && lastNameRef?.current?.isFocused() && {
                            cleaner: {
                                visible: (data?.name?.length >= 1),
                                onPress: () => {
                                    setData((prevState) => ({ ...prevState, name: '' }));
                                    lastNameRef?.current?.focus && lastNameRef.current.focus();
                                }
                            }
                        }
                    },
                    {
                        component:
                            <TextInput
                                ref={phoneRef}
                                placeholder='Phone'
                                placeholderTextColor={colors.secondary}
                                keyboardType='number-pad'
                                keyboardAppearance={global.dark ? 'dark' : 'default'}
                                returnKeyType='done'
                                value={data?.phone}
                                onFocus={() => { setTimestamp(new Date()) }} // todo: It is necessary to use it together with the cleaner.visible parameter
                                onBlur={() => { setTimestamp(new Date()) }} // todo: It is necessary to use it together with the cleaner.visible parameter
                                onChangeText={(text) => {
                                    setData((prevState) => ({ ...prevState, phone: text }));
                                }}
                                style={[{ color: colors.text }, TitleFontSize()]} />,
                        ...phoneRef?.current?.isFocused && phoneRef?.current?.isFocused() && {
                            cleaner: {
                                visible: (data?.phone?.length >= 1),
                                onPress: () => {
                                    setData((prevState) => ({ ...prevState, phone: '' }));
                                    phoneRef?.current?.focus && phoneRef.current.focus();
                                }
                            }
                        }
                    }
                ]} header={'Enter your information'} footer={'We need your information to continue.'} headerOnAndroid footerOnAndroid />

                <Item data={{
                    icon: { name: 'email', type: 'entypo', size: 20, color: colors.secondary, backgroundColor: 'transparent' },
                    component:
                        <TextInput
                            ref={emailRef}
                            placeholder='E-mail'
                            placeholderTextColor={colors.secondary}
                            keyboardType='ascii-capable'
                            keyboardAppearance={global.dark ? 'dark' : 'default'}
                            returnKeyType='next'
                            value={data?.email}
                            onFocus={() => { setTimestamp(new Date()) }} // todo: It is necessary to use it together with the cleaner.visible parameter
                            onBlur={() => { setTimestamp(new Date()) }} // todo: It is necessary to use it together with the cleaner.visible parameter
                            onChangeText={(text) => {
                                setData((prevState) => ({ ...prevState, email: text }));
                            }}
                            style={[{ color: colors.text }, TitleFontSize()]} />,
                    ...emailRef?.current?.isFocused && emailRef?.current?.isFocused() && {
                        cleaner: {
                            visible: (data?.email?.length >= 1),
                            onPress: () => {
                                setData((prevState) => ({ ...prevState, email: '' }));
                                emailRef?.current?.focus && emailRef.current.focus();
                            }
                        }
                    },
                    success: {
                        visible: (data?.email?.length > 5)
                    },
                    alert: {
                        visible: (data?.email?.length >= 1) && (data?.email?.length <= 5)
                    }
                }} header={'With success and alert'} footer={'A simple example with success or alert feedback.'} headerOnAndroid footerOnAndroid />

                <Item data={{
                    component:
                        <TextInput
                            ref={disabledEmailRef}
                            placeholder='E-mail'
                            placeholderTextColor={colors.secondary}
                            keyboardType='ascii-capable'
                            keyboardAppearance={global.dark ? 'dark' : 'default'}
                            returnKeyType='next'
                            value={data?.disabledEmail}
                            onFocus={() => { setTimestamp(new Date()) }} // todo: It is necessary to use it together with the cleaner.visible parameter
                            onBlur={() => { setTimestamp(new Date()) }} // todo: It is necessary to use it together with the cleaner.visible parameter
                            onChangeText={(text) => {
                                setData((prevState) => ({ ...prevState, disabledEmail: text }));
                            }}
                            style={[{ color: colors.text }, TitleFontSize()]} />,
                    ...disabledEmailRef?.current?.isFocused && disabledEmailRef?.current?.isFocused() && {
                        cleaner: {
                            visible: (data?.disabledEmail?.length >= 1),
                            onPress: () => {
                                setData((prevState) => ({ ...prevState, disabledEmail: '' }));
                                disabledEmailRef?.current?.focus && disabledEmailRef.current.focus();
                            }
                        }
                    },
                    disabled: true,
                    success: {
                        visible: (data?.disabledEmail?.length > 5)
                    },
                    alert: {
                        visible: (data?.disabledEmail?.length >= 1) && (data?.disabledEmail?.length <= 5)
                    }
                }} header={'Disabled'} footer={'A simple disabled example.'} headerOnAndroid footerOnAndroid />

                <Item data={{
                    icon: { name: 'email', type: 'entypo', size: 20, color: colors.secondary, backgroundColor: 'transparent' },
                    component:
                        <TextInput
                            ref={loadingUsernameRef}
                            placeholder='Username'
                            placeholderTextColor={colors.secondary}
                            keyboardType='ascii-capable'
                            keyboardAppearance={global.dark ? 'dark' : 'default'}
                            returnKeyType='next'
                            value={data?.loadingUsername}
                            onFocus={() => { setTimestamp(new Date()) }} // todo: It is necessary to use it together with the cleaner.visible parameter
                            onBlur={() => { setTimestamp(new Date()) }} // todo: It is necessary to use it together with the cleaner.visible parameter
                            onChangeText={(text) => {
                                setData((prevState) => ({ ...prevState, loadingUsername: text }));
                            }}
                            style={[{ color: colors.text }, TitleFontSize()]} />,
                    ...loadingUsernameRef?.current?.isFocused && loadingUsernameRef?.current?.isFocused() && {
                        cleaner: {
                            visible: (data?.loadingUsername?.length >= 1),
                            onPress: () => {
                                setData((prevState) => ({ ...prevState, loadingUsername: '' }));
                                loadingUsernameRef?.current?.focus && loadingUsernameRef.current.focus();
                            }
                        }
                    },
                    loading: true,
                    success: {
                        visible: (data?.loadingUsername?.length > 5)
                    },
                    alert: {
                        visible: (data?.loadingUsername?.length >= 1) && (data?.loadingUsername?.length <= 5)
                    }
                }} header={'Loading...'} footer={'A simple loading example.'} headerOnAndroid footerOnAndroid />

                <Divider />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default TextInputComponent;
