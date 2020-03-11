import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'

const store = createStore(reducer)

const action = type => store.dispatch({type})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

export default function render() {
return (
  <View>
       <Text>Open up App.js to start working on your app!</Text>
       <View style={styles.fixToText}>
          <Button
            title="Left button"
            onPress={() => console.log("Button pressed")}
          />
        </View>
  </View>
  )
}


render()
store.subscribe(render)


