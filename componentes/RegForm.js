import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios'
const RegForm = () => {
	const [value, setValue] = useState({
		name: '',
		secondName: '',
		userName:'',
		password:'',
		bloodType: ''    
	})
	const  [users, setUsers] = useState([])
	const handleClick = async () =>{
		const formData = new FormData()
		formData.append('name', value.name)
		formData.append('secondName', value.secondName)
		formData.append('bloodType', value.bloodType)
		formData.append('userName', value.userName)
		formData.append('password', value.password)
		const response = await axios.post(
			'http://192.168.0.21:80/Api/register.php',
			formData,
			{headers: {'Content-Type' : 'multipart/form-data'}}
		)
		alert("Bienvenida " +value.name )
	}
	const Submit = () => {
		return <Button onPress={fetchData} title="press">Press</Button>;
	};

	return (
		
		<View style={styles.containerReg}>
			
			<Text style={styles.titleReg} fontSize="xs">
				Registrarse
			</Text>
			<TextInput style={styles.inputStyles} placeholder="Nombre/s" onChangeText={(text) => setValue({...value, name: text})}/>
			<TextInput style={styles.inputStyles} placeholder="Apellidos/s" onChangeText={(text) => setValue({...value, secondName: text})}/>
			<TextInput style={styles.inputStyles} placeholder="Tipo de Sangre" onChangeText={(text) => setValue({...value, bloodType: text})}/>
			<TextInput style={styles.inputStyles} placeholder="Nombre de usuario" onChangeText={(text) => setValue({...value, userName: text})}/>
			<TextInput style={styles.inputStyles} placeholder="Contraseña" onChangeText={(text) => setValue({...value, password: text})}/>
			<TouchableOpacity onPress={handleClick}><Text  style={styles.buttonReg} fontSize="xs" >Registrarse</Text></TouchableOpacity>
			
		</View>
	);
};
const stylesReg = StyleSheet.create({
	containerReg: {
		flex: 1,
		paddingTop: 300,
		paddingHorizontal: 50
	},
	titleReg: {
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
	buttonReg:{
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

export default RegForm;
