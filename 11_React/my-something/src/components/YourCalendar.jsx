import styled from 'styled-components';
import Calendar from "react-calendar";




// 캘린더를 감싸주는 스타일
export const StyledCalendarWrapper = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  position: relative;
  padding: 10px;
  font-family: 'MaplestoryOTFBold';

  
  .react-calendar{
    border: none;
    background: #fdfdea;
    border-radius: 20px;
    min-width: 1100px;
    margin-top: 1rem;
    font-family: 'MaplestoryOTFBold';
    /* height: 900px; */
    abbr[title] {
    text-decoration: none;
    font-size: 28px;
    }
  }

  .react-calendar__navigation {
    background: #feffc0;
    border-bottom: 4px solid brown;
    height: 100px;
    border-radius: 20px 20px 0 0;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #ffe6a2;
    border-radius: 20px 20px 0 0;
  }

  .react-calendar__navigation button:disabled {
    background-color: #feffc0;
    border-radius: 20px 20px 0 0;
  }

  .react-calendar__navigation button {
    font-weight: 900;
    font-size: 40px;
    color: #6b0202;
  }

  .react-calendar__month-view {
    padding: 12px 12px;
    abbr {
      font-size: 30px;
    }
  }

  .react-calendar__month-view__weekdays {
    abbr {
      font-size: 16px;
      font-weight: 900;
      color: #6b0202;
    }
  }

  .react-calendar__tile {
    text-align: center;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px dashed #6b02024e;
    border-collapse: collapse;
    border-radius: 4px;
    padding: 16px;
  }

/*hover, focus, 선택됐을 시 */
.react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background: #ffc288;
    /* border-radius: 14px; */
  }

  // 오늘날짜
  .react-calendar__tile--now {
    background: #ffebc0;

    abbr {
      color: #1400ae;
    }
  }
`

const Count = styled.span`
  font-size: 32px;
  margin-top: 40px;
  color: #03d9ff;
`;
// 캘린더를 불러옴
export const StyledCalendar = styled(Calendar)``;




function YourCalendar(props) {
const { todos, onDateClick, selectedDate } = props;

  // 선택 날짜 todo 갯수
  const countTodosForDate = (date) => {
    return todos.filter(todo => todo.date === date && !todo.done).length;
  };

  // 각 날짜에 대한 Todo 개수를 표시할 함수
  const tileContent = ({ date }) => {
    const formattedDate = date.toISOString().split('T')[0];
    const count = countTodosForDate(formattedDate);
    if (count === 0 && todos.some(todo => todo.date === formattedDate)) {
      return <Count>👏</Count>; 
    } else if (count > 0) {
      return  <Count>{count}</Count>; 
    } else {
      return null; 
    }
  };




  return (
    <StyledCalendarWrapper>
      <StyledCalendar 
        calendarType="gregory" 
        prev2Label={null}
        next2Label={null}
        locale="en"
        tileContent={tileContent}
        // tileContent={ }
        value={selectedDate}
        onChange={onDateClick}
      />
    </StyledCalendarWrapper>
  );
};

export default YourCalendar;

