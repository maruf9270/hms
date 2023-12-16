"use client";
import React from "react";
import { Button, Form, Uploader } from "rsuite";
import AvatarIcon from "@rsuite/icons/legacy/Avatar";

// Function for previewing file
function previewFile(
  file: Blob,
  callback: { (value: any): void; (arg0: string | ArrayBuffer | null): void }
) {
  const reader = new FileReader();
  reader.onloadend = () => {
    callback(reader.result);
  };
  reader.readAsDataURL(file);
}

const CreateNewDoctor = () => {
  const fromRef = React.useRef();
  const [fileInfo, setFileInfo] = React.useState();
  const [doctorInfo, setDoctorInfo] = React.useState({
    name: {
      first_name: "",
      middle_name: "",
      last_name: "",
    },
    father_name: "",
    current_designation: "",
    phone: "",
    image: "",
  });
  const formSubmissionHandler = () => {
    setDoctorInfo({
      name: {
        first_name: "",
        middle_name: "",
        last_name: "",
      },
      father_name: "",
      current_designation: "",
      phone: "",
      image: "",
    });
  };
  return (
    <div className="p-5">
      <div className="my-5">
        <h2 className="text-center text-black text-4xl font-serif">
          Add new Doctor
        </h2>
      </div>
      <div className="my-5">
        <Form
          onChange={setDoctorInfo}
          onSubmit={formSubmissionHandler}
          ref={fromRef}
          formValue={doctorInfo}
        >
          <div className="grid grid-cols-3">
            <Form.Group controlId="name.first_name">
              <Form.ControlLabel>First Name</Form.ControlLabel>
              <Form.Control name="name.first_name" type="text" />
            </Form.Group>
            <Form.Group controlId="name.middle_name">
              <Form.ControlLabel>Middle Name</Form.ControlLabel>
              <Form.Control name="name.middle_name" type="text" />
            </Form.Group>
            <Form.Group controlId="name.last_name">
              <Form.ControlLabel>Last Name</Form.ControlLabel>
              <Form.Control name="name.last_name" type="text" />
            </Form.Group>
            <Form.Group controlId="father_name">
              <Form.ControlLabel>Father`s Name</Form.ControlLabel>
              <Form.Control name="father_name" type="text" />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.ControlLabel>Phone</Form.ControlLabel>
              <Form.Control name="phone" />
            </Form.Group>

            <Form.Group controlId="current_designation">
              <Form.ControlLabel>Current Designation</Form.ControlLabel>
              <Form.Control name="current_designation" type="text" />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Control
                name="image"
                fileListVisible={false}
                accepter={Uploader}
                action="//http://localhost:"
                autoUpload={false}
                onChange={(file) => {
                  console.log(file);
                  previewFile(file[0].blobFile, (value) => {
                    setFileInfo(value);
                  });
                }}
                className="border border-stone-300 rounded-xl"
              >
                <div className="h-[150px] w-[150px] flex items-center justify-center">
                  {fileInfo ? (
                    <img src={fileInfo} width="100%" height="100%" />
                  ) : (
                    <AvatarIcon style={{ fontSize: 80 }} />
                  )}
                </div>
              </Form.Control>
            </Form.Group>
          </div>
          <div className="flex justify-end">
            <Button color="green" appearance="primary" type="submit">
              Add Doctor
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateNewDoctor;
