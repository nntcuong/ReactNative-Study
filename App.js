/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Linking,
} from 'react-native';

const App = () => {
  const [items, setItems] = useState([
    { key: 1, item: 'Item 1' },
    { key: 2, item: 'Item 2' },
    { key: 3, item: 'Item 3' },
    { key: 4, item: 'Item 4' },
    { key: 5, item: 'Item 5' },
    { key: 6, item: 'Item 6' },
    { key: 7, item: 'Item 7' },
    { key: 8, item: 'Item 8' },
    { key: 9, item: 'Item 9' },
    { key: 10, item: 'Item 10' },

  ])

  const [Refreshing, setRefeshing] = useState(false)
  onRefresh = () => {

    setRefeshing(true);
    setItems([...items, { key: 11, item: 'Item 4 ' }]);
    setRefeshing(false);
  }
  return (
    <ScrollView
      style={styles.body}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
        />
      }

    >
      {
        items.map((item) => {
          return (

            <View style={styles.item}>
              <Text style={styles.text}>{item.item}</Text>

            </View>
          )
        }

        )
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;