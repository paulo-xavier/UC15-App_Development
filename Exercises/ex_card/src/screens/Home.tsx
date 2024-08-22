import { ScrollView, StyleSheet, View } from "react-native";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

import { SafeAreaView, Text } from "react-native";
import Card from "../components/Card";

const Home = () => {
  return (
    
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card url={"https://picsum.photos/id/237/200/301"}/>
        <Card url={"https://picsum.photos/id/237/200/302"}/>
        <Card url={"https://picsum.photos/id/237/200/303"}/>
        <Card url={"https://picsum.photos/id/237/200/304"}/>
        <Card url={"https://picsum.photos/id/237/200/305"}/>
      </ScrollView>
   
  );
};







export default Home;
