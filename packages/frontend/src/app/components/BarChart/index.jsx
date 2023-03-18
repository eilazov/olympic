import React from "react";
import { Bar } from "react-chartjs-2";
import c from "classnames";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import style from "./style.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ className, data }) => {
  return (
    <div className={c(style.container, className)}>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
