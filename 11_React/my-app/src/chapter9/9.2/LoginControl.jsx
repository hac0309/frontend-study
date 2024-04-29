import React, { useState } from 'react';
import Greeting from '../9.1/Greeting';

function LoginButton(props) {
  return <button type='button' onClick={props.onClick}>로그인</button>;
}

function LogoutButton(props) {
  return <button type='button' onClick={props.onClick}>로그아웃</button>;
} // props.onClick -> 부모로 부터 받아오겠다는 의미

function LoginControl(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogout}/>;
  } else {
    button = <LoginButton onClick={handleLogin}/>;
  } // 엘리먼트를 변수에 담을 수 있음
  // 2단계: if문 사용 + button 변수에 컴포넌트를 대입

  return (
    <>
      {/* Greeting 컴포넌트의 재사용 */}
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </>
  );
}

export default LoginControl;