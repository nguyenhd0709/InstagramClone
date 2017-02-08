import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import Dimensions from 'Dimensions';

const widthWindow = Dimensions.get('window').width;

class Header extends Component {
  render(){
    return(
      <View style= {styles.container}>
        <TouchableOpacity style={styles.logoBlock}>
          <View style= {styles.centerItem}>
            <Image
              style = {styles.logo}
              source = {require('./../assets/images/logo-black.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBlock}>
          <View>
            <Image
              style = {styles.icon}
              source = {require('./../assets/images/header-icon.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: widthWindow,
    height: 50,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor : 'grey'
  },
  logoBlock: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 60
  },
  iconBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerItem: {
    alignItems: 'center'
  },
  logo: {
    width: 105,
    height: 30,
    marginTop: 5
  },
  icon: {
    width : 40,
    height: 40,
  }
})
export default Header;
