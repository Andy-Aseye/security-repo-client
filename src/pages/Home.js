import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import { fetchPaginatedCveData } from "../services/service-wrapper";
import { dataArr } from "../utils";
import Header from "../components/Header";
import CountCard from "../components/CountCard";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState(dataArr);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(12);
  const [totalRecords, setTotalRecords] = useState(200);

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
            <p>This table below displays the vulnerabilities as well as specified details</p>
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
