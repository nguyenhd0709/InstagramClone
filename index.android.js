/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import routes from './src/routes';
// import RNFetchBlob from 'react-native-fetch-blob';
// import FileSystem from 'react-native-filesystem';
import RNFS from 'react-native-fs';

export default class AwesomeProject extends Component {
  componentDidMount() {
    // RNFetchBlob.fs.createFile(PATH_TO_WRITE, 'fooo', 'utf8').then(console.log('File Created'));
    // async function writeToFile() {
    //   const fileContents = 'This is a my content.';
    //   await FileSystem.writeToFile(PATH_TO_WRITE + '/my-file.txt', fileContents);
    //   console.log('file is written');
    // }
    // writeToFile();
    // var path = RNFS.DocumentDirectoryPath + '/test.txt';
    //
    // RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
    //   .then((success) => {
    //     console.log('FILE WRITTEN!');
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
    RNFS.mkdir('/data/data/com.awesomeproject/NOVA/logs')
    .then((success) => {
      console.log('success');
      console.log(RNFS.DocumentDirectoryPath + '/NOVA/logs');
    })
    .catch((error) => {
      console.log('error')
    });
    RNFS.writeFile('/data/data/com.awesomeproject/NOVA/logs/test.txt', 'Lorem ipsum dolor sit amet', 'utf8')
      .then((success) => {
        console.log('FILE WRITTEN!');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  renderScene (route, navigator) {
    return <route.component navigator={navigator} />
  }

  render() {
    return (
      <Navigator
        initialRoute={routes.Welcome}
        renderScene={(route, navigator) => this.renderScene(route, navigator)}
      />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
