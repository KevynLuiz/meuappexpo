import { View, Text, StyleSheet, Button } from "react-native-web";

export default function Cadastro({ navigation }) {
    return (
        <View>
            <Text>Página de Cadastro</Text>
            <Button
                title="Página Home"
                onPress={() =>
                    navigation.navigate('Home')
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alingnItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 200,
        resizeMode: 'strech',
    }
});