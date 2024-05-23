import { styled } from "styled-components";

const TodoWrapper = styled.div`
  font-family: 'MaplestoryOTFBold';
  width: 592px;
  margin: 1rem auto 0;
  border-radius: 4px;
  overflow: hidden;

  .title {
    font-size: 60px;
    display: flex;
    justify-content: center; 
    background: #ffe6a2;
    padding: 10px;
  }

  .count-date {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ffe6a2;

    .date {
      color: brown;
    }
  }

`;

function TodoHeader(props) {
  const { children } = props;
  
  const date = new Date();
  const getDate = () => {
    const days = ['일','월','화','수','목','금','토'];
    const month = date.getMonth();
    const day = date.getDate();
    const DayOfTheWeek = days[date.getDay()];
    return `${month + 1}월 ${day}일 ${DayOfTheWeek}요일`
  }

  return (
    <TodoWrapper>
      <div className="title">TODOLIST</div>
      <div className="count-date">
        <div className="count">{}개 남았어요!</div>
        <div className="date">{getDate()}</div>
      </div>
      <div className="content">{children}</div>
    </TodoWrapper>
  );
};

export default TodoHeader;