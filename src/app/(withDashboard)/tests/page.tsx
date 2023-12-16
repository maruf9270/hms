import AllTestTable from "@/components/tests/AllTestsTable";
import React from "react";

const Tests = () => {
  return (
    <div>
      <div className="my-5">
        <h2 className="text-3xl font-bold text-center">All Test Available</h2>
      </div>
      <div className="my-5">
        <AllTestTable></AllTestTable>
      </div>
    </div>
  );
};

export default Tests;
