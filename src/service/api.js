import axios from "axios";
import { getHandersAndparams } from "../utils/common.utils";

export const getData = async (formData, Jsontext, paramsData, headerData) => {
  const apiTyppe = formData.type.toLowerCase();
  const apiUrl = formData.url;
  const apiparams = getHandersAndparams(paramsData);
  const apiHeaders = getHandersAndparams(headerData);

  try {
    return await axios({
      method: apiTyppe,
      url: apiUrl,
      body: Jsontext,
      headers: apiHeaders,
      params: apiparams,
    });
  } catch (error) {
    console.log("eeror");
    return 'error';
  }
};
