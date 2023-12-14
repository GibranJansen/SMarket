// src/pages/ProfileScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const [username, setUsername] = useState('Gibran Jansen'); // Exemplo: Você pode obter esses dados do estado global ou da autenticação
  const [email, setEmail] = useState('gibranzinho@gmail.com'); // Exemplo: Você pode obter esses dados do estado global ou da autenticação
  const [editing, setEditing] = useState(false);

  const handleEditProfile = () => {
    setEditing(!editing);
  };

  const handleSaveProfile = () => {
    // Adicione a lógica para salvar as alterações no perfil
    setEditing(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        placeholderTextColor="#000"
        value={username}
        onChangeText={(text) => setUsername(text)}
        editable={editing}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#000"
        value={email}
        onChangeText={(text) => setEmail(text)}
        editable={editing}
      />
      {editing ? (
        <TouchableOpacity style={styles.button} onPress={handleSaveProfile}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fcb238',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    height: 40,
    width: '100%',
    backgroundColor: '#fff',
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#000',
  },
  button: {
    backgroundColor: '#fb9540',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ProfileScreen;
