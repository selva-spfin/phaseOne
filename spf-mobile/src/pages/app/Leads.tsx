import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import axios from 'axios';
import { BASE_URL, paths } from '../../services/api/apiURL';

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
      <Text style={styles.title}>Leads</Text>
      <FlatList
        data={leadsList}
        renderItem={renderLeadItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
