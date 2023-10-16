/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
* Copyright © 2023 React Native UI DevKit Library - All rights reserved
*/
import React, { useContext, useState } from 'react';
import { Alert, FlatList } from 'react-native';

// React Native UI DevKit
import { Separator, Item, Divider } from 'react-native-ui-devkit';

import { GlobalContext } from '../../libs/globalContext';
import Header from '../../libs/header';

let lastOpened = null;
const Swipeable = () => {
  useContext(GlobalContext);

  const [data, setData] = useState([
    { _id: 1, title: 'Item 1' },
    { _id: 2, title: 'Item 2' },
    { _id: 3, title: 'Item 3' }
  ])

  const closeLastOpened = (index) => {
    lastOpened != index && data[lastOpened]?.ref?.closeActions();
    lastOpened = index;
  }

  const _render = ({ item, index, separators }) => {
    data[index].separators = separators;

    return (
      <Item
        ref={(ref) => item.ref = ref}
        key={item._id}
        data={{
          title: item.title,
          chevron: false,
          separator: {
            data: [data[index - 1], item],
            index
          },
          swipeable: {
            left: [
              {
                icon: { name: 'pin', type: 'material-community', color: '#fff', size: 22 },
                backgroundColor: '#FF9500',
                onPress: () => {
                  item.ref?.hideItem && item.ref?.hideItem(() => {
                    setTimeout(() => {
                      data.splice(index, 1);
                      setData([...data]);
                    }, 250);
                  }, 'left');
                }
              },
              {
                icon: { name: 'chatbubble-sharp', type: 'ionicons', color: '#fff', size: 22 },
                backgroundColor: '#007AFF',
                onPress: () => Alert.alert('Warning', 'Left Item 2'),
              },
            ],
            right: [
              {
                icon: { name: 'trash', type: 'ionicons', color: '#fff', size: 22 },
                backgroundColor: '#FF3B30',
                onPress: () => {
                  Alert.alert('Warning', 'Right Item 1', [
                    {
                      text: 'Cancel',
                      onPress: () => { }
                    },
                    {
                      text: 'Ok',
                      onPress: async () => {
                        item.ref?.hideItem && item.ref?.hideItem(() => {
                          setTimeout(() => {
                            data.splice(index, 1);
                            setData([...data]);
                          }, 250);
                        }, 'right');
                      }
                    }
                  ]);
                },

              },
              {
                icon: { name: 'bell-off', type: 'material-community', color: '#fff', size: 22 },
                backgroundColor: '#5856D6',
                onPress: () => { Alert.alert('Warning', 'Right Item 2'); }
              },
              {
                icon: { name: 'share-outline', type: 'ionicons', color: '#fff', size: 22 },
                backgroundColor: '#32ADE6',
                onPress: () => { Alert.alert('Warning', 'Right Item 3'); }
              }
            ],
            delay: true,
            onBegan: () => {
              closeLastOpened(index);
            }
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
      onScrollBeginDrag={() => { closeLastOpened(null); }}
      ListHeaderComponent={<Header type={'swipeable'} />}
      ListFooterComponent={<Divider />}
      windowSize={21}
      contentInsetAdjustmentBehavior={'automatic'}
      keyboardDismissMode={'on-drag'}
      keyboardShouldPersistTaps={'handled'}
      removeClippedSubviews={true}
      initialNumToRender={40}
      maxToRenderPerBatch={80}
      updateCellsBatchingPeriod={10}
    />
  );
}

export default Swipeable;
