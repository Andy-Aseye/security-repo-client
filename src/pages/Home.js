import React, { useEffect, useState, useRef } from "react";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import { fetchPaginatedCveData, fetchCPEDataFromNist } from "../services/service-wrapper";
import { dataArr } from "../utils";
import Header from "../components/Header";
import CountCard from "../components/CountCard";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState(dataArr);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(12);
  const [totalRecords, setTotalRecords] = useState(200);
    const cpeNameRef = useRef(null);

  const fetchData = async (page) => {
    try {
      setLoading(true);
      const { cves, totalPages, totalCves } = await fetchPaginatedCveData(page);
      setTableData(cves);
      setTotalPages(totalPages);
      setTotalRecords(totalCves);
    } catch (error) {
      console.error("Error fetching CVE data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFetchDataFromNist = async () => {
    try {
      console.log(cpeNameRef)
      const { status, message } = await fetchCPEDataFromNist(cpeNameRef.current);
      if (status === 200) {
        console.log("Data fetched successfully from NIST:", message);
      }
      else {
        console.log("Error fetching CPE data from NIST:", message);
       }
    }
    catch (error) {
      console.log("Error fetching CPE data from NIST:", error)
    }
  }
  
    const handleInputChange = (event) => {
      cpeNameRef.current = event.target.value;
    };

  useEffect(() => {
    fetchData(currentPage); // Fetch data when the component mounts or when the page changes
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center h-screen pt-10">
      <div className="w-[90vw]">
        <div>
          <Header />
        </div>
        <div className="flex md:flex-row justify-between mt-4 px-3 flex-col">
          <div className="flex flex-col text-left">
            <h1 className=" font-semibold">Table data for vulnerabilities</h1>
            <p>
              Enter name of CPE to get data from NIST on related
              vulnerabilities.
            </p>
            <div className="flex flex-row gap-4 mt-3">
              <input
                type="text"
                placeholder="Eg. cpe:2.3:o:microsoft:windows_10:1607"
                className=" rounded-sm border border-gray-300 p-2 mt-2"
                onChange={handleInputChange}
              />
              <button className="bg-blue-700 text-white rounded-md px-2 min-w-[5vw]" onClick={handleFetchDataFromNist}>
                Submit
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <CountCard label="Total Count" count={totalRecords} />
            <CountCard label="Total Pages" count={totalPages} />
          </div>
        </div>
        <div className="mt-3">
          <Table loading={loading} cveData={tableData} />
          {!loading && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              totalRecords={totalRecords}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
