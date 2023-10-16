/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
* Copyright © 2023 React Native UI DevKit Library - All rights reserved
*/
import React, { useContext } from 'react';
import { FlatList, Platform, Image, View, Text } from 'react-native';

// React Native UI DevKit
import { useColors, Separator, Divider, Item, TitleFontSize, MediumFontSize, DescriptionFontSize, Icon, IosOldVersion } from 'react-native-ui-devkit';

import { GlobalContext } from '../../../libs/globalContext';

const FlatListChat = () => {
    useContext(GlobalContext);
    const colors = useColors();

    const data = [
        { _id: 1, avatar: Image.resolveAssetSource(require('../../../static/img/avatar-1.png')).uri, name: 'Ivor Fugler', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio nisi, commodo eu semper sed, elementum a risus. Nulla facilisi.', date: '22:37' },
        { _id: 2, avatar: Image.resolveAssetSource(require('../../../static/img/avatar-2.png')).uri, name: 'Dawn Hearing', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', date: '01:08' },
        { _id: 3, avatar: Image.resolveAssetSource(require('../../../static/img/avatar-3.png')).uri, name: 'Udela Balle', message: 'Integer odio nisi, commodo eu semper sed, elementum a risus. Nulla facilisi.', date: 'Yesterday' },
    ]

    const _render = ({ item, index, separators }) => {
        data[index].separators = separators;

        return (
            <Item
                key={item._id}
                data={{
                    icon: {
                        component:
                            <Image
                                source={{ uri: item.avatar }}
                                style={{ width: 60, height: 60, borderRadius: 30 }}
                            />
                    },
                    component:
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <View style={{ marginVertical: 8 }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginRight: 0 }}>
                                    <Text style={[{ flex: 1, color: colors.text, marginRight: 5 }, TitleFontSize()]} numberOfLines={1}>{item.name}</Text>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={[DescriptionFontSize(), { color: colors.secondary }]}>{item.date}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginRight: 0 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', height: 40 }}>
                                        <Text style={[{ color: colors.secondary }, MediumFontSize()]} numberOfLines={2}>{item.message}</Text>
                                    </View>
                                    {index == 0 && <Icon name={'pushpin'} type={'antdesign'} size={18} color={colors.tertiary} style={{ marginLeft: 5 }} />}
                                </View>
                            </View>
                        </View>,
                    chevron: false,
                    delay: false,
                    separator: {
                        data: [data[index - 1], item],
                        index
                    },
                    onPress: async () => { }
                }}
                index={index}
                count={data.length}
                marginTop={false}
                expanded />
        )
    }

    return (
        <FlatList
            data={data}
            renderItem={_render}
            ItemSeparatorComponent={(props) => { return <Separator props={props} start={Platform.OS == 'ios' ? (IosOldVersion() ? 85 : 70) : 90} end={-15} /> }}
            windowSize={21}
            contentInsetAdjustmentBehavior={'automatic'}
            keyboardDismissMode={'on-drag'}
            keyboardShouldPersistTaps={'handled'}
            removeClippedSubviews={true}
            initialNumToRender={40}
            maxToRenderPerBatch={80}
            updateCellsBatchingPeriod={10}
            ListFooterComponent={<Divider />}
        />
    );
}

export default FlatListChat;
