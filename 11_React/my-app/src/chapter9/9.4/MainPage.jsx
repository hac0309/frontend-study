import React, { useState } from 'react';

const styles = {
  button: {
    height: 40,
    width: 200,
    border: '2px solid black',
    borderRadius: '15px',
    backgroundColor: 'royalblue',
    color: 'white',
  },
  warning: {
    backgroundColor: '#ffc107',
    textAlign: 'center',
    width: '100%',
    padding: 10,
    fontSize: '14pt',
    color: 'red',
  },
  danger: {
    backgroundColor: '#dc3545',
    textAlign: 'center',
    width: '100%',
    padding: 10,
    fontSize: '14pt',
    color: '#ffc107',
  }
};

function WarningBanner(props) {
  // props.warn이 false라면 null값을 리턴하기 때문에 컴포넌트는 렌더링되지 않음
  console.log(props.warn);
  if (!props.warn) {
    return null;
  }

  return <div style={styles.warning}>Warning!</div>;
}


function DangerBanner() {
  return <div style={styles.danger}>단거!</div>;
}

function MainPage(props) {

  const [showWarning, setShowWarning] = useState(false);

  const handleToggle = () => {
    setShowWarning(!showWarning);
  };

  return (
    <>
      {/* 조건에 따라 렌더링 막기 */}
      <WarningBanner warn={showWarning} />

      {/* Quiz:조건부 렌더링으로 처리하는 것도 가능 */}
      {/* {showWarning ? <DangerBanner/> : null} */}
      {showWarning && <DangerBanner/>} 

      <button type='button' style={styles.button} onClick={handleToggle}>
        {showWarning ? 'Warning!@@@!' : 'Warning??'}
      </button>
    </>
  );
}

export default MainPage;