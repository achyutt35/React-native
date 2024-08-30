import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/Colors';
import { Focus } from './src/features/focus';
import { Timer} from './src/features/Timer'

export default function App() {
  const [currentSubject, setCurrentSubject] = React.useState(null);
  const [min,setMin] = React.useState();
  const [clear, setClear] = React.useState('text');
  return (
    <SafeAreaView style={styles.container}>
      { !min ? (
          <Focus addSub = {setCurrentSubject} addMin={setMin}> </Focus>
        ) : clear || min? 
          (
          <Timer
            focusSubject = {currentSubject}
            min = {min}
            onTimerEnd = {() =>{}}
            clearSubject={() => {setClear(null),setMin(null),setCurrentSubject(null)}}
          />
          ): <Focus addSub = {setCurrentSubject} addMin={setMin}> </Focus>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    color:colors.white,
    padding: "50"
  },
  text: {
    margin:20,
    fontSize:'24',
    color: colors.white,
  },
});
