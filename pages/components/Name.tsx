import React from "react";
import styles from "../../styles/Form.module.css";

interface props {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<string>>;
  lastName: any;
  firstName: any;
}
const Name = ({ formData, setFormData }: props) => {
  return (
    <>
      <p className={styles.subheading}>Name</p>
      <br />
      <input
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
        placeholder="First Name"
        className={styles.input}
      />
      <input
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        placeholder="Last Name"
        className={styles.input}
      />
    </>
  );
};
export default Name;
