import React, { useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/Form.module.css";
import styles1 from "../styles/Home.module.css";
import { Progress } from "./components";

interface props {
  setFormData: any;
  email: any;
  formData: any;
}
const Email = () => {
  const [email, setEmail]: any = useState();
  const router = useRouter();
  const handleNext = () => {
    if (!email) {
      alert("email is Required");
    } else {
      router.push("/Details");
      localStorage.setItem("email", email);
    }
  };
  const handleShow = () => {
    router.back();
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <h3 className={styles1.heading}>WIZARD</h3>
          <div className={styles.card}>
            <Progress number={1} formName="Name" color="#25B8D0" />
            <Progress number={2} formName="Email" color="#25B8D0" />
            <Progress number={3} formName="Confirmation" color="#646464" />
          </div>
          <div className={styles1.wrapper}>
            <p className={styles.subheading}>Email</p>
            <br />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className={styles.input}
            />
          </div>
          <div className={styles1.container1}>
            <button
              onClick={() => handleShow()}
              className={styles1.btn}
              style={{ backgroundColor: "#c0c5cb" }}
            >
              Back
            </button>
            <button
              onClick={() => {
                handleNext();
              }}
              className={styles1.btn}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Email;
