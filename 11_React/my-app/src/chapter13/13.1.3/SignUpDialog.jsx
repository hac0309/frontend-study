import { useState } from "react";
import Dialog from "./Dialog";

function SignUpDialog() {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAlert = () => {
    alert(`${input} 강쥐 득표🐶!!`);
  }

  return (
    <Dialog
      title= "💛강쥐듀스 101💛"
      message="당신의 최애 강쥐는?"
    >
      <input type="text" value={input} onChange={handleInputChange}/>
      <button type="button" onClick={handleAlert}>제출!</button>
    </Dialog>
  );
};

export default SignUpDialog;