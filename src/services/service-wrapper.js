import axios from "axios";

const API_BASE_URL = "https://security-repo.onrender.com"; // Replace with your backend URL

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
