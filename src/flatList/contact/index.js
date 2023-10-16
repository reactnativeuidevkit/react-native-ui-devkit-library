/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
* Copyright © 2023 React Native UI DevKit Library - All rights reserved
*/
import React, { useContext } from 'react';
import { FlatList, Platform, Image, Text } from 'react-native';

// React Native UI DevKit
import { useColors, Separator, Divider, Item, TitleFontSize, IosOldVersion } from 'react-native-ui-devkit';

import { GlobalContext } from '../../../libs/globalContext';

const FlatListContact = () => {
    useContext(GlobalContext);
    const colors = useColors();

    const data = [
        { _id: 1, avatar: Image.resolveAssetSource(require('../../../static/img/avatar-1.png')).uri, name: 'Ivor Fugler' },
        { _id: 2, avatar: Image.resolveAssetSource(require('../../../static/img/avatar-2.png')).uri, name: 'Dawn Hearing' },
        { _id: 3, avatar: Image.resolveAssetSource(require('../../../static/img/avatar-3.png')).uri, name: 'Udela Balle' }
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
                                style={{ width: 30, height: 30, borderRadius: 15 }}
                            />
                    },
                    component:
                        <Text style={[{ color: colors.text, marginLeft: 10 }, TitleFontSize()]} numberOfLines={1}>{item.name}</Text>,
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
            ItemSeparatorComponent={(props) => { return <Separator props={props} start={Platform.OS == 'ios' ? (IosOldVersion() ? 55 : 40) : 60} /> }}
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

export default FlatListContact;
