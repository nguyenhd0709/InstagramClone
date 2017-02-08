import React,{ Component, PropTypes } from 'react';
import {
  StyleSheet,
  Animated,
  Easing,
  View
} from 'react-native';

class ProgressBar extends Component {
  static defaultProps = {
    style: styles,
    easing: Easing.inOut(Easing.ease),
    easingDuration: 500
  }

  constructor(props){
    super(props);
    this.state = {
      progress: new Animated.Value(this.props.initialProgress || 0)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.progress >= 0 && this.props.progress != prevProps.progress) {
      this.update();
    }
  }

  render(){
    let fillWidth = this.state.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, this.props.style.width],
    });
    return(
      <View style={[styles.background, this.props.backgroundStyle, this.props.style]}>
        <Animated.View style={[styles.fill, this.props.fillStyle, {width: fillWidth}]}/>
      </View>
    );
  }
  update() {
    Animated.timing(this.state.progress, {
      easing: this.props.easing,
      duration: this.props.easingDuration,
      toValue: this.props.progress
    }).start();
  }
};

const styles = StyleSheet.create({
  background: {
    backgroundColor : '#fff',
    height: 3
  },
  fill: {
    backgroundColor: '#ffd5c0',
    height: 2
  }
})

ProgressBar.propTypes = {
  style: PropTypes.object
}

export default ProgressBar;
