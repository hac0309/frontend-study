import React from 'react';
import Comment from './Comment';


const comments = [
  {
    name: '현아',
    content: '앞으로 술을 조절 하겠습니다.....'
  },
  {
    name: '민아',
    content: '젊은이 조심해~'
  },
  {
    name: '지연',
    content: '언니~ 나도~'
  }
];
// 댓글들을 포함하는 컴포넌트
function CommentList(props) {
  return (
    <div>
      {/* <Comment/>
      <Comment/>
      <Comment/> */}

      {/* Quiz: props를 사용하여 name과 content 값 전달(데이터는 자유롭게 작성) */}
      <Comment name="현아" content="ㅇㅇㅇㅇㅇㅇㅇ"/>
      <Comment name="dd" content="dd"/>
      <Comment name="dasdad" content="암어 쌔비지"/>

      {/* 배열을 동적으로 렌더링해야 할 때에는 배열의 map() 함수를 사용 
        일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 만들면 됨 */}
      {comments.map((comment, index) => {
        console.log(index, comment);
        return <Comment key={index} name={comment.name} content={comment.content}/>
      })}

      {/* map() 함수의 결과 */}
      {
        [
          <Comment key={0} name={'현아'} content={'앞으로 술을 조절 하겠습니다.....'}/>,
          <Comment key={1} name={'민아'} content={'젊은이 조심해~'}/>,
          <Comment key={2} name={'지연'} content={'언니~ 나도~'}/>
        ]
      }

      {comments.map((comment, index) => <Comment key={index} name={comment.name} content={comment.content}/>)}
    </div>
  );
}

export default CommentList;