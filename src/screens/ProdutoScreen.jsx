import { Text, View } from "react-native";

export default function ProdutoScreen({ navigation, route }) {
  const { nome } = route.params;
  return (
    <View>
      <Text>{nome}</Text>
      <Text>Produto revolucionário</Text>
      <Text>Este é um produto incrível</Text>
    </View>
  );
}
