import { useState } from "react";

function Reservation() {
  // 여러 개의 입력 제어하기 => 여러 개의 state 선언
  const [breakfast, setBreakfast] = useState(false);
  const [numberOfGuest, setNumberOfGuest] = useState(1);
  const [roomType, setRoomType] = useState('SINGLE');

  const handleBreakfastChange = (e) => {
    setBreakfast(e.target.checked);
  };

  const handleGuestsChange = (e) => {
    setNumberOfGuest(Number(e.target.value));
  };

  const handleRoomChange = (e) => {
    setRoomType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`조식 여부: ${breakfast}, 투숙객 수:${numberOfGuest}, 룸 타입: ${roomType}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        조식여부:
        <input 
          type="checkbox"
          // checked 속성은 checkbox와 radio 타입에 존재하고 boolean 타입의 값
          checked={breakfast}
          onChange={handleBreakfastChange}
        />
      </label>

      <br />

      <label>
        투숙객 수:
        <input 
          type="number"
          value={numberOfGuest}
          onChange={handleGuestsChange}
        />
      </label>

      <br />

      룸 타입:
      <label>
        <input 
          type="radio" 
          name="roomType"
          value="SINGLE"
          checked={roomType === 'SINGLE'}
          onChange={handleRoomChange}
        />
        싱글
      </label>
      <label>
        <input 
          type="radio" 
          name="roomType"
          value="DOUBLE"
          checked={roomType === 'DOUBLE'}
          onChange={handleRoomChange}
        />
        더블
      </label>
      <label>
        <input 
          type="radio" 
          name="roomType"
          value="TWIN"
          checked={roomType === 'TWIN'}
          onChange={handleRoomChange}
        />
        트윈
      </label>

      <br />

      <button type="submit">제출</button>
    </form>
  );
};

export default Reservation;