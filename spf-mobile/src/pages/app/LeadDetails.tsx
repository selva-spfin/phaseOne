import { images } from '../../constants/images';
import { colors } from '../../constants/colors';
import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback, Image, FlatList } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import { camelCaseToName } from '../../services/helpers/commonHelpers';

interface RouteParams {
  data: Record<string, any>;
}

interface Props {
  route: {
    params: RouteParams;
  };
}

const ASSET_BASE_URL = 'http://d6zg14cua4cuh.cloudfront.net/';

const LeadDetails: React.FC<Props> = ({ route }) => {
  const { data } = route.params;
  const jsonObject = JSON.parse(data?.assets);

  useEffect(() => {
    requestStoragePermission();
  }, [])

  async function requestStoragePermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Storage permission granted');
      } else {
        console.log('Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  const downloadPdf = (url: string, fileName: string) => {
    const { config, fs } = RNFetchBlob;
    const DownloadDir = fs.dirs.DownloadDir;
    return config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: `${DownloadDir}/${fileName}.pdf`,
      },
    })
      .fetch('GET', url)
      .then(res => {
        return res.path();
      })
      .catch(error => {
        console.error('Error downloading file:', error);
      });
  };

  const renderGridItem = ({ item }:any) => {
    const URL = ASSET_BASE_URL + item?.asset_path;
    const fileName = data?.First_Name + "-" + item?.asset_name;
    const type = item?.asset_path.split('.')[1];
    console.warn(type);

    return (
      <TouchableWithoutFeedback onPress={() => { downloadPdf(URL, fileName) }}>
        <View style={styles.gridItem}>
          <Image source={images.ic_pdf} style={styles.pdfIcon} />
          <Text>{camelCaseToName(item?.asset_name)}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{data?.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{data?.email}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Loan Amount</Text>
        <Text style={styles.value}>{data?.loanAmount}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Phone Number</Text>
        <Text style={styles.value}>{data?.phoneNumber}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Address</Text>
        <Text style={styles.value}>{data?.address}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Company Name</Text>
        <Text style={styles.value}>{data?.companyName}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Bank Name</Text>
        <Text style={styles.value}>{data?.bankName}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Status</Text>
        <Text style={styles.value}>{data?.status}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Employee Type</Text>
        <Text style={styles.value}>{data?.Employee_Type}</Text>
      </View>
      <FlatList
        data={jsonObject}
        renderItem={renderGridItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4} // Number of columns in the grid
        contentContainerStyle={styles.gridContainer}
      />
    </View>
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
  row: {

  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 18,
    color: colors.pink,
    opacity: 0.7
  },
  value: {
    marginVertical: 5,
    fontSize: 16,
    color: '#000'
  },

  gridContainer: {
    padding: 10,
  },
  gridItem: {
    margin: 5,
    alignItems: 'center',
  },
  pdfIcon: {
    width: 60,
    height: 60,
    tintColor: colors.pink,
  },
});

export default LeadDetails;
