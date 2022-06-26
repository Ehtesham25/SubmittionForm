import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/Form.module.css";
import styles1 from "../styles/Home.module.css";
import { Progress } from "./components";

interface props {
  formValue?: any;
}
const Details = ({ formValue }: props) => {
  return (
    <>
      <h4 className={styles.heading}>Confirmation</h4>
      <div className={styles.info}>
        <h4>First Name:</h4>
        <h5 className={styles.detail}>{formValue.firstName}</h5>
      </div>
      <div className={styles.info}>
        <h4>Last Name:</h4>
        <h5 className={styles.detail}>{formValue.lastName}</h5>
      </div>
      <div className={styles.info}>
        <h4>Email:</h4>
        <h5 className={styles.detail}>{formValue.email}</h5>
      </div>
    </>
  );
};
export default Details;
