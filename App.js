import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import AddSubtractApp from './otherSrc/counter.jsx';
import TogglePicturesApp from './otherSrc/flashlight.jsx';

export default function App() {
  const [showButtons, setShowButtons] = useState();
  const [component, setComponent] = useState(null);

  const ButtonLight = () => {
    setShowButtons(false);
    setComponent('flashlight');
  };

  const ButtonCount = () => {
    setShowButtons(false);
    setComponent('counter');
  };

  const ShowButtons = () => {
    setComponent(null);
  };

  return (
    <View style={styles.container}>
      {component === 'flashlight' && <TogglePicturesApp showButtons={ShowButtons} />}
      {component === 'counter' && <AddSubtractApp showButtons={ShowButtons} />}
      {!component && (
        <>
          <View style={styles.buttonContaier}>
            <Button title="Flashlight" onPress={ButtonLight} />
          </View>
          <View style={styles.buttonContaier}>
            <Button title="Counter" onPress={ButtonCount} />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center',
    flexDirection: 'row',
    width: 300,
    height: 700,
    backgroundColor: 'gray',
  },

  buttonContaier: {
    marginHorizontal: 50,
    width: 150,
    height: 45,
  },
});
