import React from "react";
import CustomTable from "../../components/CustomTable";

const Traffic = () => {
  return (
    <div>
      <h1>Routes List</h1>

      <CustomTable enableSearch={true} />
    </div>
  );
};

export default Traffic;
