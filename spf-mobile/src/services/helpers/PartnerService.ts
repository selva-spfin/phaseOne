import axios from 'axios';

export const apiBaseUrl = 'https://efskorntxa.execute-api.ap-south-1.amazonaws.com/Dev';

const PartnerService = {
  getPartners: async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/api/admin/partner`);
      return response.data;
    } catch (error) {
      console.error('Error fetching partners:', error);
      throw error;
    }
  },

  togglePartnerStatus: async (partnerId: string, statusId: string) => {
    try {
      const response = await axios.put(`${apiBaseUrl}/api/partner/status`,{ "Profile_Status_Id": statusId, "User_Id": partnerId });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getProfileStatus: async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/api/lookup?type=profile_status`);
      return response.data;
    } catch (error) {
      console.error('Error toggling partner status:', error);
      throw error;
    }
  },

  getPartnerDetails: async (Id:number) => {
    try {
      const response = await axios.get(`${apiBaseUrl}/api/lookup?type=profile_status`);
      return response.data;
    } catch (error) {
      console.error('Error toggling partner status:', error);
      throw error;
    }
  },
};


export default PartnerService;
