import axios from 'axios';

export const BASE_URL =
  'https://efskorntxa.execute-api.ap-south-1.amazonaws.com/Dev'

export default {
  partnerSingUp: BASE_URL + '/api/partner',
  LoginApi: BASE_URL + '/api/login',
  addLead: BASE_URL + '/api/lead_details',
  assetApi: BASE_URL + '/api/leads_asset',
  lookupApi: BASE_URL + '/api/lookup',
  password: BASE_URL + "/api/partner/password",
  setTarget: BASE_URL + "/api/partner/target",
  getTelecallerLead: BASE_URL + "/api/admin/tellecaller-leads",
  telecallerLeadStatusChange: BASE_URL + "/api/tellecaller/leads",

  checkEmail: BASE_URL + "/api/admin/email",
  CheckPhoneNumber: BASE_URL + "/api/admin/mobilenumber",



}

const baseURL = 'https://efskorntxa.execute-api.ap-south-1.amazonaws.com/Dev';

const api = axios.create({
  baseURL,
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const errorMessage = error.response?.data?.message || 'An error occurred';
    return Promise.reject(errorMessage);
  }
);

export const getAPI = async (endpoint) => {
  try {
    return await api.get(endpoint);
  } catch (error) {
    throw error;
  }
};

export const postAPI = async (endpoint, data) => {
  try {
    return await api.post(endpoint, data);
  } catch (error) {
    throw error;
  }
};

export const putAPI = async (endpoint, data) => {
  try {
    return await api.put(endpoint, data);
  } catch (error) {
    throw error;
  }
};

export const deleteAPI = async (endpoint) => {
  try {
    return await api.delete(endpoint);
  } catch (error) {
    throw error;
  }
};

