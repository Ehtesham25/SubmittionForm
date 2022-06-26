import React, { useState } from "react";

import styles from "../styles/Home.module.css";
import styles1 from "../styles/Home.module.css";
import { Progress, Name } from "./components";
import Email from "./Email";
import Details from "./Details";

const Home = () => {
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [nameForm, setNameForm] = useState(true);
  const [emailForm, setEmailForm] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState(false);

  const handleNext = () => {
    if (nameForm) {
      if (!formValue.firstName && !formValue.lastName) {
        alert("please Fill all field!!");
      } else {
        setNameForm(false);
        setEmailForm(true);
      }
    } else if (emailForm) {
      if (!formValue.email) {
        alert("please Fill email field!!");
      } else {
        setNameForm(false);
        setEmailForm(false);
        setConfirmationMessage(true);
      }
    } else if (confirmationMessage) {
      alert("Form Submitted Thank You..");
      setNameForm(true);
      setEmailForm(false);
      setConfirmationMessage(false);
      setFormValue(" ");
    }
  };

  const handlePrevous = () => {
    setNameForm(true), setEmailForm(false);
    if (confirmationMessage) {
      setNameForm(false);
      setConfirmationMessage(false);
      setEmailForm(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h3 className={styles.heading}>WIZARD</h3>
        <div className={styles.card}>
          <Progress number={1} name="Name" color="#25B8D0" />
          <Progress
            number={2}
            name="Email"
            color={emailForm ? "#25B8D0" : "#646464"}
          />
          <Progress
            number={3}
            name="Confirmation"
            color={confirmationMessage ? "#25B8D0" : "#646464"}
          />
        </div>
        <div className={styles.wrapper}>
          {nameForm && (
            <Name formValue={formValue} setformValue={setFormValue} />
          )}

          {emailForm && (
            <Email formValue={formValue} setformValue={setFormValue} />
          )}
          {confirmationMessage && <Details formValue={formValue} />}
        </div>

        <div className={styles1.container1}>
          <button
            onClick={() => handlePrevous()}
            className={styles1.btn}
            style={{
              backgroundColor: "#c0c5cb",
              cursor: nameForm ? "not-allowed" : "pointer",
            }}
            disabled={nameForm}
          >
            Back
          </button>
          <button
            onClick={() => {
              handleNext();
            }}
            className={styles1.btn}
          >
            {confirmationMessage ? "SUBMIT" : "NEXT"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
