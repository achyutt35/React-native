import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { colors } from '../utils/Colors';
import {spacing ,fontSizes} from '../utils/Sizes'
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';


export const Focus = ({ addSub, addMin }) => {
  const [text, setText] = React.useState('');
  const [min, setMin] = React.useState();
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.text}>  Focus Time  </Text>
        
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          label="what would you like to focus on?"
          onChangeText={setText}
          style={styles.textInput}
        />
        
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          label="Enter Time"
          onChangeText={setMin}
          style={styles.textInput}
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={() => {addMin(min); addSub(text)}} />
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  button: {
    justifyContent: 'center',
    color: colors.Red
  },
  textInput: {
    flex: 1,
    marginRight: 10,
    // fontSize: '20'
  },
  inputContainer: {
    padding:10,
    paddingLeft: 10,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  heading: {
    flex:.2,
    padding:10,
    paddingLeft: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    fontWeight:'Bold',
  },
  text: {
    color: colors.white,
    fontSize:fontSizes.xxl
  },
});
