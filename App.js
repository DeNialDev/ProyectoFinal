import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegForm from './componentes/RegForm';
import LogForm from './componentes/LogForm';
import StartHome from './componentes/StartHome';
import axios from 'axios';


function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Bienvenido a Opositive</Text>
			<TouchableOpacity onPress={() => navigation.navigate('Log')}>
				<Text style={styles.buttonLog}>Iniciar sesión</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Reg')}>
				<Text style={styles.buttonReg}>Registrarse</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Start')}>
				<Text style={styles.buttonReg}>Registrarse</Text>
			</TouchableOpacity>
		</View>
	);
}

function LoginScreen() {
	const [ users, setUsers ] = useState([]);

	const [ value, setValue ] = useState({
		userName: '',
		password: ''
	});
	const handleClick = async () => {
		const formData = new FormData();
		formData.append('userName', value.userName);
		formData.append('password', value.password);

		const response = await axios.post('http://192.168.0.21:80/Api/login.php', formData, {
			headers: { 'Content-Type': 'multipart/form-data' }
		});
    	let isUser = response.data.result
		console.log(typeof(isUser))
		
		
	};
	return (
		<View style={stylesLog.containerLog}>
			<Text fontSize="xs" style={stylesLog.titleLog}>
				Iniciar Sesión
			</Text>

			<TextInput
				style={stylesLog.inputStyles}
				placeholder="Nombre de usuario"
				onChangeText={(text) => setValue({ ...value, userName: text })}
			/>
			<TextInput
				style={stylesLog.inputStyles}
				placeholder="Contraseña"
				onChangeText={(text) => setValue({ ...value, password: text })}
			/>
			<TouchableOpacity onPress={handleClick}>
				<Text style={stylesLog.buttonLog} fontSize="xs">
					Iniciar Sesión
				</Text>
			</TouchableOpacity>
		</View>
	);
}
function RegScreen() {
	const [ value, setValue ] = useState({
		name: '',
		secondName: '',
		userName: '',
		password: '',
		bloodType: ''
	});
	const [ users, setUsers ] = useState([]);
	const handleClick = async () => {
		const formData = new FormData();
		formData.append('name', value.name);
		formData.append('secondName', value.secondName);
		formData.append('bloodType', value.bloodType);
		formData.append('userName', value.userName);
		formData.append('password', value.password);
		const response = await axios.post('http://192.168.0.21:80/Api/register.php', formData, {
			headers: { 'Content-Type': 'multipart/form-data' }
		});
		alert('Bienvenida ' + value.name);
	};
	const Submit = () => {
		return (
			<Button onPress={fetchData} title="press">
				Press
			</Button>
		);
	};
	return (
		<View style={stylesReg.containerReg}>
			<Text style={stylesReg.titleReg} fontSize="xs">
				Registrarse
			</Text>
			<TextInput
				style={stylesReg.inputStyles}
				placeholder="Nombre/s"
				onChangeText={(text) => setValue({ ...value, name: text })}
			/>
			<TextInput
				style={stylesReg.inputStyles}
				placeholder="Apellidos/s"
				onChangeText={(text) => setValue({ ...value, secondName: text })}
			/>
			<TextInput
				style={stylesReg.inputStyles}
				placeholder="Tipo de Sangre"
				onChangeText={(text) => setValue({ ...value, bloodType: text })}
			/>
			<TextInput
				style={stylesReg.inputStyles}
				placeholder="Nombre de usuario"
				onChangeText={(text) => setValue({ ...value, userName: text })}
			/>
			<TextInput
				style={stylesReg.inputStyles}
				placeholder="Contraseña"
				onChangeText={(text) => setValue({ ...value, password: text })}
			/>
			<TouchableOpacity onPress={handleClick}>
				<Text style={stylesReg.buttonReg} fontSize="xs">
					Registrarse
				</Text>
			</TouchableOpacity>
		</View>
	);
}
function StartHomeScreen(){
	return(
		
			<StartHome/>
	
	)
}

const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}
			>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Log" component={LoginScreen} />
				<Stack.Screen name="Reg" component={RegScreen} />
				<Stack.Screen name="Start" component={StartHomeScreen} />

			</Stack.Navigator>
			
		</NavigationContainer>
	);
}
const stylesLog = StyleSheet.create({
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
	buttonLog: {
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
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 400,
		paddingHorizontal: 50
	},
	title: {
		fontSize: 30,
		fontWeight: '900',
		color: '#fc868e',
		alignSelf: 'center',
		marginBottom: 50
	},
	buttonLog: {
		textAlign: 'center',
		color: '#fff',
		borderRadius: 50,
		backgroundColor: '#fc757e',
		padding: 10,
		height: 40,
		marginHorizontal: 100,
		marginTop: 50
	},
	buttonReg: {
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
