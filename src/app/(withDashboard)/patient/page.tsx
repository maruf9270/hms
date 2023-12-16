import AllTestTable from "@/components/tests/AllTestsTable";
import React from "react";

const Patients = () => {
  return (
    <div>
      <div className="my-5">
        <h2 className="text-3xl font-bold text-center text-black font-serif">
          All Admitted Patient
        </h2>
      </div>
      <div className="my-5">
        <AllTestTable></AllTestTable>
      </div>
    </div>
  );
};

export default Patients;
