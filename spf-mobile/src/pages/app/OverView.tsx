import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { images } from '../../constants/images';
import { colors } from '../../constants/colors';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { adminLogout } from '../../services/store/reducers/AuthSlice';
import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";

const OverView: React.FC = () => {
  const dispatch = useDispatch();
  const data=[ {value:50,color:'#BDBDBD'}, {value:80}]

  return (
    <View>
      <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
        <Image source={images.ic_logo} style={{ width: 50, height: 50 }} />
        <Text style={{ fontSize: 18, color: colors.pink }}>SP FINNACLE</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center',height:'90%'}}>
      <PieChart data = {data} />

        <Button onPress={()=>{dispatch(adminLogout())}} mode='outlined'>Logout</Button>
        <Text style={{ fontSize: 18, color: '#000' }}>UNDER INPROGRESS</Text>
      </View>
    </View>
  );
};

export default OverView;
