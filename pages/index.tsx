import React, { useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";
import { Progress, Name } from "./components";

const Home = () => {
  const router = useRouter();
  const [formData, setFormData]: any = useState({
    firstName: "",
    lastName: "",
  });

  const handleSubmit = () => {
    if (!formData.firstName || !formData.lastName) {
      alert("please, fill all field");
    } else {
      router.push("/Email");
      localStorage.setItem("firstName", formData.firstName);
      localStorage.setItem("lastName", formData.lastName);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h3 className={styles.heading}>WIZARD</h3>
        <div className={styles.card}>
          <Progress number={1} formName="Name" color="#25B8D0" />
          <Progress number={2} formName="Email" color="#646464" />
          <Progress number={3} formName="Confirmation" color="#646464" />
        </div>
        <div className={styles.wrapper}>
          <Name
            formData={formData}
            setFormData={setFormData}
            firstName={formData.firstName}
            lastName={formData.lastName}
          />
        </div>
        <div className={styles.container1}>
          <button
            onClick={() => {
              handleSubmit();
            }}
            className={styles.btn}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
