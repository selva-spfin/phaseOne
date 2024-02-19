import { colors } from '../../constants/colors';
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const LeadDetails = ({ route, navigation }) => {
  const { lead } = route.params;

  const renderAsset = (asset) => (
    <View key={asset.Leads_asset_id}>
      <Text>Asset Name: {asset.asset_name}</Text>
      <Text>Asset Path: {asset.asset_path}</Text>
      <Text>Asset Status: {asset.asset_status}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10,backgroundColor:colors.pink }}>
        <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: 'bold' }}>Lead Details</Text>
      </View>
      <ScrollView style={{ padding: 10 }}>
        <Text>First Name: {lead.First_Name}</Text>
        <Text>Last Name: {lead.Last_Name}</Text>
        <Text>Mobile No: {lead.Mobile_No}</Text>
        <Text>Company Name: {lead.Company_Name}</Text>
        {/* Add more details as needed */}
        <Text>Assets:</Text>
        {/* {lead.assets.map((asset) => renderAsset(asset))} */}
      </ScrollView>
    </View>
  );
};

export default LeadDetails;
