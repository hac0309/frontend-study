import React, { useState } from 'react';

function ConfirmButton(props) {
  const [isCofirmed, setIsConfirmed] = useState(false);
  // const [disabled, SetDisabled] = useState(false)
  console.log(isCofirmed);
  const handleConfirm = () => {
    // setIsConfirmed(true); 둘다 똑같음
    setIsConfirmed(!isCofirmed);
    // setIsConfirmed(isCofirmed => !isCofirmed);
    // setIsConfirmed(isCofirmed => !isCofirmed); // 나중에 이렇게 쓸 때도 있음 일단은 적기만...

    // set함수는 비동기로 처리됨 (=비동기 함수)
    // console.log(isCofirmed);
  }

  return (
    <button type='button' disabled={isCofirmed} onClick={handleConfirm}>
      {isCofirmed ? '확인됨' : '확인하기'}
    </button>

  );
}

export default ConfirmButton;

// Quiz: 사용자에게 확인을 요구하는 버튼 컴포넌트
// 버튼을 누르면 '확인하기'가 '확인됨'으로 변경되면서 버튼 비활성화 처리 해보기

// 무엇을 해야할까?
// 1) isCofirmed 라는 state 만들기
// 2) 버튼을 클릭하면 isCofirmed 상태를 바꾸는 handleConfirm() 이벤트 핸들러 만들기
//  ---> 왜 난 핸들러를 안 만들었을까...
// 3) 삼항 연산자를 사용하여 버튼의 내용을 '확인하기' -> '확인됨'으로 바꾸기
// 4) 버튼 비활성화 처리