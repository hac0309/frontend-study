import { useState } from "react";
import UnitCounter from "./UnitCounter";
import UnitInput from "./UnitInput";

function UnitCalculator() {
  // Shared State 실습
  const [lenght, setLenght] = useState(1);

  const handleChange = (e) => {
    setLenght(Number(e.target.value));
  };

  return (
    <>
    <p>단위 변환 계산기</p>
    <label>
      <input type="number" value={lenght} onChange={handleChange} min={0}/>미터(m)
    </label>
    <hr />
    <UnitCounter lenght={lenght} onLengthChange={setLenght}/>
    <br />
    <UnitInput unit="mm" lenght={lenght}/>
    <br />
    <UnitInput unit="cm" lenght={lenght}/>
    <br />
    <UnitInput unit="m" lenght={lenght}/>
    <br />
    <UnitInput unit="km" lenght={lenght}/>
    <br />
    <UnitInput unit="inch" lenght={lenght}/>
    <br />
    <UnitCounter lenght={lenght} onLengthChange={setLenght}/>
    </>
  );
};

export default UnitCalculator;