import React from 'react';
import Comment from './Comment';

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
    </div>
  );
}

export default CommentList;