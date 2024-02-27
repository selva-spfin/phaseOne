import axios from "axios";
import { paths } from "../api/apiURL";

const getLeadDetails = async () => {
  try {
    const response = await axios.get(paths.getLeads);
    return response.data;
  } catch (error) {
    return error;
  }
};

const formatLeadData = (data:any, bankNames:any, status:any)=>{
  return {
    name: data?.First_Name + " " + data?.Last_Name,
    email: data?.Email,
    loanAmount: data?.Loan_Amount,
    phoneNumber: data?.Mobile_No,
    address: data?.Door_no + " " + data?.Street + " " + data?.City + " " + data?.State + " " + data?.Pincode,
    companyName: data?.Company_Name,
    bankName: bankNames.filter((bank:any) => bank.Bank_ID === data?.Bank_ID)[0]?.Bank_Name || '',
    status: status.filter((status:any) => status.Profile_Status_Id === data?.Loan_Process_Status_Id)[0]?.Status_Name || '',
    employeeType: data?.Employee_Type,
    ...data
    // partnerName: getPartnerName(data?.Generated_Partner),
  }
}

export { getLeadDetails, formatLeadData }



