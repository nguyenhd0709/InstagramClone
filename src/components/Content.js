import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  Navigator,
  View
} from 'react-native';
import routes from './../routes';
import Dimensions from 'Dimensions';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      likes : Number(this.props.likes),
      active : false,
      comment: false,
      commentArr : ['I am going to the mountains', 'where the alternating universe of autumn', 'descends over you at an erotic squat', 'Nothing burns quite like The System'],
      commentList : '',
      modalVisible : false
    };
  }
  navigation(){
    this.props.navigator.push(routes.Profile);
  }
  likes(){
    this.setState({
      likes : this.state.likes + 1,
      active : !this.state.active
    })
    if (this.state.active === true){
      this.setState({
        likes : this.state.likes - 1,
        active : !this.state.active
      })
    }
  }
  toggleComment(){
    this.setState({
      comment: !this.state.comment
    });
  }
  handleTextInput(text){
    this.setState({
      commentList : text
    });
  }
  handleSubmit(){
    this.setState({
      commentArr: [...this.state.commentArr, this.state.commentList]
    });
    this.toggleComment();
  }
  handleModal(){
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  }
  renderInput(){
    if (this.state.comment) {
      return(
        <View style={{flexDirection : 'row', justifyContent :'space-around'}}>
          <TextInput
            style = {{flex : 6}}
            placeholder = "Comment ... "
            placeholderTextColor="#ccc"
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText ={(text) => {this.handleTextInput(text)}}
          />
          <TouchableOpacity
            style={{marginTop: 7, height: 30, padding:5, backgroundColor:'pink',alignItems: 'center', flex: 1}}
            onPress = {this.handleSubmit.bind(this)}
          >
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  }
  renderComment(){
    const comment = this.state.commentArr.map((value, i) =>
      <Text key={i}>
        {value}
      </Text>
    );
    return(
      <View>{comment}</View>
    );
  }
  render(){
    var userAvatar = `http://localhost:8081/src/assets/images/${this.props.userAvatar}.jpg`;
    var imagePost = `http://localhost:8081/src/assets/images/${this.props.imagePost}.gif`;
    var icon = !this.state.active ? require('./../assets/images/heart-icon.png') : require('./../assets/images/heart-active.png');
    return(
      <View>
        <View style= {styles.userBar}>
          <TouchableOpacity style= {{flexDirection: 'row', alignItems: 'center',flex: 6}} onPress = {this.navigation.bind(this)}>
            <Image
              style = {styles.avatar}
              source = {{uri : userAvatar}}
            />
            <Text>
              {this.props.userName}
            </Text>
          </TouchableOpacity>
          <Modal
            animationType = {"fade"}
            transparent = {false}
            visible = {this.state.modalVisible}
            onRequestClose={this.handleModal.bind(this)}
          >
            <View style={{
              backgroundColor : 'rgba(0,0,0,.8)',
              width : windowWidth,
              height : windowHeight,
              alignItems:'center',
              justifyContent: 'center'
            }}>
              <View style={{backgroundColor : '#fff', padding: 10}}>
                <Text >Report user</Text>
                <Text >Copy url link for share</Text>
              </View>
            </View>
          </Modal>
          <TouchableOpacity style={{flex:1}} onPress={this.handleModal.bind(this)}>
            <Image
              style = {styles.icon}
              source = {require('./../assets/images/more-icon.png')}
            />
        </TouchableOpacity>
      </View>
      <View>
        <Image style= {styles.post}
              source = {{uri : imagePost}}
              resizeMode={Image.resizeMode.stretch}
        />
      </View>
      <View style= {styles.iconBar}>
        <TouchableOpacity onPress={this.likes.bind(this)}>
          <Image
            style = {styles.icon}
            source = {icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.toggleComment.bind(this)}>
          <Image
            style = {styles.icon}
            source = {require('./../assets/images/comment-icon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style = {[styles.icon, {marginTop: -5}]}
            source = {require('./../assets/images/forward-icon.png')}
          />
        </TouchableOpacity>
      </View>
      <View style = {styles.commentBlock}>
        <View style = {styles.like}>
          <Image
            style= {[styles.icon, {width: 20, height: 20, marginLeft: 10}]}
            source = {require('./../assets/images/heart-icon-black.png')}
          />
          <Text>
            {this.state.likes}
          </Text>
        </View>
        <View style = {styles.comment}>
          {this.renderComment()}
          {this.renderInput()}
        </View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  userBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    height: 50
  },
  avatar: {
    width : 30,
    height : 30,
    borderRadius : 40,
    marginRight : 8
  },
  post: {
    width: windowWidth,
    height: windowWidth
  },
  iconBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 0.5,
    borderBottomColor : 'grey',
    marginRight: 10,
    marginLeft: 10
  },
  icon: {
    width : 30,
    height : 30,
    marginRight: 5
  },
  commentBlock: {
    flexDirection: 'column',
    marginTop : 10
  },
  like: {
    flexDirection: 'row'
  },
  comment: {
    flexDirection: 'column',
    marginLeft: 10,
  }
})

export default Content;
