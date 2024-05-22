import styled from 'styled-components';
import Calendar from "react-calendar";




// 캘린더를 감싸주는 스타일
export const StyledCalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  .react-calendar{
    border: none;
    background: #fdfdea;
    border-radius: 20px;
    width: 600px;
    /* height: 380px; */
  }

  .react-calendar__navigation {
    background: #feffc0;
    border-bottom: 4px solid brown;
    height: 60px;
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
    font-size: 30px;
    color: #6b0202;
  }

  .react-calendar__month-view {
    padding: 12px 12px;
    abbr {
      font-size: 16px;
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
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px dashed #6b02024e;
    border-radius: 4px;
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
    background: #feffc0;
  }
`
// 캘린더를 불러옴
export const StyledCalendar = styled(Calendar)``;




function YourCalendar() {



  return (
    <StyledCalendarWrapper>
      <StyledCalendar 
        calendarType="gregory" 
        prev2Label={null}
        next2Label={null}
        locale="en"
      />
    </StyledCalendarWrapper>
  );
};

export default YourCalendar;

