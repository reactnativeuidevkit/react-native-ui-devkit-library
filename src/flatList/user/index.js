/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
* Copyright © 2023 React Native UI DevKit Library - All rights reserved
*/
import React, { useContext } from 'react';
import { FlatList, Platform, Image, View, Text } from 'react-native';

// React Native UI DevKit
import { useColors, Separator, Divider, Item, TitleFontSize, IosOldVersion, DescriptionFontSize, Icon } from 'react-native-ui-devkit';

import { GlobalContext } from '../../../libs/globalContext';

const FlatListUser = () => {
    useContext(GlobalContext);
    const colors = useColors();

    const data = [
        { _id: 1, avatar: Image.resolveAssetSource(require('../../../static/img/avatar-1.png')).uri, name: 'Ivor Fugler', username: 'fugler' },
        { _id: 2, avatar: Image.resolveAssetSource(require('../../../static/img/avatar-2.png')).uri, name: 'Dawn Hearing', username: 'hearing' },
        { _id: 3, avatar: Image.resolveAssetSource(require('../../../static/img/avatar-3.png')).uri, name: 'Udela Balle', username: 'balle' }
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
                                style={{ width: 40, height: 40, borderRadius: 20 }}
                            />
                    },
                    component:
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <View style={{ marginVertical: 8 }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginRight: 0 }}>
                                    <Text style={[{ flex: 1, color: colors.text, marginRight: 5 }, TitleFontSize()]} numberOfLines={1}>{item.name}</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginRight: 0 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={[{ color: colors.secondary }, DescriptionFontSize()]} numberOfLines={1}>@{item.username}</Text>
                                        {index == 0 && <Icon name={'verified'} type={'material'} size={13} color={colors.primary} style={{ marginLeft: (Platform.OS == 'ios' ? 2 : 5) }} />}
                                    </View>
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
                expanded />
        )
    }

    return (
        <FlatList
            data={data}
            renderItem={_render}
            ItemSeparatorComponent={(props) => { return <Separator props={props} start={Platform.OS == 'ios' ? (IosOldVersion() ? 65 : 50) : 70} /> }}
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

export default FlatListUser;
