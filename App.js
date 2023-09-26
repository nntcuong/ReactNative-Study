import { View, Text, TextInput,Button, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={{
      padding: 60
    }}>
      <View>
        <TextInput placeholder="Moi ban nhap"/>
        <Button title="Click"/>
      </View>
    </View>
  )
}
