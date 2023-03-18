import React, { useState } from "react";
import RouteData from "../../../MockedData/routeData.json";
import BarChart from "../../components/BarChart";
import NumberCards from "../../components/NumberCards";
import OverviewFilters from "../../components/OverviewFilters";
import style from "./style.module.css";

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const Overview = () => {
  const [startAddress, setStartAddress] = useState(null);
  const [endAddress, setEndAddress] = useState(null);

  const [datasets, setDatasets] = useState({
    labels,
    datasets: [
      {
        label: "Dataset",
        data: [123, 1, 312, 123, 123],
        backgroundColor: "rgba(169, 207, 242, 0.8)",
      },
    ],
  });

  const [datasets2, setDatasets2] = useState({
    labels,
    datasets: [
      {
        label: "Dataset",
        data: [123, 1, 312, 123, 123],
        backgroundColor: "rgba(246, 182, 194, 0.8)",
      },
    ],
  });

  return (
    <div>
      <div>
        <OverviewFilters />
      </div>
      <div>
        <NumberCards
          values={[
            { label: "Average of workload index", startValue: 97 },
            { label: "Average of usage index", startValue: 75 },
            {
              label: "Average of usage index",
              startValue: "10PM",
              endValue: "1PM",
            },
          ]}
        />
        {/* <NumberCard label={"Average of workload index"} startValue={97} />
        <NumberCard label={"Average of usage index"} startValue={75} />
        <NumberCard label={"Average of usage index"} startValue={"10PM"} endValue={"1PM"} /> */}
      </div>
      <div className={style.chartsRow}>
        <BarChart className={style.chartWrapper} data={datasets} />
        <BarChart className={style.chartWrapper} data={datasets2} />
      </div>
    </div>
  );
};

export default Overview;
