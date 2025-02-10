import { StyleSheet,Text,View } from "react-native";    

const Country=()=>{
    return(
        <View style={styles.container}>
            {/* Lista de Paises*/}
            <Text>Pais</Text>
        </View>
    );
}


export default Country;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });