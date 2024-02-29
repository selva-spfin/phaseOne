import React from 'react';
import { Image, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { images } from '../../constants/images';
import { colors } from '../../constants/colors';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { adminLogout } from '../../services/store/reducers/AuthSlice';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import PartnerOverView from '../../components/PartnerOverView';
import LeadCard from '../../components/LeadCard';

const OverView: React.FC = () => {
  const dispatch = useDispatch();
  const data = [{ value: 50, color: '#BDBDBD' }, { value: 80 }]

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
        <Image source={images.ic_logo} style={{ width: 50, height: 50, }} />
        <Text style={{ fontSize: 18, color: colors.pink, fontWeight: '600' }}>SP FINNACLE</Text>
        <TouchableWithoutFeedback onPress={() => { dispatch(adminLogout()) }}>
          <Image source={require('../../assets/images/ic_logout.png')} style={{ height: 24, width: 24, position: 'absolute', right: 20, tintColor: colors.pink }} />
        </TouchableWithoutFeedback>
      </View>
      <View style={{ margin: 10 }}>
        <LeadCard />
        <PartnerOverView />
      </View>
    </View>
  );
};

export default OverView;
