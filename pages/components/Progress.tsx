import React from "react";
import styles from "../../styles/Progress.module.css";

interface props {
  formName: string;
  number: number;
  color: any;
  // email: boolean;
  // confirm: boolean;
}
const Progress = ({ number, formName, color }: props) => {
  return (
    <div className={styles.container}>
      <div className={styles.main} style={{ backgroundColor: color }}>
        <p className={styles.text}>{number}</p>
      </div>
      <h5>{formName}</h5>
    </div>
  );
};

export default Progress;
