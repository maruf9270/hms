"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { removeTestReportParam } from "@/redux/features/tests/testSlice";
import React from "react";
import CloseIcon from "@rsuite/icons/Close";

import { Table, Button } from "rsuite";
import { changeModalStatus } from "@/redux/features/modal/modalSlice";

const { Column, HeaderCell, Cell } = Table;

const AllTestTable = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.new_test.test_report_param);

  return (
    <Table
      onRowClick={(rowData) => {
        console.log(rowData);
      }}
      className="text-black"
      data={data}
      bordered
      height={300}
    >
      {/* <Column width={60} align="center" fixed>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column> */}

      <Column flexGrow={4} fixed>
        <HeaderCell>Investigation</HeaderCell>
        <Cell dataKey="investigation" />
      </Column>

      <Column flexGrow={4}>
        <HeaderCell>Test</HeaderCell>
        <Cell dataKey="test" />
      </Column>

      <Column flexGrow={2}>
        <HeaderCell>Unit</HeaderCell>
        <Cell dataKey="unit" />
      </Column>

      <Column flexGrow={2}>
        <HeaderCell>Normal Unit</HeaderCell>
        <Cell dataKey="normal_unit" />
      </Column>

      <Column flexGrow={2} fixed="right">
        <HeaderCell>Action</HeaderCell>

        <Cell style={{ padding: "6px" }}>
          {(rowData) => (
            <>
              <Button
                color="red"
                appearance="primary"
                onClick={() => dispatch(removeTestReportParam(rowData.sl_no))}
                startIcon={<CloseIcon />}
              >
                Delete
              </Button>
              <Button
                color="Blue"
                appearance="primary"
                onClick={() => dispatch(removeTestReportParam(rowData.sl_no))}
                startIcon={<CloseIcon />}
              >
                Edit
              </Button>
            </>
          )}
        </Cell>
      </Column>
    </Table>
  );
};
export default AllTestTable;
