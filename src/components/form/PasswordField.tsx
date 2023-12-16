"use client";
import { Input, InputGroup } from "rsuite";
import EyeIcon from "@rsuite/icons/legacy/Eye";
import EyeSlashIcon from "@rsuite/icons/legacy/EyeSlash";
import { useState } from "react";

const styles = {
  width: 300,
};

const Password = () => {
  const [visible, setVisible] = useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };
  return (
    <InputGroup inside style={styles}>
      <Input type={visible ? "text" : "password"} />
      <InputGroup.Button onClick={handleChange}>
        {visible ? <EyeIcon /> : <EyeSlashIcon />}
      </InputGroup.Button>
    </InputGroup>
  );
};

export default Password;
