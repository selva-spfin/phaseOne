import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, FlatList, TouchableWithoutFeedback, Alert, Image } from 'react-native';
import PartnerService from '../../services/helpers/PartnerService';
import PartnerCard from '../../components/PartnerCard';
import { images } from '../../constants/images';
import { colors, getProfileStatusColor } from '../../constants/colors';
import RBSheet from "react-native-raw-bottom-sheet";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfileStatusList, selectProfileStatusList } from '../../services/store/reducers/LookupSlice';


const Partner: React.FC = () => {
  const refRBSheet = useRef();
  // refRBSheet?.current?.open() 
  const [partners, setPartners] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [statusList, setStatusList] = useState([]);
  const dispatch = useDispatch();
  const profileStatusList = useSelector(selectProfileStatusList);

  useEffect(() => {
    dispatch(fetchProfileStatusList());
  }, [dispatch]);

  useEffect(() => {
    fetchPartners();
    fetchStatus();
  }, []);

  const fetchPartners = async () => {
    try {
      const partnersData = await PartnerService.getPartners();
      // Alert.alert(JSON.stringify(partnersData))
      setPartners(partnersData);
    } catch (error) {
    }
  };

  const fetchStatus = async () => {
    try {
      const statusData = await PartnerService.getProfileStatus();
      const arr = statusData
        .filter((status: any) => ['Active', 'Inactive', 'Hold'].includes(status.Status_Name))
        .map(({ Profile_Status_Id, Status_Name }: any) => ({ id: Profile_Status_Id, name: Status_Name }));
      setStatusList(arr);
    } catch (error) {
      console.error("error", error)
    }
  };

  const toggleStatus = async (partnerId: string, statusId: string) => {
    refRBSheet?.current?.close();
    setSelectedUser({})
    try {
      await PartnerService.togglePartnerStatus(partnerId, statusId);
      fetchPartners();
    } catch (error) {
    }
  };


  return (
    <View style={{flex:1}}>
      <View style={{ padding: 20, justifyContent: 'space-between',elevation:3,backgroundColor:'#EFEFEF', flexDirection:'row' }}>
        <Text style={{ fontSize: 18, color: colors.pink, fontWeight:'bold'}}>PARTNER</Text>
        <TouchableWithoutFeedback onPress={()=>{fetchPartners()}}>
        <Text style={{color:colors.gray}}>Refresh</Text>
        </TouchableWithoutFeedback>
      </View>
      {
        partners?.length === 0 ?
          <View style={{flex:0.9,justifyContent:'center',alignItems:'center', flexDirection:'row'}}>
            <Image source={images.ic_partner_info} style={{height:28, width:28, tintColor:'#BDBDBD', marginHorizontal:20}} />
            <Text style={{color:'#BDBDBD', fontSize:18}}>No More Partners</Text>
          </View>
          :
          <FlatList
            data={partners}
            keyExtractor={(item: any) => item?.id}
            renderItem={({ item }) => <PartnerCard statusList={profileStatusList} user={item} changeStatus={(user) => {
              setSelectedUser(user);
              refRBSheet.current?.open();
            }
            } />}
          />
      }

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={250}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <View>
          <View style={{ margin: 10, flexDirection: 'row', }}>
            <Text style={{ color: colors.black, fontSize: 16, fontWeight: 'bold' }}>Change Profile Status </Text>
            <TouchableWithoutFeedback onPress={() => { refRBSheet?.current?.close(); }}>
              <Text style={{ color: '#000', fontSize: 18, position: 'absolute', right: 10 }}>Close</Text>
            </TouchableWithoutFeedback>
          </View>
          {
            profileStatusList?.filter(({ Status_Name }) => ['Active', 'Inactive', 'Hold', 'Pending'].includes(Status_Name))
              ?.map(({ Profile_Status_Id, Status_Name }: Record<string, any>, idx) => {
                const { User_Id }: any = selectedUser;
                const statusColor = getProfileStatusColor(Status_Name)
                return (
                  <TouchableWithoutFeedback onPress={() => toggleStatus(User_Id, Profile_Status_Id)}>
                    <View key={idx} style={{ flexDirection: 'row', margin: 10 }}>
                      <View style={{ height: 15, width: 15, backgroundColor: statusColor, borderRadius: 8, alignSelf: 'center' }} />
                      <Text style={{ color: statusColor, fontSize: 14, alignSelf: 'center', marginLeft: 5 }}>{Status_Name}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                )
              })
          }
        </View>
      </RBSheet>
    </View>
  );
};

export default Partner;
