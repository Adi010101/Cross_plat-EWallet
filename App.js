/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View,StyleSheet,Image} from 'react-native';

const App = () => {
  return(
    <View style = {styles.container}>
       <View style={styles.header}>
          <Image style ={styles.img}source={require('./logo.png')}/>
          <Text style={styles.text_header}>E-PITAKA</Text>
          <View style={styles.subheader}>
          <Text style={styles.text_subheader}>Available Balance</Text>
          <Text style={styles.text_balance}>₱100,000,000.00</Text>
        </View>
        <Text style={styles.text_user}>Hello, Althea</Text>
        <Image style ={styles.icon_user}source={require('./user.png')}/>
       </View>
       <View style = {styles.footer}>
        <View style = {styles.boxes}>
          <View style ={styles.button_box}>
          <Image style ={styles.icon_transfer}source={require('./transfer.png')}/>
          <Text style={styles.text_transfer}>Transfer</Text>
          </View>
          <View style ={styles.button_box}>
          <Image style ={styles.icon_pay}source={require('./pay.png')}/>
          <Text style={styles.text_pay}>Pay</Text>
          </View>
          <View style ={styles.button_box}>
          <Image style ={styles.icon_cashin}source={require('./cashin.png')}/>
          <Text style={styles.text_cashin}>Cash-in</Text>
          </View>
        </View>
        <View style={styles.transacbox}>
          <Text style={styles.text_transaction}>Recent Transactions</Text>
        </View>
        <View style={styles.transacbox2}>
          <Image style ={styles.icon_transfered}source={require('./transfer.png')}/>
          <Text style={styles.text_transacts}>Transfer Money</Text>
          <Text style={styles.text_date}>09/14/2022</Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.transacbox2}>
          <Image style ={styles.icon_paid}source={require('./pay.png')}/>
          <Text style={styles.text_transacts}>Water Bill</Text>
          <Text style={styles.text_date}>09/09/2022</Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.transacbox2}>
          <Image style ={styles.icon_cashedin}source={require('./cashin.png')}/>
          <Text style={styles.text_transacts}>Cash-in</Text>
          <Text style={styles.text_date}>09/14/2022</Text>
        </View>
       </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#645CAA'
  },
  header: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingHorizontal: 20,
      paddingBottom: 40,
      paddingTop: 10,
  },
  subheader: {
    justifyContent: 'center',
    paddingTop: 50,
},
  img: {
    width: 50,
    height: 50,
  },  
  icon_user:{
    width: 35,
    height: 35,
    marginTop: 12,
    marginLeft: 2,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 14,
  },
  text_user: {
    color: '#fff',
    fontSize: 15,
    paddingTop: 19,
    marginLeft: -46,
    justifyContent: 'flex-end',
  },
  text_subheader: {
    color: '#fff',
    fontSize: 20,
    paddingTop: 14,
    marginLeft: -40,
    justifyContent: 'center',
  },
  text_balance: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 5,
    marginLeft: -60,
    justifyContent: 'center',
  },
  footer: {
    flex: 3,
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  boxes:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button_box:{
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {width: 0,height: 2,},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  icon_transfer:{
    width: 60,
    height: 60,
    marginLeft: 20,
    marginTop: 12,
  },
  text_transfer:{
    fontSize: 12,
    textAlign:'center',
    color: "#181818",
    fontWeight: 'bold',
  },
  icon_pay:{
    width: 60,
    height: 60,
    marginLeft: 20,
    marginTop: 12,
  },
  text_pay:{
    fontSize: 12,
    textAlign:'center',
    color: "#181818",
    fontWeight: 'bold',
  },
  icon_cashin:{
    width: 60,
    height: 60,
    marginLeft: 20,
    marginTop: 12,
  },
  text_cashin:{
    fontSize: 12,
    textAlign:'center',
    color: "#181818",
    fontWeight: 'bold',
  },
  transacbox:{
    paddingTop: 30,
  },
  text_transaction:{
    fontWeight: 'bold',
    fontSize: 15,
    color: "#181818",
  },
  transacbox2:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon_transfered:{
    width: 60,
    height: 60,
    marginLeft: 2,
    marginTop: 12,
  },
  text_transacts:{
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 15,
    color: "#181818",
  },
  text_date:{
    marginTop: 30,
    marginLeft: 5,
  },
  divider: {
    borderTopWidth: 1,
    paddingTop: 10,
    paddingBottom: 8,
    marginTop: 10,
    borderColor: 'lightgray',
  },
  icon_paid:{
    width: 60,
    height: 60,
    marginLeft: -1,
    marginTop: 9,
  },
  icon_cashedin:{
    width: 60,
    height: 60,
    marginLeft: -1,
    marginTop: 9,
  }
})

export default App;
