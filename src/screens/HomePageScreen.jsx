import { Text, View } from "react-native";
import { Button } from "react-native";

export default function HomePageScreen({ navigation }) {
  return (
    <View>
      <Text>"Eu sou a Craziest Página incial do APP!!!"</Text>
      <Text>Eu no cinema 😥😥😥</Text>
      <Button
        title="História de Xique-Xique, Baia"
        onPress={() => navigation.navigate("XiqueXiqueScreen")}
      />
      <Button
        title="Ana's Buttom"
        onPress={() => navigation.navigate("AnaScreen")}
      />
      <Button
        title="Crazy Produto :O"
        onPress={() => navigation.navigate("ProdutoScreen")}
      />
      <Button
        title="Sobre nois"
        onPress={() => navigation.navigate("SobreScreen")}
      />
    </View>
  );
}
