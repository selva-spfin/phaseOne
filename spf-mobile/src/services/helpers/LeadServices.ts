import axios from "axios";
import { paths } from "../api/apiURL";

const getLeadDetails = async () => {
    console.log("URL", paths.getLeads)

    try {
      const response = await axios.get(paths.getLeads);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  export {getLeadDetails}