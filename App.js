import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.twocontainer}>
        <Text>The Cuong </Text>
      </View>
      <Text style ={{
        fontSize: 20,
        margin: 30,
        color: "yellow",
      }}> Xin chào aaa
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  twocontainer: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
