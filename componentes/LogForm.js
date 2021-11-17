import React, {useState}from 'react'
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios'

const LogForm = () =>{

	const  [users, setUsers] = useState([])

    const [value, setValue] = useState({
		userName: '',
		password: ''
	})
	const handleClick = async () =>{
		const formData = new FormData()
		formData.append('userName', value.userName)
		formData.append('password', value.password)

		const response = await axios.post(
			'http://192.168.0.21:80/Api/login.php',
			formData,
			{headers: {'Content-Type' : 'multipart/form-data'}}
		)
		
		setUsers(response.data)
		console.log(users.map)
	}
	
    return(
    <View  style={styles.containerLog}>
        <Text fontSize="xs" style={styles.titleLog}>Iniciar Sesión</Text>
        
        <TextInput style={styles.inputStyles} placeholder="Nombre de usuario" 
        onChangeText={(text) => setValue({ ...value, userName: text })}
        />
		<TextInput style={styles.inputStyles} placeholder="Contraseña"
        onChangeText={(text) => setValue({ ...value, password: text })}
        />
		<TouchableOpacity onPress={handleClick} ><Text style={styles.buttonLog} fontSize="xs" >Iniciar Sesión </Text></TouchableOpacity>
	
        
        
    </View>
    )
}
const styles = StyleSheet.create({
	containerLog: {
		flex: 1,
		paddingTop: 300,
		paddingHorizontal: 50
	},
	titleLog: {
		fontSize: 30,
		fontWeight: '900',
		color: '#fc868e',
		alignSelf: 'center',
		marginBottom: 50

	},
	inputStyles: {
		borderWidth: 1,
		height: 50,
		borderColor: '#fc757e',
		borderRadius: 50,
		marginBottom: 30,
		paddingHorizontal: 25
	},
	buttonLog:{
		marginTop: 10,
		textAlign: 'center',
		color: '#fff',
		borderRadius: 50,
		backgroundColor: '#fc757e',
		padding: 10,
		height: 40,
		marginHorizontal: 100
	  }
});

export default LogForm