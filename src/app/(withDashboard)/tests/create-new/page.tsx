"use client";
import React, { SetStateAction, useEffect, useRef, useState } from "react";
import { Form, Header, Button, Schema } from "rsuite";
import NewTestTable from "@/components/tests/NewTestTable";
import ModalHms from "@/components/ui/Modal";
import { useAppDispatch } from "@/hooks/hooks";
import { changeModalStatus } from "@/redux/features/modal/modalSlice";
import { addNewTestReportParam } from "@/redux/features/tests/testSlice";

const Page = () => {
  // Types
  type TestParameter = {
    investigation: string;
    test: string;
    unit: string;
    normal_unit: string;
  };

  type TestFormValue = {
    test_name: string;
    speciman: string;
    type: string;
    report_group: string;
    hospital_group: string;
    price: string;
    vat_rate: string;
    process_time: string;
    price_after_vat: string;
  };

  const dispatch = useAppDispatch();

  // State for Test Information Form
  const [testFormValue, setTestFormValue] = useState<TestFormValue>({
    test_name: "",
    speciman: "",
    type: "",
    report_group: "",
    hospital_group: "",
    price: "",
    vat_rate: "",
    process_time: "",
    price_after_vat: "",
  });

  // State for Test Result Parameter Form
  const [formValue, setFormValue] = useState<TestParameter>({
    investigation: "",
    test: "",
    unit: "",
    normal_unit: "",
  });

  // Handlers
  const testInformationSubmitHandler = () => {
    console.log(testFormValue);
  };

  const handleSubmit = () => {
    console.log(formValue);
    dispatch(addNewTestReportParam(formValue));
  };

  // Model
  const testInformationModel = Schema.Model({
    test_name: Schema.Types.StringType().isRequired("This field is required."),
    speciman: Schema.Types.StringType().isRequired("This field is required."),
    type: Schema.Types.StringType().isRequired("This field is required."),
    report_group: Schema.Types.StringType().isRequired(
      "This field is required."
    ),
    hospital_group: Schema.Types.StringType().isRequired(
      "This field is required."
    ),
    price: Schema.Types.NumberType().isRequired("This field is required."),
    vat_rate: Schema.Types.NumberType().isRequired("This field is required."),
    process_time: Schema.Types.NumberType().isRequired(
      "This field is required."
    ),
  });
  const testResultParamModel = Schema.Model({
    investigation: Schema.Types.StringType().isRequired(
      "This field is required"
    ),
    test: Schema.Types.StringType().isRequired("This field is required"),
    unit: Schema.Types.StringType().isRequired("This field is required"),
    normal_unit: Schema.Types.StringType().isRequired("This field is required"),
  });
  return (
    <div className=" min-h-screen rounded-md p-5">
      <h2 className="text-3xl font-bold text-center text-black font-serif">
        Add New Test
      </h2>
      <div>
        <Form
          onChange={(formValue, event) =>
            setTestFormValue(formValue as TestFormValue)
          }
          onSubmit={testInformationSubmitHandler}
          formValue={testFormValue}
          model={testInformationModel}
        >
          <div className="w-full grid grid-cols-3 my-5">
            <Form.Group controlId="test_name">
              <Form.ControlLabel>Test Name</Form.ControlLabel>
              <Form.Control name="test_name" type="text" />
            </Form.Group>

            <Form.Group controlId="speciman">
              <Form.ControlLabel>Speciman</Form.ControlLabel>
              <Form.Control name="speciman" type="text" />
            </Form.Group>
            <Form.Group controlId="type">
              <Form.ControlLabel>Type</Form.ControlLabel>
              <Form.Control name="type" type="text" />
            </Form.Group>
            <Form.Group controlId="report_group">
              <Form.ControlLabel>Report Grout</Form.ControlLabel>
              <Form.Control name="report_group" type="text" />
            </Form.Group>

            <Form.Group controlId="hospital_group">
              <Form.ControlLabel>Hospital Group</Form.ControlLabel>
              <Form.Control name="hospital_group" type="text" />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.ControlLabel>Price</Form.ControlLabel>
              <Form.Control name="price" type="number" />
            </Form.Group>
            <Form.Group controlId="vat_rate">
              <Form.ControlLabel>Vat Rate</Form.ControlLabel>
              <Form.Control name="vat_rate" type="number" />
            </Form.Group>

            <Form.Group controlId="process_time">
              <Form.ControlLabel>Process Time</Form.ControlLabel>
              <Form.Control name="process_time" type="number" />
            </Form.Group>
            <Form.Group controlId="price_after_vat">
              <Form.ControlLabel>Price After Vat</Form.ControlLabel>
              <Form.Control name="price_after_vat" type="number" />
            </Form.Group>
          </div>

          <div className="mt-10">
            <div className="my-5">
              <h2 className="text-3xl font-bold text-center text-black font-serif">
                Test Result Parameter
              </h2>
            </div>
            <NewTestTable></NewTestTable>
            <div className="flex justify-end mt-5">
              <Button color="blue" appearance="primary" type="submit" size="lg">
                Add test
              </Button>
            </div>
          </div>
        </Form>
      </div>
      <div>
        <ModalHms size="sm" title="Test Result Parameter">
          <div>
            <Form
              fluid
              onSubmit={handleSubmit}
              onChange={(formValue, event) =>
                setFormValue(formValue as TestParameter)
              }
              formValue={formValue}
              model={testResultParamModel}
            >
              <Form.Group controlId="investigation">
                <Form.ControlLabel>Investigation</Form.ControlLabel>
                <Form.Control name="investigation" />
              </Form.Group>

              <Form.Group controlId="test">
                <Form.ControlLabel>Test</Form.ControlLabel>
                <Form.Control name="test" />
              </Form.Group>
              <div className="grid grid-cols-2 gap-2">
                <Form.Group controlId="unit">
                  <Form.ControlLabel>Unit</Form.ControlLabel>
                  <Form.Control name="unit" />
                </Form.Group>
                <Form.Group controlId="normal_unit">
                  <Form.ControlLabel>Normal Unit</Form.ControlLabel>
                  <Form.Control name="normal_unit" />
                </Form.Group>
              </div>
              <Button type="submit">Add</Button>
            </Form>
          </div>
        </ModalHms>
      </div>
    </div>
  );
};

export default Page;
