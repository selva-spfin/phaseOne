import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Pdf from 'react-native-pdf';

const LeadDetails = ({ route }) => {
  const { lead } = route.params;
  // console.log("leads", lead)
  const assetArray = JSON.parse(lead.assets);
  console.log("assetArray", assetArray)


  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Lead Details:</Text>
        <Text>Name: {lead.First_Name} {lead.Last_Name}</Text>
        <Text>Email: {lead.Email}</Text>
        <Text>Mobile No: {lead.Mobile_No}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Assets:</Text>
        {lead.assets.map((asset, index) => (
          <View key={index} style={styles.assetContainer}>
            <Text>{asset.asset_name}</Text>
            <Pdf
              source={{ uri: asset.asset_path }}
              style={styles.pdf}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  assetContainer: {
    marginBottom: 10,
  },
  pdf: {
    width: '100%',
    height: 200,
  },
});

export default LeadDetails;
