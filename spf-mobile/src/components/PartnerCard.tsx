import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import { images } from '../constants/images';
import { colors, getProfileStatusColor } from '../constants/colors';
interface PartnerCardProps {
  user: {
    User_Id: number;
    First_Name: string;
    Last_Name: string;
    Email_Id: string;
    Mobile_Number: string;
    City: string;
    PAN_Number: string;
    Address: string;
    Profile_Status_Id: number
  };
  changeStatus: () => void;
  statusList: []
}

const PartnerCard: React.FC<PartnerCardProps> = ({ user, changeStatus, statusList }) => {
  const [expanded, setExpanded] = useState(false);
  const address = `${user?.Door_no}, ${user?.Street}, ${user?.City}`

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const statusTxt = () => {
    const temp: any = statusList.filter((el: any) => el.Profile_Status_Id === user?.Profile_Status_Id && el.Status_Name);
    return temp[0]?.Status_Name;
  }

  return (
    <Card style={styles.card}>
      <View style={{ padding: 10 }}>
        <Text style={{ color: '#000', fontSize: 18 }}>{`${user.First_Name} ${user.Last_Name}`}</Text>
        <TouchableWithoutFeedback onPress={() => changeStatus(user)}>
          <View style={{ flexDirection: 'row', position: 'absolute', right: 10, top: 10 }}>
            <View style={{ height: 15, width: 15, backgroundColor: getProfileStatusColor(statusTxt()), borderRadius: 8, alignSelf: 'center' }} />
            <Text style={{ color: getProfileStatusColor(statusTxt()), fontSize: 14, alignSelf: 'center', marginLeft: 5 }}>{statusTxt()}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Card.Content>
        <Text style={styles.textItem}>Phone Number: {user.Mobile_Number}</Text>
        <Text style={styles.textItem}>City: {user.City}</Text>
        <Text style={styles.textItem}>Email: {user.Email_Id}</Text>

        {expanded && (
          <>
            <Text style={styles.textItem}>PAN Number: {user.PAN_Number}</Text>
            <Text style={styles.textItem}>Address: {address}</Text>
          </>
        )}
      </Card.Content>
      <Card.Actions style={{ flexDirection: 'row', display: 'flex', flex: 1 }}>
        <TouchableWithoutFeedback onPress={() => { handleExpand() }}>
          <Image source={!expanded ? images.ic_up : images.ic_down} style={{ width: 18, height: 18, margin: 10 }} />
        </TouchableWithoutFeedback>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 15,
    marginVertical: 5
  },
  textItem: {
    fontSize: 16,
    marginTop: 5,
    color: colors.black
  }
});

export default PartnerCard;
