import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#ffffff');
  const [randomBackgroundCircle, setRandomBackgroundCircle] =
    useState('#ffffff');
  const [randomBackgroundSquare, setRandomBackgroundSquare] =
    useState('#ffffff');
  const [randomBackgroundTrapezoid, setRandomBackgroundTrapezoid] =
    useState('#ffffff');
  const [randomBackgroundTriangle, setRandomBackgroundTriangle] =
    useState('#fff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    let colorShapes = '#';
    const shapes = [];

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }

    for (let i = 0; i <= 3; i++) {
      for (let i = 0; i < 6; i++) {
        colorShapes += hexRange[Math.floor(Math.random() * 16)];
      }
      shapes.push(colorShapes);
      colorShapes = '#';
    }
    console.log(shapes);

    setRandomBackground(color);
    setRandomBackgroundCircle(shapes[0]);
    setRandomBackgroundSquare(shapes[1]);
    setRandomBackgroundTrapezoid(shapes[2]);
    setRandomBackgroundTriangle(shapes[3]);
  };
  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <View style={styles.row}>
          <View
            style={[
              styles.square,
              {backgroundColor: randomBackgroundCircle},
            ]}></View>
          <View
            style={[
              styles.circle,
              {backgroundColor: randomBackgroundSquare},
            ]}></View>
        </View>

        <View style={styles.actionBtn}>
          <TouchableOpacity onPress={generateColor}>
            <Text style={styles.actionBtnTxt}>Press me</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <View
            style={[
              styles.trapezoid,
              {borderBlockColor: randomBackgroundTrapezoid},
            ]}></View>
          <View
            style={[
              styles.triangle,
              {borderBottomColor: randomBackgroundTriangle},
            ]}></View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#FFFF',
    textTransform: 'uppercase',
  },
  square: {
    paddingHorizontal: 70,
    paddingVertical: 70,
    // backgroundColor: '#F4A21A',
    marginRight: 40,
  },
  circle: {
    paddingHorizontal: 70,
    paddingVertical: 70,
    // backgroundColor: '#F4A21A',
    borderRadius: 100,
  },
  trapezoid: {
    borderBottomWidth: 100,
    // borderBlockColor: '#F4A21A',
    borderLeftWidth: 25,
    borderLeftColor: 'transparent',
    borderRightWidth: 25,
    borderRightColor: 'transparent',
    height: 0,
    width: 130,
    backgroundColor: 'transparent',
    marginRight: 40,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    // borderBottomColor: 'red',
  },
});

export default App;
