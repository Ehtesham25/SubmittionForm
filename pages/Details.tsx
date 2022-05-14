import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/Form.module.css";
import styles1 from "../styles/Home.module.css";
import { Progress } from "./components";

const Details = () => {
  const router = useRouter();

  const [formData, setFormData]: any = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleShow = () => {
    router.back();
  };

  const handleConfirm = () => {
    router.push("/");
    localStorage.clear();
  };
  
  useEffect(() => {
    formData.firstName = localStorage?.getItem("firstName");
    formData.lastName = localStorage?.getItem("lastName");
    formData.email = localStorage?.getItem("email");
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h3 className={styles1.heading}>WIZARD</h3>
        <div className={styles.card}>
          <Progress number={1} formName="Name" color="#25B8D0" />
          <Progress number={2} formName="Email" color="#25B8D0" />
          <Progress number={3} formName="Confirmation" color="#25B8D0" />
        </div>
        <h4 className={styles.heading}>Confirmation</h4>
        <div className={styles.info}>
          <h4>First Name:</h4>
          <h5 className={styles.detail}>{formData.firstName}</h5>
        </div>
        <div className={styles.info}>
          <h4>Last Name:</h4>
          <h5 className={styles.detail}>{formData.lastName}</h5>
        </div>
        <div className={styles.info}>
          <h4>Email:</h4>
          <h5 className={styles.detail}>{formData.email}</h5>
        </div>
        <div className={styles1.container1}>
          <button
            onClick={() => handleShow()}
            className={styles1.btn}
            style={{ backgroundColor: "#c0c5cb" }}
          >
            Back
          </button>
          <button className={styles1.btn} onClick={() => handleConfirm()}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
export default Details;
