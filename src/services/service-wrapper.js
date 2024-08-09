import axios from "axios";

const API_BASE_URL = "http://localhost:8080"; // Replace with your backend URL


export const fetchCPEDataFromNist = async (cpeName) => {
  try {
    const body = { "cpeName": cpeName };

    const response = await axios.post(`${API_BASE_URL}/api/cve`, body);
    return response.data;
  }
  catch (error) {
    console.error("Error fetching CPE data:", error);
    throw error;
  }
}

// Function to fetch paginated CVE data
export const fetchPaginatedCveData = async (pageNumber) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/cve`, {
      params: {
        page: pageNumber
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching CVE data:", error);
    throw error;
  }
};


