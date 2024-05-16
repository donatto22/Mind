import { StyleSheet, Image, View, Text, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

import CustomButton from '../../components/CustomButton'

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center', 
    minHeight: '100%',
    width: '100%',
    gap: 50
  },

  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%'
  },

  textInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 30,
    padding: 10,
    width: '100%',
    marginBottom: 20
  },

  registerButton: {
    borderRadius: 30,
    backgroundColor: '#9589ED',
    padding: 10,
  },
  
  buttonColor: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },

  link: {
    color: '#5E4ECE'
  },

  logo: {
    width: 50,
    height: 150,
    resizeMode: 'contain'
  }
})

export default function Login() {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={ styles.view }>
          <LinearGradient colors={['#9589ed', '#F1F4FD']} style={styles.gradient}/>
          <Image style={styles.logo} source={ require('../../assets/images/mindlogo.png') } />
          
          <View style={{ width: '70%'}}>
            <View>
              <TextInput style={styles.textInput} placeholder='Ingresa tu alias' />
              <TextInput style={styles.textInput} placeholder='Ingresa tu email' />
              <TextInput style={styles.textInput} placeholder='Contraseña' />
            </View>

            <View style={{ gap: 10 }}>
              <CustomButton title="Ingresar" textStyles={styles.buttonColor}
              containerStyles={styles.registerButton} />
              <Text>Aún no tienes una cuenta? <Link href="/register" style={styles.link}>Registrate aquí</Link></Text>
              <Link href='/forgotpassword' style={styles.link}>Olvidé mi contraseña</Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}