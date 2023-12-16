import AllTestTable from "@/components/tests/AllTestsTable";
import React from "react";

const Tests = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold text-center">All Test Available</h2>
      </div>
      <AllTestTable></AllTestTable>
    </div>
  );
};

export default Tests;
