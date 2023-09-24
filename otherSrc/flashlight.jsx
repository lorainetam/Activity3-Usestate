import React, { useState } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import App from '/App.js';


const TogglePicturesApp = ({ showButtons }) => {
  const [showOnFlash, setshowOnFlash] = useState();
  const [component, setComponent] = useState(null);

  const toggleImage = () => {
    setshowOnFlash(!showOnFlash);

  };

  const MainMenu = () =>{
    setComponent('main');
    onPress=({showButtons})
     
    
  }
  return (
    <View style={styles.container}>
         {component === 'main' && <App/>}
         {!component && (
            <View>
            <View>
                <View style = {styles.buttonContaier}>
       <View style = {{marginLeft: -100, width: 150}}> 
          <Button title="Flashlight" disabled = 'true' />
        </View>
        <View style = {{marginLeft: 100, width: 150}}>  
          <Button title="Counter" disabled = 'true' />
        </View>
        </View>
        <View>
      <Image 
        source={
            showOnFlash
            ? { uri: 'https://androidflashlight.download/images/512x512-4.png'}
            : { uri: 'https://ecx.images-amazon.com/images/I/71nPx8f5hVL._SL1500_.jpg'}
        }
        style={styles.image}
      />
      </View>
      
      <Button 
      title={showOnFlash ? "ON" : "OFF"}
      color={showOnFlash ? "yellowgreen" : "pink"}
       onPress={toggleImage} />
      
      </View>
      <View style = {{marginBottom: -100}}>
      <Button title="Back" onPress={MainMenu} />
      </View>
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
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
   
  },
  buttonContaier:{
        
    margin: 10,
    width: 150,
    height: 15,
    marginTop: -333,
   flex:1,
   flexDirection: 'row',
   

  }
});

export default TogglePicturesApp;