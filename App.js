import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

// import {FIREBASE_KEY} from 'react-native-dotenv';

const App = () => {
  const [message, setMessage] = useState('');

  return (
    <View>
      <View style={{marginTop: 100}}>
        <Button
          title="Say Hello"
          color="#841584"
          onPress={() => {
            setTimeout(() => {
              setMessage('Hello Tester');
            }, Math.floor(Math.random() * 200));
          }}
        />
      </View>
      {message && (
        <Text style={styles.messageText} testID="printed-message">
          {message}
        </Text>
      )}
      {/* <Text style={styles.messageText} testID="printed-message">
        {FIREBASE_KEY}
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  messageText: {
    fontSize: 38,
    textAlign: 'center',
    marginTop: 50,
  },
});

export default App;
