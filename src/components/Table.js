import React, { useState } from "react";
import ButtonLoader from "./ButtonLoader.js";

const TruncatedText = ({ text, wordLimit = 30 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = text.split(" ");
  const truncated = words.slice(0, wordLimit).join(" ");
  const isLong = words.length > wordLimit;

  return (
    <div>
      {isExpanded ? text : truncated}
      {isLong && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 hover:underline ml-1 inline-block w-[30vw]"
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
};

const Table = ({ loading, cveData }) => {
  return (
    <div className="p-5 shadow-md w-full max-w-[90vw]">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          {/* <p>Loading...</p> */}
          <ButtonLoader />
        </div>
      ) : cveData && cveData.length === 0 ? (
        <div className="flex justify-center items-center h-64 text-gray-500 font-medium">
          No data found
        </div>
      ) : (
        <div className="overflow-x-auto max-w-full">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="px-4 py-2 whitespace-nowrap w-40">CPE ID</th>
                <th className="px-4 py-2 whitespace-nowrap w-40">
                  Source Indentifier
                </th>
                <th className="px-4 py-2 whitespace-nowrap w-1/2">
                  Description
                </th>
                <th className="px-4 py-2 whitespace-nowrap w-44">
                  Published Date
                </th>
                <th className="px-4 py-2 whitespace-nowrap w-44">
                  Last Modified
                </th>
                <th className="px-4 py-2 whitespace-nowrap w-28">Base Score</th>
                <th className="px-4 py-2 whitespace-nowrap w-28">Severity</th>
                <th className="px-4 py-2 whitespace-nowrap w-1/6">
                  References
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {cveData &&
                cveData.map((item, index) => (
                  <tr key={item?.cve?.id || index}>
                    <td className="px-4 py-2 whitespace-nowrap w-40">
                      {item?.id}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap w-40">
                      {item?.sourceIdentifier}
                    </td>
                    <td className="px-4 py-2 w-1/2">
                      <TruncatedText
                        text={item?.descriptions?.[0]?.value || ""}
                      />
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap w-44">
                      {item?.published}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap w-44">
                      {item?.lastModified}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap w-28">
                      {
                        item?.metrics?.cvssMetricV2?.[0]?.cvssData
                          ?.baseScore
                      }
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap w-28">
                      {item?.metrics?.cvssMetricV2?.[0]?.baseSeverity}
                    </td>
                    <td className="px-4 py-2 w-1/6">
                      {item?.references &&
                        item?.references.map((ref, idx) => (
                          <a
                            key={ref.url || idx}
                            href={ref.url}
                            className="text-blue-500 hover:underline block"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {ref.url}
                          </a>
                        ))}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Table;
