import { useState } from "react";

function UnitCounter(props) {
  const {lenght, onLengthChange} = props;
  // Local State 실습
  // 컴포넌트마다 각각 개별적인 상태를 갖게 됨
  const [localLenght, setLocalLenght] = useState(1);

  return (
    <>
      {/* Local State */}
      {/* <button type="button" onClick={() => {
        setLocalLenght(Math.max(localLenght - 1, 0))}}>-</button>
      {localLenght}
      <button type="button" onClick={() => {
        setLocalLenght(localLenght + 1)}}>+</button> */}

      {/* Shared State */}
      <button type="button" onClick={() => {
        onLengthChange(Math.max(lenght - 1, 0))}}>-</button>
      {lenght}
      <button type="button" onClick={() => {
        onLengthChange(lenght + 1)}}>+</button>
    </>
  );
};

export default UnitCounter;