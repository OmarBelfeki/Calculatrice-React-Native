import { Text, View } from "react-native";
import {Stack} from "expo-router"
import Calculator from "../Components/Calculator"

export default function Index() {
  return (
    <>
      <Stack.Screen options={{title: "Calculator"}} />
      <Calculator />
    </>
  );
}
