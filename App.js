import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput,Button} from 'react-native';

export default function App() {
  const livres = [
    {titre: "Harry Potter à l'école des sorciers"},
    {titre: "Harry Potter et la chambres des secrets"},
    {titre: "Harry Potter et le prisonnier d'Azkaban"},
    {titre: "Harry Potter et la coupe de feu"}
  ]
  const [filterlivres, setfilterlivres] = useState(livres)
  const searchBar = () => {
    setfilterlivres(livres.filter(res => res.titre.toLowerCase().includes(searchBar.toLowerCase())));
  }
  return (
    <View style={styles.container}>
      <Text>Bibliothèque Mobile</Text>
      <Text>Entrez le nom de l'oeuvre rechercher:</Text>

      <View>
        <TextInput type="text" name="searchBar" id="searchBar"/>
        <Button title="Recherche" onPress={searchBar}/>
      </View>
      <Text>{livres}</Text>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'red',
    margin: 5
  },
});
