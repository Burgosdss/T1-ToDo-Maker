import React, { useState } from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import "./SignupPage.css";

function SignupPage(props) {
  const [state, setState] = useState({
    message: ""
  });

  const updateMessage = (msg) => {
    setState({ message: msg });
  }

  return (
    <div className="SignupPage">
      <SignupForm {...props} updateMessage={updateMessage} />
      <p>{state.message}</p>
    </div>
  );
}

export default SignupPage;
