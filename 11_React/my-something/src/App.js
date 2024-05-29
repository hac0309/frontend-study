import styled, { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import './App.css';
import MainPage from "./components/MainPage";
import "react-calendar/dist/Calendar.css";
import YourCalendar from "./components/YourCalendar";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Modal from "./components/Modal";



const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'MaplestoryOTFBold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'S-CoreDream-3Light';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

* {
  font-family: 'MaplestoryOTFBold';
}

.wrapper-group {
  display: flex;
  width: 100%;
  justify-content: center;

  
}

`;



function App() {
  const [todos, setTodos] = useState([]);
  
  const [selectedDate, setSelectedDate] = useState(new Date());

  // 추가
  const handleInsert = (text) => {
    const todo = {
      id: uuid(),
      text,
      done: false,
      date: selectedDate.toISOString().split('T')[0], // YYYY-MM-DD
    };
    setTodos([...todos, todo]);
  };

  // 삭제
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => {
      return todo.id !== id;
    }))
  };

  // 업데이트
  const handleUpdate = (id, newText) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, text: newText } : todo
    )));
  };

  // 완료체크
  const handleCheck = (id) => {
    setTodos(todos.map((todo) => {
      return todo.id === id ? {...todo, done: !todo.done} : todo;
    }))
  };

  // 남은 할일
  const countClearTodos = todos.filter(todo => !todo.done).length;
  
  // 로컬 스토리지 가져오기
  useEffect(() => {
    const dbTodos = JSON.parse(localStorage.getItem('Todo_Data') || '[]');
    setTodos(dbTodos);
  }, []);

  // 로컬 스토리지에 저장하기
  useEffect(() => {
    localStorage.setItem('Todo_Data', JSON.stringify(todos));
  }, [todos]);

  // 필터된 날짜 할일 
  const filteredTodos = todos.filter(todo => 
    todo.date === selectedDate.toISOString().split('T')[0]
  );


  return (
    <>
    <GlobalStyle/>
    <div className="wrapper-group">
      <YourCalendar todos={todos} selectedDate={selectedDate} onDateClick={setSelectedDate}/>
      <MainPage 
        todos={filteredTodos} 
        onInsert={handleInsert} 
        onDelete={handleDelete} 
        onCheck={handleCheck}
        count={countClearTodos}
        onUpdate={handleUpdate}
        selectedDate={selectedDate}
      />
    </div>
    </>
  );
}

export default App;
