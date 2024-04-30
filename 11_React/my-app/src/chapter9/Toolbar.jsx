import React from 'react';

const styles = {
  wrapper: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid gray'
  },
  greeting: {
    marginRight: 8
  },
};

function Toolbar(props) {
  const { isLoggedIn, onClickLogin, onClickLogout } = props; // 객체 구조 분해 할당

  return (
    <div style={styles.wrapper}>
      {/* Quiz:
        로그인/로그아웃 버튼을 누를 때마다 isLoggedIn 값이 바뀌고
        로그인/로그아웃 버튼이 바뀌도록 조건부 렌더링
        로그인 상태이면 인사말이 나오도록 조건부 렌더링
      */}
      {/* {isLoggedIn && <span style={styles.greeting}>환영..ㅎㅇ...현아....</span>} */}
      {isLoggedIn 
      ? ( // 가독성을 위해 괄호
        <>
          <span style={styles.greeting}>환영..ㅎㅇ...현아....</span>
          <button type='button' onClick={onClickLogout}>로그아웃</button>
        </>
      )
      : <button type='button' onClick={onClickLogin}>로그인</button>
      }
    </div>
  );
}

export default Toolbar;