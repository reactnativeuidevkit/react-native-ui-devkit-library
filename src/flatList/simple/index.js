/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
* Copyright © 2023 React Native UI DevKit Library - All rights reserved
*/
import React, { useContext } from 'react';
import { FlatList, Platform } from 'react-native';

// React Native UI DevKit
import { useColors, Separator, Divider, Item } from 'react-native-ui-devkit';

import { GlobalContext } from '../../../libs/globalContext';

const FlatListSimple = () => {
    useContext(GlobalContext);
    const colors = useColors();

    const data = [
        { _id: 1, title: 'Item 1' },
        { _id: 2, title: 'Item 2' },
        { _id: 3, title: 'Item 3' }
    ]

    const _render = ({ item, index, separators }) => {
        data[index].separators = separators;

        return (
            <Item
                key={item._id}
                data={{
                    title: item.title,
                    separator: {
                        data: [data[index - 1], item],
                        index
                    },
                    onPress: async () => { }
                }}
                index={index}
                count={data.length} />
        )
    }

    return (
        <FlatList
            data={data}
            renderItem={_render}
            ItemSeparatorComponent={(props) => { return <Separator props={props} start={Platform.OS == 'ios' ? 15 : 20} /> }}
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

export default FlatListSimple;
