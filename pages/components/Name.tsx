import React from "react";
import styles from "../../styles/Form.module.css";

interface props {
  formValue?: any;
  setformValue?: any;
}
const Name = ({ formValue, setformValue }: props) => {
  return (
    <>
      <p className={styles.subheading}>Name</p>
      <br />
      <input
        value={formValue.firstName}
        onChange={(e) =>
          setformValue({ ...formValue, firstName: e.target.value })
        }
        placeholder="First Name"
        className={styles.input}
      />
      <input
        value={formValue.lastName}
        onChange={(e) =>
          setformValue({ ...formValue, lastName: e.target.value })
        }
        placeholder="Last Name"
        className={styles.input}
      />
    </>
  );
};
export default Name;
