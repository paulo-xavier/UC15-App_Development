import { ScrollView, View } from "react-native";
import Info from "../components/Info";
import LoginInput from "../components/LoginInput";



const Login = () => {
  return (
    <ScrollView>
      <View>
        <Info />
        <LoginInput />
      </View>
    </ScrollView>
  );
};

export default Login;
