import React, { useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/Form.module.css";
import styles1 from "../styles/Home.module.css";

interface props {
  formValue: any;
  setformValue: any;
 
}
const Email = ({formValue, setformValue}:props) => {
  const [email, setEmail]: any = useState();

  return (
    <>         
          <div className={styles1.wrapper}>
            <p className={styles.subheading}>Email</p>
            <br />
            <input
              value={formValue.email}
              onChange={(e) => setformValue({...formValue,email:e.target.value})}
              placeholder="Email"
              className={styles.input}
            />
          </div>
    </>
  );
};
export default Email;
