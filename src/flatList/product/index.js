/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
* Copyright © 2023 React Native UI DevKit Library - All rights reserved
*/
import React, { useContext } from 'react';
import { FlatList, Platform, Image, View, Text } from 'react-native';

// React Native UI DevKit
import { useColors, Separator, Divider, Item, TitleFontSize, DescriptionFontSize, IosOldVersion, BorderRadius } from 'react-native-ui-devkit'

import { GlobalContext } from '../../../libs/globalContext';

const FlatListProduct = () => {
    useContext(GlobalContext);
    const colors = useColors();

    const data = [
        { _id: 1, image: Image.resolveAssetSource(require('../../../static/img/product-1.png')).uri, title: 'Camera', status: 'NEW', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus.', price: '999.00' },
        { _id: 2, image: Image.resolveAssetSource(require('../../../static/img/product-2.png')).uri, title: 'Bag', status: 'USED', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus.', price: '380.00' },
        { _id: 3, image: Image.resolveAssetSource(require('../../../static/img/product-3.png')).uri, title: 'Sony PS5', status: 'NEW', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi maximus.', price: '499.00' }
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
                                source={{ uri: item.image }}
                                style={[{ width: 100, height: 100, margin: 10 }, BorderRadius()]}
                            />
                    },
                    component:
                        <View style={{ flex: 1, marginRight: 15 }}>
                            <View style={{ marginVertical: 8 }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginRight: 0 }}>
                                    <Text style={[{ flex: 1, color: colors.text, marginRight: 5 }, TitleFontSize()]} numberOfLines={1}>{item.title}</Text>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <View style={{ flexDirection: 'row', marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={[DescriptionFontSize(), { color: item.status == 'NEW' ? colors.primary : colors.notification }]}>{item.status}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginRight: 0 }}>
                                    <Text style={[{ color: colors.secondary, height: 35 }, DescriptionFontSize()]} numberOfLines={2}>{item.description}</Text>
                                </View>
                                <Text style={[{ color: colors.primary, fontWeight: '500' }, TitleFontSize(1.8)]} numberOfLines={2}>$ {item.price}</Text>
                            </View>
                        </View>,
                    padding: false,
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
            ItemSeparatorComponent={(props) => { return <Separator props={props} start={Platform.OS == 'ios' ? (IosOldVersion() ? 120 : 108) : 120} /> }}
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

export default FlatListProduct;
