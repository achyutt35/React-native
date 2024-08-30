import React, {useState} from "react";
import {View, StyleSheet, Text, Vibration} from "react-native";
import { ProgressBar } from "react-native-paper";
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton'
import {spacing} from '../utils/Sizes'
import {colors} from '../utils/Colors'

export const Timer = ({focusSubject,min, clearSubject}) => {
  
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onEnd = (reset) =>{ 
  
    setIsStarted(false);
    setProgress(progress);
    reset(min);
    Vibration.vibrate();
    
  };

  return(
    <View style={styles.container}>

        <View style={styles.countDown}>
          <Countdown 
          minutes={min}
          isPaused={!isStarted} 
          onProgress={(progress)=>{setProgress(progress)}} 
          onEnd={onEnd} />
          
            <View style={{paddingTop: spacing.lg}}>
                <Text style={styles.title}>Focusing on :</Text>
                <Text style={styles.subTitle}> {focusSubject}</Text>
            </View>    
        </View>
        
        <View style={{ paddingTop: spacing.sm }}>
          <ProgressBar 
          progress={progress}
          color={colors.progressBar} 
          style={{ height: spacing.sm }}/>
        </View>
        
        
        <View style={styles.buttonWrapper}>
             {!isStarted && <RoundedButton title="Start" onPress={() =>{setIsStarted(true)}}/>}
              {isStarted && <RoundedButton title="Pause" onPress={()=>{setIsStarted(false)}}/>}
        </View>
        <View style={styles.clearSubjectWrapper}>
            <RoundedButton size={100} title="Back" onPress={clearSubject} />
      </View>
    </View>
  );
  // return ();
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  countDown:{
    flex:0.5,
    alignItems:'center',
    justifyContent:'center',
    // backgroundColor:'yellow'
  },
  buttonWrapper:{
    flex:0.3,
    flexDirection:'row',
    padding: 15,
    justifyContent:'center',
    alignContent:"center",
    // backgroundColor:'purple'
  },
    clearSubjectWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    color: colors.white,
    textAlign: 'center',
  },
});
