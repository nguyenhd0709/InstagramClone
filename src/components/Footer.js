import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import routes from './../routes';
import Dimensions from 'Dimensions';

const widthWindow = Dimensions.get('window').width;

class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeFooter : false
    }
  }
  navigationHome(){
    this.props.navigator.pop(routes.Index);
  }
  navigationProfile(){
    this.props.navigator.push(routes.Profile);
    this.setState({
      activeFooter: true
    })
    alert(this.state.activeFooter);
  }
  render(){
    var iconHome = !this.state.active ? require('./../assets/images/home-black-icon.png') : require('./../assets/images/home-icon.png');
    var iconProfile = !this.state.active ? require('./../assets/images/user-icon.png') : require('./../assets/images/user-black-icon.png');
    return(
      <View style={styles.container}>
        <TouchableOpacity style={{flex: 1}} onPress={this.navigationHome.bind(this)}>
          <Image
            style = {styles.icon}
            source = {iconHome}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}}>
          <Image
            style = {styles.icon}
            source = {require('./../assets/images/search-icon.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}}>
          <Image
            style = {styles.icon}
            source = {require('./../assets/images/gallery-icon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}}>
          <Image
            style = {styles.icon}
            source = {require('./../assets/images/heart-footer-icon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}} onPress={this.navigationProfile.bind(this)}>
          <Image
            style = {styles.icon }
            source = {iconProfile}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width : widthWindow,
    height : 50,
    backgroundColor : '#FFF',
    borderTopWidth: 0.5,
    borderTopColor : 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 10
  }
})

export default Footer;
