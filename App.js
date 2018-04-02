import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.parent}>
        <StatusBar hidden={true} />
        <View style={styles.topBlock}>
          <View style={styles.leftCol}>
            <View style={[styles.cellOne, styles.base]}>
              <Text style={styles.textBase}> cellOne </Text>
            </View>
            <View style={[styles.base, styles.cellTwo]}>
              <Text style={styles.textBase}> cellTwo </Text>
            </View>
          </View>
          <View style={[styles.cellThree, styles.base]}>
            <Text style={[styles.textBase, {color:'white'}]}> cellThree </Text>
          </View>
        </View>
        <View style={styles.bottomBlock}>
          <View style={[styles.cellFour, styles.base]}>
            <Text style={[styles.textBase, {color:'white'}]}> cellFour </Text>
          </View>
          <View style={[styles.cellFive, styles.base]}>
            <Text style={styles.textBase}> cellFive </Text>
          </View>
          <View style={styles.bottomRight} >
            <View style={[styles.cellSix, styles.base]}>
              <Text style={[styles.textBase,{fontSize:18}]}> cellSix </Text>
            </View>
            <View style={[styles.cellSeven, styles.base]}>
              <Text style={[styles.textBase,{fontSize:18}]}> cellSeven </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'column',
    position: 'absolute',
    top: 5,
    left: 5,
    right: 5,
    bottom: 5
  },
  textBase: {
    fontSize: 24
  },
  base: {
    borderColor: "#000000",
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  topBlock: {
    flexDirection: "row",
    flex: 5
  },
  leftCol: {
    flex: 2
  },
  bottomBlock: {
    flex:2,
    flexDirection: "row"
  },
  bottomRight: {
    flexDirection: 'column',
    flex: 2
  },
  cellOne : {
    flex: 1,
    borderBottomWidth: 15
  },
  cellTwo: {
    flex:3
  },
  cellThree: {
    backgroundColor: "#FF0000",
    flex: 5
  },
  cellFour: {
    flex: 2,
    backgroundColor: "#0000FF"
  },
  cellFive: {
    flex: 6
  },
  cellSix: {
    flex: 1
  },
  cellSeven: {
    flex: 1,
    backgroundColor: "#FFFF00"
  }
});
