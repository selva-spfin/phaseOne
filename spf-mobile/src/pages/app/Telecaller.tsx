import React, { useState, useRef, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Alert } from 'react-native';
import { FAB, Portal, Provider, TextInput, Button } from 'react-native-paper';
import RBSheet from 'react-native-raw-bottom-sheet';
import { images } from '../../constants/images';
import { colors } from '../../constants/colors';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

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

  useEffect(()=>{

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
    Alert.alert('Telecaller created successfully')
    refRBSheet?.current?.close()
  }  
  }).catch((err)=> console.error(err))



    // setTelecallers([...telecallers, newTelecaller]);
    // hideBottomSheet();
    // resetForm();
  };

  const renderTelecallerItem = ({ item }: { item: TelecallerData }) => (
    <View style={styles.telecallerItem}>
      <Text>{item.name}</Text>
      <Text>{item.empId}</Text>
      <Text>{item.phoneNumber}</Text>
    </View>
  );

  return (
    <Provider>
      <View style={styles.container}>
        <FlatList
          data={telecallers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderTelecallerItem}
        />

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
            height={600}
            customStyles={{
              wrapper: {
                backgroundColor: 'transparent',
              },
              draggableIcon: {
                backgroundColor: '#000',
              },
            }}
          >
            <Formik
              initialValues={{
                designation: 'Telecaller',
                email: 'abc@gmail.com',
                employeeId: '121',
                gender: 'Male',
                mobileNumber: '7397316411',
                name: 'Selvaa',
                password: 'abc@123',
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formikProps) => (
                <View style={styles.bottomSheet}>
                   <TextInput
                    label="Name"
                    placeholder='#000'
                    theme={{colors:{primary:colors.pink, text:'red', placeholder: colors.black}}}
                    value={formikProps.values.name}
                    onChangeText={formikProps.handleChange('name')}
                    style={{backgroundColor:'transparent',marginTop:5,color:colors.pink}}
                    error={formikProps.touched.name && formikProps.errors.name}
                  />
                  <TextInput
                    label="Email"
                    value={formikProps.values.email}
                    theme={{colors:{primary:colors.pink}}}
                    onChangeText={formikProps.handleChange('email')}
                    style={{backgroundColor:'transparent',marginTop:5,color:'#000'}}
                    error={formikProps.touched.email && formikProps.errors.email}
                  />
                  <TextInput
                    label="Employee ID"
                    value={formikProps.values.employeeId}
                    theme={{colors:{primary:colors.pink}}}
                    onChangeText={formikProps.handleChange('employeeId')}
                    style={{backgroundColor:'transparent',marginTop:5,color:'#000'}}
                    error={formikProps.touched.employeeId && formikProps.errors.employeeId}
                  />
                  <TextInput
                    label="Gender"
                    value={formikProps.values.gender}
                    theme={{colors:{primary:colors.pink}}}
                    onChangeText={formikProps.handleChange('gender')}
                    style={{backgroundColor:'transparent',marginTop:5,color:'#000'}}
                    error={formikProps.touched.gender && formikProps.errors.gender}
                  />
                  <TextInput
                    label="Mobile Number"
                    value={formikProps.values.mobileNumber}
                    onChangeText={formikProps.handleChange('mobileNumber')}
                    keyboardType="numeric"
                    theme={{colors:{primary:colors.pink}}}
                    style={{backgroundColor:'transparent',marginTop:5,color:'#000'}}
                    error={formikProps.touched.mobileNumber && formikProps.errors.mobileNumber}
                  />
                  <TextInput
                    label="Designation"
                    value={formikProps.values.designation}
                    onChangeText={formikProps.handleChange('designation')}
                    style={{backgroundColor:'transparent',marginTop:5,color:'#000'}}
                    theme={{colors:{primary:colors.pink}}}
                    error={formikProps.touched.designation && formikProps.errors.designation}
                  />
                  <TextInput
                    label="Password"
                    value={formikProps.values.password}
                    onChangeText={formikProps.handleChange('password')}
                    secureTextEntry
                    theme={{colors:{primary:colors.pink}}}
                    style={{backgroundColor:'transparent',marginTop:5,color:'#000'}}
                    error={formikProps.touched.password && formikProps.errors.password}
                  />
                  <Button style={styles.loginBtn} mode="contained" onPress={formikProps.handleSubmit}>
                    Submit
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
    width: '40%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: colors.pink,
    marginTop:20,
    color:'white'
  },
});

export default Telecaller;
