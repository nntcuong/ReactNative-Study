import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";


export default function App() {

  const [value, setvalue] = useState("");
  const [listNotes, setListNotes] = useState([]);

  function onChangeTXT(getEnterText) {
    setvalue(getEnterText)

  }
  function onPressBNT() {

    setListNotes(currentNotes => [...currentNotes, value])
  }
  console.log(listNotes);
  return (
    <View style={{
      padding: 60
    }}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={onChangeTXT} style={styles.inputVien} placeholder="Moi ban nhap" />
        <Button onPress={onPressBNT} color={'#000'} title="Click" />
      </View>

      <View style={styles.listContainer}>
        {
          listNotes.map((item, index) => <Text key={'item${index}'}>{item}</Text>)
        }

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    paddingBottom: 30,
    borderBottomWidth: 1,

  },
  inputVien: {
    borderWidth: 1,
    borderColor: 'Black',

    flex: 1,
  },

  listContainer: {
    paddingTop: 30,

  }
})