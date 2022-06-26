import React from "react";
import styles from "../../styles/Progress.module.css";

interface props {
  name: string;
  number: number;
  color: any;
}
const Progress = ({ number, name, color }: props) => {
  return (
    <div className={styles.container}>
      <div className={styles.main} style={{ backgroundColor: color }}>
        <p className={styles.text}>{number}</p>
      </div>
      <h5>{name}</h5>
    </div>
  );
};

export default Progress;
