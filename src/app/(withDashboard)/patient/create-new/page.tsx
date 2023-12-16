"use client";
import PatientTestTable from "@/components/patient/PatientTestTable";
import ModalHms from "@/components/ui/Modal";
import { useAppDispatch } from "@/hooks/hooks";
import { changeModalStatus } from "@/redux/features/modal/modalSlice";
import React from "react";
import { Form, SelectPicker, InputPicker, DatePicker, Button } from "rsuite";

const CreateNew = () => {
  const dispatch = useAppDispatch();
  const genderPicker = ["male", "female", "other"].map((item) => {
    const Label = item.charAt(0).toUpperCase() + item.slice(1);
    return {
      label: Label,
      value: item,
    };
  });
  const refByPicker = ["monir", "Rahim"].map((item) => {
    const Label = item.charAt(0).toUpperCase() + item.slice(1);
    return {
      label: Label,
      value: item,
    };
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-black font-serif my-5">
        Add New Patient
      </h1>
      <div className="mb-10">
        <h4 className="text-md text-black font-serif font-bold">
          Patient Information
        </h4>
        <Form

        //   onChange={settestFormValue}
        //   onSubmit={testInformationSubmitHandler}
        //   formValue={testFormValue}
        //   model={testInformationModel}
        >
          <div className="grid grid-cols-3 ">
            <Form.Group controlId="name">
              <Form.ControlLabel>Patient Name</Form.ControlLabel>
              <Form.Control name="name" type="text" />
            </Form.Group>
            <Form.Group controlId="age">
              <Form.ControlLabel>Age</Form.ControlLabel>
              <Form.Control name="age" type="number" />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.ControlLabel>Phone</Form.ControlLabel>
              <Form.Control name="phone" type="text" />
            </Form.Group>
            <Form.Group controlId="gender">
              <Form.ControlLabel>Gender</Form.ControlLabel>
              <Form.Control
                name="gender"
                accepter={InputPicker}
                className="w-[300px]"
                data={genderPicker}
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.ControlLabel>Address</Form.ControlLabel>
              <Form.Control name="address" type="text" />
            </Form.Group>
            <Form.Group controlId="ref_by">
              <Form.ControlLabel>Ref By</Form.ControlLabel>
              <Form.Control
                name="ref_by"
                accepter={SelectPicker}
                data={refByPicker}
                className="w-[300px]"
              />
            </Form.Group>
            <Form.Group controlId="date">
              <Form.ControlLabel>Date</Form.ControlLabel>
              <Form.Control
                name="date"
                accepter={DatePicker}
                className="w-[300px]"
              />
            </Form.Group>
            <Form.Group controlId="consultant">
              <Form.ControlLabel>Consultant</Form.ControlLabel>
              <Form.Control
                name="consultant"
                accepter={SelectPicker}
                data={refByPicker}
                className="w-[300px]"
              />
            </Form.Group>
            <Form.Group controlId="delivery_date" className="w-full">
              <Form.ControlLabel>Delivary Date</Form.ControlLabel>
              <Form.Control
                name="delivery_date"
                accepter={DatePicker}
                className="w-[300px]"
              />
            </Form.Group>
          </div>
        </Form>
      </div>
      {/* Modal section */}
      <ModalHms size="sm" key={44} title="Test Information">
        <p>This is for adding new tests</p>
      </ModalHms>
      <div>
        <h4 className="text-black font-serif font-bold mb-2">
          Patients test Information
        </h4>
        <div className="mb-2">
          <Button
            color="green"
            appearance="primary"
            onClick={() => dispatch(changeModalStatus())}
          >
            Add Test
          </Button>
        </div>
        <PatientTestTable></PatientTestTable>
      </div>

      <div className="flex justify-end">
        <Button
          color="blue"
          appearance="primary"
          className="mt-2 justify-self-end"
          size="lg"
        >
          Add Patient
        </Button>
      </div>
    </div>
  );
};

export default CreateNew;
