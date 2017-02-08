import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Alert,
  View,
  Modal,
  Linking,
  Picker,
  StatusBar,
  Image,
  Text,
  TextInput,
  ActivityIndicator,
  Animated,
  Easing
} from 'react-native';
import Dimensions from 'Dimensions';
import routes from './../routes';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

export default class LoginPractice extends Component {
  constructor(props){
    super(props);
    this.state = {
      isValidatedFail: false,
      modalVisible: false,
      username: '',
      password: '',
      modalVisible: false,
      language: '',
      checkLoader: false,
      bounce : new Animated.Value(0),
      overlay : new Animated.Value(0),
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(text, inputName){
    this.setState({
      [inputName]: text
    });
  }
  animate () {
    this.setState({
      modalVisible : !this.state.modalVisible
    });
    this.state.bounce.setValue(0),
    Animated.sequence([
      Animated.spring(this.state.bounce, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }),
      Animated.spring(this.state.overlay, {
        duration: 455,
        toValue: 50,
        friction: 1,
        easing: Easing.in(Easing.quad)
      })
    ]).start();
  }
  handleSubmit(){
    if (this.state.username === 'instagram' || this.state.password === '123456'){
      this.animate();
      setTimeout(() => {
        this.props.navigator.replace(routes.Index);
      },1000);
      this.setState({
        checkLoader : true
      });
    }
    else {
      this.setState({
        isValidatedFail : true
      })
    }
  }
  handleForgotPassword(){
    let url='https://google.com'
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log('Don\'t know how to open URI: ' + url);
      }
    });
  }
  renderError(){
    if (this.state.isValidatedFail) {
      return(
        <View>
          <Text style= {{color: 'red', fontSize: 10, textAlign: 'center'}}>
            Wrong username or password.
          </Text>
        </View>
      );
    }
  }
  renderSubmit(){
    if(this.state.checkLoader === false) {
      return(
        <Text style={{color: '#fff', textAlign: 'center'}}>
          Login
        </Text>
      );
    }else{
      return(
        <ActivityIndicator
          color='#f3ff63'
          style={[styles.centering, {height: 20}]}
          size="small"
        />
      );
    }
  }
  render(){
    const marginLeft = this.state.bounce.interpolate({
      inputRange: [0, 1],
      outputRange: [80, 160]
    })
    const marginRight = this.state.bounce.interpolate({
      inputRange: [0, 1],
      outputRange: [80, 160]
    })
    return(
      <View style= {styles.container}>
        {/*Logo block*/}
        <View style= {styles.logoBlock}>
          <Image
            style= {styles.logo}
            resizeMode="stretch"
            source= {require('./../assets/images/user-avatar-2.jpg')}
          />
        </View>
        {/*Input block*/}
        <View style= {styles.inputBlock}>
          <View style= {[
            styles.inputWrapper,
            {
              borderColor: !this.state.isValidatedFail ? '#ccc' : 'red'
            }
            ]}>
            <Image
              style= {[styles.icon, {width: 15}]}
              source= {require('./../assets/images/icon-user.png')}
            />
            <TextInput
              style = {styles.input}
              placeholder = "Username"
              placeholderTextColor="#ccc"
              underlineColorAndroid="rgba(0,0,0,0)"
              onChangeText ={(text) => {this.handleInputChange(text,'username')}}
            />
          </View>
          <View style= {[
            styles.inputWrapper,
            {
              borderColor: !this.state.isValidatedFail ? '#ccc' : 'red'
            }
            ]}>
            <Image
              style= {[styles.icon, {width: 15}]}
              source= {require('./../assets/images/icon-lock.png')}
            />
            <TextInput
              style = {styles.input}
              placeholder = "Password"
              placeholderTextColor="#ccc"
              underlineColorAndroid="rgba(0,0,0,0)"
              secureTextEntry={true}
              onChangeText ={(text) => {this.handleInputChange(text,'password')}}
            />
          </View>
          {this.renderError()}
        </View>
        {/*Submit*/}
        <View style= {styles.submitBlock}>
          <TouchableOpacity onPress={this.handleSubmit.bind(this)}>
            <Animated.View style={{borderRadius: 50, padding: 10, marginLeft, marginRight, backgroundColor: '#F15145'}}>
              <View>{this.renderSubmit()}</View>
            </Animated.View>
          </TouchableOpacity>
          {/*Forgot password*/}
          <View style= {styles.forgotPass}>
            <TouchableOpacity onPress={this.handleForgotPassword}>
              <Text style= {{color: '#005BAB', fontSize: 10}}>
                Forgot password ?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <Animated.View style={{width:50, height: 50, marginLeft: widthWindow/2 -40, transform: [{scale: this.state.overlay}], borderRadius : 50, backgroundColor: '#F15145', position : 'absolute', marginTop: 250}} />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: -8,
  },
  container: {
    width: widthWindow,
    height: heightWindow,
    backgroundColor: 'white',
  },
  logoBlock: {
    height: 120,
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingTop: 30
  },
  logo: {
    width: 80,
    height: 53
  },
  icon: {
    width: 20,
    height: 20,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10
  },
  inputBlock: {
    flex: 1,
    alignSelf: 'stretch',
  },
  inputWrapper: {
    flexDirection: 'row',
    height: 40,
    borderRadius: 40,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 70,
    marginRight: 70,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center'
  },
  input: {
    width: 160,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5
  },
  submitBlock: {
    flex: 2,
    alignSelf: 'stretch',
  },
  forgotPass: {
    marginTop: 15,
    marginLeft: 60,
    marginRight: 60,
    alignItems: 'flex-end'
  }
})
