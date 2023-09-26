import { View, Text, TextInput,Button, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={{
      padding: 60
    }}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputVien} placeholder="Moi ban nhap"/>
        <Button color={'#000'} title="Click"/>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  inputContainer : {
    flexDirection: 'row'

  },
  inputVien : {
    borderWidth : 1,
    borderColor :'Black',

    flex : 1 ,
  },
})