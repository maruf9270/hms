import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { changeModalStatus } from "@/redux/features/modal/modalSlice";
import React, { useEffect } from "react";
import { Modal, ButtonToolbar, Button, Placeholder } from "rsuite";

const ModalHms = ({
  size,
  children,
  title,
}: //   submitHandler,
{
  size: string;
  children: React.ReactNode;
  title: string;
  //   submitHandler: () => void;
}) => {
  const modal_status = useAppSelector(
    (state) => state.modal_status.is_modal_open
  );

  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(changeModalStatus());

  return (
    <Modal size={size} open={modal_status} onClose={handleClose}>
      <Modal.Header>
        <Modal.Title className="text-center text-3xl font-bold">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} appearance="subtle">
          Cancel
        </Button>
        <Button onClick={handleClose} appearance="primary">
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalHms;
