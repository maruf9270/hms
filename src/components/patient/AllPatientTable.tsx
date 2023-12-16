import React from "react";
import { Button, Table } from "rsuite";
import CloseIcon from "@rsuite/icons/Close";
const AllPatientTable = () => {
  const { Column, HeaderCell, Cell } = Table;
  return (
    <div>
      <Table
        onRowClick={(rowData) => {
          console.log(rowData);
        }}
        className="text-black"
        bordered
        height={300}
      >
        {/* <Column width={60} align="center" fixed>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column> */}

        <Column flexGrow={2} fixed>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="investigation" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>Age</HeaderCell>
          <Cell dataKey="test" />
        </Column>

        <Column flexGrow={2}>
          <HeaderCell>Phone</HeaderCell>
          <Cell dataKey="unit" />
        </Column>

        <Column flexGrow={2}>
          <HeaderCell>Delivery Date</HeaderCell>
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
                  // onClick={() =>
                  //   dispatch(removeTestReportParam(rowData.sl_no))
                  // }
                  startIcon={<CloseIcon />}
                >
                  Delete
                </Button>
                <Button
                  color="blue"
                  appearance="primary"
                  // onClick={() =>
                  //   dispatch(removeTestReportParam(rowData.sl_no))
                  // }
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

export default AllPatientTable;
