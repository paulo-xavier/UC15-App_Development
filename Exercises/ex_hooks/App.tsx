import { SafeAreaView } from "react-native";
import Login from "./src/screens/Login";


export default function App() {
  return (
    <SafeAreaView style={{
      display: "flex",
      alignItems: 'center',
      width: '100%',
      marginTop: 100
    }}>


      <Login />
    </SafeAreaView>
      
  )
}

