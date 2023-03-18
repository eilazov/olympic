import React, { useEffect, useState } from "react";
import routeData from "../../../MockedData/routeData.json";
import DataTable from "react-data-table-component";
import style from "./style.module.css";

const CustomTable = ({ enableSearch = false }) => {
  const [searchString, setSearchString] = useState("");
  const [data, setData] = useState(routeData);

  useEffect(() => {
    setData(
      data.filter((el) =>
        el.startAddress.toLowerCase().match(`.*${searchString}.*`)
      )
    );
    if (!searchString) {
      setData(routeData);
    }
  }, [searchString]);

  const cols = [
    {
      name: "Route Id",
      selector: (row) => row.routeId,
      sortable: true,
    },
    {
      name: "Start Address",
      selector: (row) => row.startAddress,
      sortable: true,
    },
    {
      name: "End Address",
      selector: (row) => row.endAddress,
      sortable: true,
    },
    {
      name: "Workload Index",
      selector: (row) => row.workloadIndex,
      sortable: true,
    },
    {
      name: "Usage Index",
      selector: (row) => row.usageIndex,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: "End Date",
      selector: (row) => row.endDate,
      sortable: true,
    },
  ];

  return (
    <div className={style.container}>
      {enableSearch && (
        <input
          className={style.input}
          ltype="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
      )}
      <DataTable columns={cols} data={data} fixedHeader pagination></DataTable>
    </div>
  );
};

export default CustomTable;
