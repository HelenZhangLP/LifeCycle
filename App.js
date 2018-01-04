
import React, {Component} from 'react'
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Button,
} from 'react-native'

const { width } = Dimensions.get('window')


class Son extends Component{
  constructor(props) {
    super(props)
    this.state = {
      times: 0,
      show: true
    }
  }

  componentWillMount() {
    console.log('son','componeWillMount');
  }

  componentDidMount() {
    console.log('son','componeDidMount')
  }

  shouldComponentUpdate() {
    console.log('son','shouldComponentUpdate')
    return true;
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
    let ptimes = ++this.props.times;
    if (ptimes % 2 !== 0) {
      this.setState({
        times: ptimes,
        show: false,
      })
      return false;
    }
    this.setState({
      times: ptimes,
      show: true
    })
  }

  render() {
    return (
      <View>
        <Text style={{
          width: width,
          height: 30,
          lineHeight: 30,
          fontWeight: '900',
          textAlign: 'center'
        }}>父组件被点击次数取模 2 余 0，时显示方框,非 0 隐藏</Text>
        {this.state.show && 
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: '#62ab00',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center'
            }}><Text>{this.state.times}</Text></View>}
      </View>
    )
  }
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      times: 0
    }
  }

  componentWillMount() {
    console.log('father','componeWillMount');
  }

  componentDidMount() {
    console.log('father','componeDidMount')
  }

  shouldComponentUpdate() {
    console.log('father','shouldComponentUpdate')
    return true;
  }

  _onPress() {
    let times = this.state.times + 1;
    this.setState({
      times: times
    })
  }

  render() {
    console.log('render');
    return (
    <View style={styles.container}>
      <Text
        style={styles.title}>生命周期
      </Text>
      <Button
        onPress={this._onPress.bind(this)}
        title="Click"
        color="#841584"
        style={styles.btn}
      />
      <Text>点击{this.state.times}次</Text>
      <Son times={this.state.times} />
    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  },
  title: {
    width: width,
    height: 30,
    textAlign: 'center',
    lineHeight: 30,
    justifyContent: 'center',
    backgroundColor: '#f00'
  },
  btn: {
    marginHorizontal: 10,
    width: width - 10,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#f94090'
  }
})