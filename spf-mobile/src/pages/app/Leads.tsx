import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import axios from 'axios';
import { BASE_URL, paths } from '../../services/api/apiURL';
import { colors, getProfileStatusColor } from '../../constants/colors';
import { getLeadDetails } from '../../services/helpers/LeadServices';
import { images } from '../../constants/images';

type Lead = {
  name: string;
  email: string;
  loanAmount: number;
  phoneNumber: string;
};

const Leads = ({navigation}:any) => {
  const [leadsList, setLeadsList] = useState<Lead[]>([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${paths.getLeads}`)
      .then((res) => {
        if (res?.data?.statusCode === 200) {
          setLeadsList(res?.data?.data || []);
        }
        console.log("leads", res.data.data);
      })
      .catch((err) => {});
  }, []);

  const renderLeadItem = ({ item }: { item: any }) => (
   <TouchableWithoutFeedback onPress={()=>{ navigation.navigate('leaddetails', { data: item })}}>
     <View style={styles.card}>
      <Text style={styles.cardText}>{item.First_Name} {item.Last_Name}</Text>
      <Text style={styles.cardText}>{item.Email}</Text>
      <Text style={styles.cardText}>Loan Amount: ₹{item.Loan_Amount}</Text>
      <Text style={styles.cardText}>Phone Number: {item.Mobile_No}</Text>
    </View>
   </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.container}>
      <View style={{ padding: 20, justifyContent: 'space-between',elevation:3,backgroundColor:'#EFEFEF', flexDirection:'row',marginBottom:10 }}>
        <Text style={{ fontSize: 18, color: colors.pink, fontWeight:'bold'}}>LEADS</Text>
        <TouchableWithoutFeedback onPress={()=>{fetchLeads()}}>
        <Text style={{color:colors.gray}}>Refresh</Text>
        </TouchableWithoutFeedback>
      </View>
      {
        leadsList?.length === 0 ?
        <View style={{flex:0.9,justifyContent:'center',alignItems:'center', flexDirection:'row'}}>
            <Image source={images.ic_partner_info} style={{height:28, width:28, tintColor:'#BDBDBD', marginHorizontal:20}} />
            <Text style={{color:'#BDBDBD', fontSize:18}}>No Leads Available</Text>
          </View>
        :
        <FlatList
        data={leadsList}
        style={{paddingHorizontal:10}}
        renderItem={renderLeadItem}
        keyExtractor={(item, index) => index.toString()}
      />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Leads;
