import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePageScreen from "../screens/HomePageScreen";
import AnaScreen from "./../screens/AnaScreen";
import SobreScreen from "./../screens/SobreScreen";
import ProdutoScreen from "../screens/ProdutoScreen";
import XiqueXiqueScreen from "./../screens/XiqueXiqueScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomePageScreen} />
        <Stack.Screen name="AnaScreen" component={AnaScreen} />
        <Stack.Screen name="ProdutoScreen" component={ProdutoScreen} />
        <Stack.Screen name="SobreScreen" component={SobreScreen} />
        <Stack.Screen name="XiqueXiqueScreen" component={XiqueXiqueScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
