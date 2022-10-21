import axios from "axios";

const apiUrl =
  "https://raw.githubusercontent.com/anubhav-goel/react-download-file-axios/main/sampleFiles/csv-sample.csv";

export const downloadQuery = () => {
  return axios.get(apiUrl, {
    responseType: "blob",
  });
};
