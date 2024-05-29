import { styled } from "styled-components";

const TodoWrapper = styled.div`
  font-family: 'MaplestoryOTFBold';
  width: 592px;
  margin: 1rem 2rem 0 0;
  border-radius: 4px;
  overflow: hidden;
  padding: 10px;

  .title {
    font-size: 60px;
    display: flex;
    justify-content: center; 
    background: #ffe6a2;
    padding: 10px;
    border-radius: 15px;
  }

  .count-date {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    /* border-bottom: 1px solid #ffe6a2; */

    .date {
      color: brown;
    }
  }

`;

function TodoHeader(props) {
  const { children, count, selectedDate } = props;


  return (
    <TodoWrapper>
      <div className="title">TODOLIST</div>
      <div className="count-date">
        <div className="count">{
          count === 0 ? '모두 완료했어요!': count+'개 남았습니다'
        }</div>
        <div className="date">{selectedDate.toDateString()}</div>
      </div>
      <div className="content">{children}</div>
    </TodoWrapper>
  );
};

export default TodoHeader;