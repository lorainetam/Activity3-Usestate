import React, { useState } from 'react';
import { View, Text, Button, Switch, StyleSheet } from 'react-native';
import App from '/App.js';

const AddSubtractApp = ({ showButtons }) => {
  const [value, setValue] = useState(0);
  
  const [component, setComponent] = useState(null);

  const subtractToggle = () => {
    setValue(value - 1);
  };

  const addToggle = () => {
    setValue(value + 1);
  };

  const MainMenu = () =>{
    setComponent('main');
    onPress=({showButtons})
    //setShowButtons(true);
    
  }

  return (
    <View style={styles.container}>
           {component === 'main' && <App/>}
           {!component && (
                     <View style = {{flex: 1, flexDirection: 'column'}}>
                              <View style = {styles.buttonContaier}>
       <View style = {{marginLeft: -75, width: 150}}> 
          <Button title="Flashlight" disabled = 'true' />
        </View>
        <View style = {{marginLeft: 150, width: 150}}>  
          <Button title="Counter" disabled = 'true' />
        </View>
        </View>
      <Text style={[styles.text,{}]}>  {value}</Text>
     
         <View style={styles.buttonsContainer}>

            
           <Button  title=" - 1" onPress={subtractToggle} />
           <Button  title=" + 1" onPress={addToggle} />
           </View>

           <Button title="Back" onPress={MainMenu} />
        
         </View>
        )}
       </View>
     );
   };
   
   const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
        
     },
     text: {
       fontSize: 50,
       marginTop: -20,
       marginLeft: 80
       
     },
    
     toggleLabel: {
       fontSize: 18,
     },
     buttonsContainer: {
        margin: 50,
        width: 200,
        height: 15,
        marginBottom: 150,
        flex: 1,
        flexDirection: 'center'

       
     },
     buttonContaier:{
        
        marginTop: -315,
        width: 200,
        height: 15,
        width: 150,
        flex:1,
        flexDirection: 'row', 

      }
    });

    export default AddSubtractApp;