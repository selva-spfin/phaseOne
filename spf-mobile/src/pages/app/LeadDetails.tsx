import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import PDFView from 'react-native-pdf';
import { PermissionsAndroid } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

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
  console.log("jsonObject", typeof data?.assets, data?.assets)

  const jsonObject = JSON.parse(data?.assets);
  console.log("jsonObject", jsonObject)

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

  const downloadPdf = (url:string, fileName:string) => {
    const { config, fs } = RNFetchBlob;
    const DownloadDir = fs.dirs.DownloadDir;
    console.log("download", url)
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
           console.log('File downloaded to:', res.path());
        return res.path();
      })
      .catch(error => {
        console.error('Error downloading file:', error);
      });
  };

  return (
    <View style={styles.gridContainer}>
      {/* {Object.keys(data).map(key => (
        key !== 'assets' && (
          <View key={key} style={styles.gridItem}>
            <Text style={styles.label}>{key}</Text>
            <Text style={styles.value}>{data[key]}</Text>
          </View>
        )
      ))} */}
      <View style={{
        flexGrow: 1,
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        {
          jsonObject.map((el: any) => {
            const URL = ASSET_BASE_URL + el?.asset_path;
            const fileName = data?.First_Name +"-"+ el?.asset_name
            // const type = el?.asset_path.split('.')[1];
            return (
              <TouchableWithoutFeedback onPress={()=>{ downloadPdf(URL,fileName)}}>
                <View style={{
                height: 60, width: 60, backgroundColor: '#BDBDBD', marginBottom: 10, borderRadius: 5, marginHorizontal: 5
              }}>
                <Text>{el?.asset_name}</Text>
              </View>
              </TouchableWithoutFeedback>
            )
          })
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexGrow: 1,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // elevation: 5,
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 10
  },
  gridItem: {
    width: '50%',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  label: {
    fontWeight: 'bold',
    color: '#BDBDBD'
  },
  value: {
    marginLeft: 10,
  },
});

export default LeadDetails;
