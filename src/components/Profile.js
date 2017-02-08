import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  View
} from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Dimensions from 'Dimensions';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
var _ = require('lodash');
var IMAGE_URLS = _.flatten(_.times(3, () => {return ['http://localhost:8081/src/assets/images/post-image.jpg','http://localhost:8081/src/assets/images/post-image-2.jpg','http://localhost:8081/src/assets/images/post-image-3.jpg','http://localhost:8081/src/assets/images/post-image-4.jpg','http://localhost:8081/src/assets/images/post-image-5.jpg']}));
  var IMAGES_PER_ROW = 3;

class Profile extends Component{
  calculatedSize(){
     var size = windowWidth / IMAGES_PER_ROW
    return {width: size, height: size}
  }
  renderRow(images) {
    return images.map((uri,i) =>{
      return(
        <Image key={i} style={[styles.item, this.calculatedSize()]} source={{uri: uri}} />
      );
    })
  }
  renderImagesInGroupsOf(count) {
    return _.chunk(IMAGE_URLS, IMAGES_PER_ROW).map((imagesForRow,i) => {
      return (
        <View style={styles.row} key={i}>
          {this.renderRow(imagesForRow)}
        </View>
      )
    })
  }
  render(){
    return(
      <View>
        <Header />
        <ScrollView>
          <View style = {styles.container}>
            <View style = {styles.userbar}>
              <Image
                style = {styles.avatar}
                source = {{uri : 'http://localhost:8081/src/assets/images/user-avatar.jpg'}}
              />
              <View style = {{flexDirection: 'column'}}>
                <View style = {{flexDirection: 'row'}}>
                  <View style = {styles.follow}>
                    <Text style = {{fontWeight: 'bold'}}>1050</Text>
                    <Text>posts</Text>
                  </View>
                  <View style = {styles.follow}>
                    <Text style = {{fontWeight: 'bold'}}>670k</Text>
                    <Text>followers</Text>
                  </View>
                  <View style = {styles.follow}>
                    <Text style = {{fontWeight: 'bold'}}>209</Text>
                    <Text>following</Text>
                  </View>
                </View>
                <View style = {{flexDirection: 'row',marginTop: 10, justifyContent: 'space-around'}}>
                  <TouchableOpacity style={[styles.button,{flex: 5}]}>
                    <Text style = {{color: '#fff'}}>Follow</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.button,{flex: 1}]}>
                    <Text style = {{color: '#fff'}}>D</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style = {{flexDirection: 'column',marginTop: 10}}>
              <Text>Jeep</Text>
              <Text>The official Instagram account for the Jeep brand</Text>
              <Text>jeep.com</Text>
            </View>
            <View style = {styles.nav}>
              <TouchableOpacity style={{flex: 1}}>
                <Image
                  style = {styles.icon}
                  source = {require('./../assets/images/grid-icon.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 1}}>
                <Image
                  style = {styles.icon}
                  source = {require('./../assets/images/row-icon.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 1}}>
                <Image
                  style = {styles.icon}
                  source = {require('./../assets/images/marker-icon.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 1}}>
                <Image
                  style = {styles.icon}
                  source = {require('./../assets/images/profile-icon.png')}
                />
              </TouchableOpacity>
            </View>
            <View style = {styles.gallery}>
              <ScrollView>
                {this.renderImagesInGroupsOf(IMAGES_PER_ROW)}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
        <Footer navigator={this.props.navigator}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   backgroundColor : '#FFF',
   alignItems: 'center',
   paddingTop : 10
  },
  userbar: {
    flexDirection: 'row'
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 40
  },
  follow: {
    flexDirection: 'column',
    marginRight : 20
  },
  button: {
    backgroundColor: 'green',
    alignItems: 'center',
    height: 30,
    borderRadius: 5,
    padding: 5
  },
  gallery: {
    width: windowWidth,
    height: windowHeight -50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  item: {
    margin: 1,
    marginLeft: 0,
    marginTop: 0
  },
  nav: {
    marginTop: 20,
    width : windowWidth,
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

export default Profile;
