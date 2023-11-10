import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Render() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Bài tập React Native</Text>
      <View>
        <Text onPress={() => navigation.navigate("Xoso")}>Bài Tập lab 1</Text>
        <Text onPress={() => navigation.navigate("TinhToan")}>Bài tập lab 2</Text>
        <Text onPress={() => navigation.navigate("List")}>Bài tập lab 3</Text>
      </View>
    </View>
  );
}