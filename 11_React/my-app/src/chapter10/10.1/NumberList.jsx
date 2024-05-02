const numbers = [1, 2, 3, 4, 5];

function NumberList() {
  // 배열을 반복 렌더링 할때는 key 속성을 필수로 넣어야 함
  // 임시로 배열의 index를 넣어 key 누락 문제를 해결
  const listItems = numbers.map((number, index) => {
    return <li key={index}>{number}</li>; // 일반데이터를 엘리먼트로 바꿔줌 <li>1<li/>.... 
  });

  return (
    <>
    <ul>
      {listItems}
    </ul>

    <ul>
      {numbers.map((numbers, index) => {
        return <li key={index}>{numbers}</li>
      })}
    </ul>
    </>
  );
};

export default NumberList;