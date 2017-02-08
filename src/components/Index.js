import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  View
} from 'react-native';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Dimensions from 'Dimensions';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: [
        'ScarletWitch', 'PlayingWithFire', 'RollingWithTheWind', 'NotLikeThis', 'Bruyne17'
      ],
      userAvatar: [
        'user-avatar', 'user-avatar-2', 'user-avatar-3', 'user-avatar-4', 'user-avatar-5'
      ],
      imagePost: [
        '1001', '1002', '1003', '1004', '1005'
      ],
      likes: ['1241', '2489', '4233', '3992', '814'],
      refreshing : false
    };
  }
  onRefresh(){
    this.setState({refreshing: true});
  }
  render() {
    return (
      <View style={styles.index}>
        <Header/>
        <ScrollView>
          {Array.apply(null, Array(this.state.userName.length)).map(function(item, i) {
            return (<Content key={i} navigator={this.props.navigator} userName={this.state.userName[i]} userAvatar={this.state.userAvatar[i]} imagePost={this.state.imagePost[i]} likes={this.state.likes[i]}/>);
          }, this)}
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh.bind(this)}
            tintColor="#ff0000"
            title="Loading..."
            titleColor="#00ff00"
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"
          />
        </ScrollView>
        <Footer navigator={this.props.navigator}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  index: {
    width: windowWidth,
    height: windowHeight - 50,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  }
})

export default Index;
