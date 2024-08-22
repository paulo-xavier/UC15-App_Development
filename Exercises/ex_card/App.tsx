import Home from "./src/screens/Home";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.home}>
      <Home />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  
  home: {
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

});



