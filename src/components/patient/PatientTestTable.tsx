"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { removeTestReportParam } from "@/redux/features/tests/testSlice";
import React from "react";
import CloseIcon from "@rsuite/icons/Close";

import { Table, Button } from "rsuite";
import { changeModalStatus } from "@/redux/features/modal/modalSlice";

const { Column, HeaderCell, Cell } = Table;

const PatientTestTable = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.new_test.test_report_param);

  return (
    <div>
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

        <Column flexGrow={0.5}>
          <HeaderCell>SL</HeaderCell>
          <Cell dataKey="serial_no" />
        </Column>

        <Column flexGrow={2}>
          <HeaderCell>Test Name</HeaderCell>
          <Cell dataKey="test_name" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>Amount</HeaderCell>
          <Cell dataKey="amount" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>Discount</HeaderCell>
          <Cell dataKey="discount" />
        </Column>
        <Column flexGrow={1}>
          <HeaderCell>Delivary Date</HeaderCell>
          <Cell dataKey="delivary_date" />
        </Column>
        <Column flexGrow={0.5}>
          <HeaderCell>Time</HeaderCell>
          <Cell dataKey="delivary_date" />
        </Column>
        <Column flexGrow={0.5}>
          <HeaderCell>Vat</HeaderCell>
          <Cell dataKey="vat" />
        </Column>
        <Column flexGrow={1}>
          <HeaderCell>Remark</HeaderCell>
          <Cell dataKey="remark" />
        </Column>
        <Column flexGrow={1}>
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
                  color="blue"
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
    </div>
  );
};

export default PatientTestTable;
