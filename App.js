/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
   AppRegistry, TextInput,Button
} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      text:'',
     todos: [] 
    };
  }
  submit(){
    let todo=this.state.text
    alert("Hello :" + this.state.text);
    this.setState({
      todos:this.state.todos.push(todo)
    })
  }
  render() {
    return (
      <View>
        <Text>Hassan Raza</Text>
        <TextInput placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({ text })}/>
        <Button 
  title="Click Here"
  color="#000000"
  onPress={this.submit.bind(this)}/>
  
  <Text>{this.state.todos}</Text>
      </View>
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           Hassan Raza
//           </Text>
//         <Text style={styles.instructions}>
//           Batch 4.2
//           </Text>
//         <Text style={styles.instructions}>
//           Roll no: 894
//         </Text>
//         <Text style={styles.instructions}>
//           Starting With React Native.
//         </Text>
//         <TextInput
//         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//         // onChangeText={(text) => this.setState({text})}
//         value={this.state.text}
//         name='text'
//       />
//       <Button
//   onPress={() =>
//     // console.log("hello",this.state.text)
     
//     this.setState({text})
  
//   }
//   title="Learn More"
//   color="#841584"
//   accessibilityLabel="Learn more about this purple button"
// />
//         {/* <Text style={styles.instructions}>
//           {instructions}
//         </Text> */}
//       </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
