import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, TextInput, Button } from 'react-native'

class Login extends Component {
  
  constructor(props){
    super(props)
    this.state={
    }
  }

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.navbar}>
          <View style={styles.logo}>
            <Image style={styles.logoImg} source={require("../img/nav-logo-1.png")} resizeMode="contain" />
          </View>
          <TouchableOpacity style={styles.menuBtn} onPress={() => {
            this.props.navigation.openDrawer();
          }}>
            <Image style={styles.menuIcon} source={require("../img/icon/menu.png")} resizeMode="contain" />
          </TouchableOpacity>
        </View>
        <View style={styles.loginContainer}>
          <Text style={[styles.title, { color: '#E88E20' }]}>ĐĂNG NHẬP TÀI KHOẢN</Text>
          <View style={styles.formContainer}>
            <View style={styles.formEle}>
                <Text style={styles.label}>Tài khoản:</Text>
                <TextInput style={styles.input} onChangeText={
                    (text) => this.setState({name: text})
                } 
                placeholder="Nhập tài khoản của bạn"/>
            </View>
            <View style={styles.formEle}>
                <Text style={styles.label}>Mật khẩu:</Text>
                <TextInput style={styles.input} onChangeText={
                    (text) => this.setState({pass: text})
                } 
                placeholder="Nhập mật khẩu"/>
            </View>
            <View style={styles.grpBtn}>
                <View style={styles.half}>
                  <TouchableOpacity style={[styles.btn,styles.signUpBtn]} onPress={()=>{this.props.navigation.navigate('Home', null);}}>
                    <Text style={[styles.btnText,styles.green]}>ĐĂNG NHẬP</Text>
                  </TouchableOpacity>
                </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    fontFamily: 'Open Sans',
    margin: 0,
    padding: 0,
    position: 'relative',
  },
  navbar: {
    height: 60,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  logo: {
    flex: 1,
    position: 'absolute',
    left: 5,
    top: 5,
    width: 100,
    height: '92%',
  },
  logoImg: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
  },
  menuBtn: {
    position: 'absolute',
    top: 10,
    right: 5,
    width: 40,
    height: 40,
    padding: 10,
    backgroundColor: '#E88E20',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  menuIcon: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
  },
  scroll: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text:{
    fontSize: 16,
    marginBottom: 5,
  },
  loginContainer:{
    width: '100%',
    height: 380,
    paddingHorizontal: 10,
  },
  formContainer: {
    flex: 1,
    height: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 15,
  },
  formEle:{
    flex: 1,
    margin: 12,
    marginBottom: 20,
  },
  label: {
    marginBottom: 10,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  input: {
    paddingLeft: 20,
    borderRadius: 10,
    borderRadius: 50,
    backgroundColor: '#f1f1f1',
  },
  btn:{
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 25,
    marginTop: 10,
  },
  btnText:{
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  grpBtn:{
    flex:1,
    flexDirection: 'row',
    marginTop: 20,
  },
  half:{
    flex:1,
    paddingHorizontal: 20
  },
  signUpBtn:{
    borderColor: 'green',
  },
  cancelBtn:{
    borderColor: '#ccc',
  },
  green: {
    color: 'green',
  },
});

export default Login
