import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View
} from 'react-native';
import ProgressBar from './ProgressBar';
import routes from './../routes';
import Dimensions from 'Dimensions';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;


class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
  }
  componentDidMount() {
    let timer = setInterval(
      () => {
        let progress = this.state.progress + 0.1;
        if(progress >= 1) {
          progress = 1;
          clearInterval(timer);
          if(progress === 1) {
            this.navigation();
          }
        }
        this.setState({progress: progress});
      }, 500
    );
  }
  render(){
    return(
      <View style={styles.container}>
        <View style= {styles.logoBlock}>
          <Image
            style= {styles.logo}
            source= {require('./../assets/images/logo-header.jpg')}
          />
        </View>
        <View style={styles.progress}>
            <ProgressBar
                fillStyle={{backgroundColor: '#ffd5c0'}}
                backgroundStyle={{backgroundColor: '#fff'}}
                style={styles.progress, {width: 200}}
                progress={this.state.progress}
            />
          </View>
        </View>
    );
  }
  navigation(){
    this.props.navigator.push(routes.LoginPractice);
  }
}

const styles = StyleSheet.create({
   container :{
    width: widthWindow,
    height: heightWindow,
    backgroundColor: '#fff',
    justifyContent : 'center'
  },
  logoBlock: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    width: 150,
    height: 120
  },
  progress :{
    alignItems : 'center'
  },
  button: {
    alignItems : 'center',
    width: 200,
    padding : 10,
    borderRadius : 30,
    backgroundColor : 'blue'
  }
})
export default Welcome;
