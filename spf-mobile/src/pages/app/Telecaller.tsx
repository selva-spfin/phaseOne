import React, { useState, useRef, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Alert, TouchableWithoutFeedback } from 'react-native';
import { FAB, Portal, Provider, TextInput, Button } from 'react-native-paper';
import RBSheet from 'react-native-raw-bottom-sheet';
import { images } from '../../constants/images';
import { colors } from '../../constants/colors';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import SPTextInput from '../../components/SPTextInput';

interface TelecallerData {
  id: number;
  name: string;
  empId: string;
  phoneNumber: string;
}

const Telecaller: React.FC = () => {
  const refRBSheet = useRef();

  const [telecallers, setTelecallers] = useState<TelecallerData[]>([]);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const showBottomSheet = () => refRBSheet?.current?.open();
  const hideBottomSheet = () => refRBSheet?.current?.close();

  const validationSchema = Yup.object().shape({
    designation: Yup.string().required('Designation is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    employeeId: Yup.string().required('Employee ID is required'),
    gender: Yup.string().required('Gender is required'),
    mobileNumber: Yup.string().required('Mobile Number is required'),
    name: Yup.string().required('Name is required'),
    password: Yup.string().required('Password is required'),
  });

  const getTelecaller=()=>{
    axios.get('https://efskorntxa.execute-api.ap-south-1.amazonaws.com/Dev/api/admin/tellecaller').then((res)=>{
      if(res?.data?.statusCode === 200){
        setTelecallers(res?.data?.data || [])
      }

    }).catch(e=>{})
  }

  useEffect(()=>{
    getTelecaller()
  },[])

  const onSubmit = (values:any, { resetForm }:any) => {
    const { designation,email,employeeId,gender,mobileNumber,name,password } = values;
    const newTelecaller: TelecallerData =   {
      "Name": name,
      "Email_Id": email,
      "Password": password,
      "Gender": gender,
      "Mobile_Number": mobileNumber,
      "Employee_Id": employeeId,
      "Designation":designation,
      "admin_id": 1,
      "Status": 1,
      "Profile_Status": 2,
      "Read_access": 1
  }

  axios.post('https://efskorntxa.execute-api.ap-south-1.amazonaws.com/Dev/api/admin/tellecaller', newTelecaller).then((res)=>{
  if(res?.status === 200){
    Alert.alert('Telecaller created successfully');
    getTelecaller();
    refRBSheet?.current?.close()
  }  
  }).catch((err)=> console.error(err))
  };

  const renderTelecallerItem = ({ item }: any) => (
    <View style={styles.telecallerItem}>
      <Text style={{color:colors.black,fontSize:16}}>{item.Name}</Text>
      <Text style={{color:colors.black,fontSize:15}}>{item.Employee_Id}</Text>
      <Text style={{color:colors.black,fontSize:15}}>{item.Mobile_Number}</Text>
    </View>
  );

  return (
    <Provider>
      <View style={styles.container}>
      <View style={{ padding: 20, justifyContent: 'space-between',elevation:3,backgroundColor:'#EFEFEF', flexDirection:'row' }}>
        <Text style={{ fontSize: 18, color: colors.pink, fontWeight:'bold'}}>TELECALLERS</Text>
        <TouchableWithoutFeedback onPress={()=>{getTelecaller()}}>
        <Text style={{color:colors.pink,fontWeight:'500'}}>Refresh</Text>
        </TouchableWithoutFeedback>
      </View>
      {
        telecallers?.length === 0 ?
          <View style={{flex:0.9,justifyContent:'center',alignItems:'center', flexDirection:'row'}}>
            <Image source={images.ic_partner_info} style={{height:28, width:28, tintColor:'#BDBDBD', marginHorizontal:20}} />
            <Text style={{color:'#BDBDBD', fontSize:18}}>No More Partners</Text>
          </View>
          :
          <FlatList
          data={telecallers}
          keyExtractor={(item:any) => item.Tellecaller_Id.toString()}
          renderItem={renderTelecallerItem}
        />

      }
       
        <Portal>
          <FAB
            style={styles.fab}
            icon={() => <Image source={images.ic_add} style={{ height: 24, width: 24, tintColor: colors.white }} />}
            onPress={showBottomSheet}
          />
          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            height={700}
            customStyles={{
              wrapper: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              },
              draggableIcon: {
                backgroundColor: colors.pink,
              },
            }}
          >
            <Formik
              initialValues={{
                designation: '',
                email: '',
                employeeId: '',
                gender: '',
                mobileNumber: '',
                name: '',
                password: '',
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formikProps) => (
                <View style={styles.bottomSheet}>
                   <SPTextInput
                    label="Name"
                    value={formikProps.values.name}
                    onChangeText={formikProps.handleChange('name')}
                    error={formikProps.touched.name && formikProps.errors.name}
                  />
                  <SPTextInput
                    label="Email"
                    value={formikProps.values.email}
                    onChangeText={formikProps.handleChange('email')}
                    error={formikProps.touched.email && formikProps.errors.email}
                  />
                  <SPTextInput
                    label="Employee ID"
                    value={formikProps.values.employeeId}
                    onChangeText={formikProps.handleChange('employeeId')}
                    error={formikProps.touched.employeeId && formikProps.errors.employeeId}
                  />
                  <SPTextInput
                    label="Gender"
                    value={formikProps.values.gender}
                    onChangeText={formikProps.handleChange('gender')}
                    error={formikProps.touched.gender && formikProps.errors.gender}
                  />
                  <SPTextInput
                    label="Mobile Number"
                    value={formikProps.values.mobileNumber}
                    onChangeText={formikProps.handleChange('mobileNumber')}
                    keyboardType="numeric"
                    error={formikProps.touched.mobileNumber && formikProps.errors.mobileNumber}
                  />
                  <SPTextInput
                    label="Designation"
                    value={formikProps.values.designation}
                    onChangeText={formikProps.handleChange('designation')}
                    error={formikProps.touched.designation && formikProps.errors.designation}
                  />
                  <SPTextInput
                    label="Password"
                    value={formikProps.values.password}
                    onChangeText={formikProps.handleChange('password')}
                    secureTextEntry
                    error={formikProps.touched.password && formikProps.errors.password}
                  />
                  <Button textColor='#fff' style={styles.loginBtn} mode="contained" onPress={formikProps.handleSubmit}>
                    CREATE TELECALLER
                  </Button>
                </View>
              )}
            </Formik>
          </RBSheet>
        </Portal>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  telecallerItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginHorizontal:5,
    marginTop:10,
    backgroundColor:'#FFF',
    elevation:3,
    borderRadius:10
  },
  fab: {
    position: 'absolute',
    margin: 25,
    right: 0,
    bottom: 0,
    backgroundColor: colors.pink,
    borderRadius: 10,
  },
  bottomSheet: {
    backgroundColor: 'white',
    padding: 16,
  },
  loginBtn: {
    width: '60%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: colors.pink,
    marginTop:20,
    color:'white',
    fontWeight:'500'
  },
});

export default Telecaller;
