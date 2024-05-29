import { styled } from "styled-components";
import { MdClose } from "react-icons/md";

const ModalBG = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(189, 189, 189, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  font-family: 'S-CoreDream-3Light';
`;

const ModalWrapper = styled.div`
  width: 400px;
  height: 155px;
  background-color: #ffffff;
  box-shadow: 0px, 2px, 12px rgba(0,0,0,0.7);
  border-radius: 15px;
  overflow-y: auto;
  padding: 15px;

  .header {
    font-size: 30px;
    font-weight: 900;
    padding: 10px;
  }

  .body {
    padding: 10px;
    margin-bottom: 15px;
    font-weight: 500;
  }

  .footer {
    display: flex;
    padding: 10px;
    justify-content: flex-end;

    .btn-1 {
      width: 50px;
      height: 30px;
      margin: 0 8px;
      border: none;
      border-radius: 5px;
      color: #ffffff;
      background-color: #f0a2a2;
      cursor: pointer;
      font-family: 'S-CoreDream-3Light';
      
      &:hover {
        background-color: #e98484;
      }
    }
    
    .btn-2 {
      width: 50px;
      /* padding: 0 8px; */
      border: none;
      background-color: #cccccc;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
      font-family: 'S-CoreDream-3Light';
      
      &:hover {
        background-color: #a5a5a5;
      }
    }
  }
`;

function Modal(props) { 
  const { onClose, title, content, delBtn, children } = props;

  return (
    <ModalBG>
      <ModalWrapper>
        <div className="header">
          <span>{title}</span>
        </div>
        <div className="body">
          {content}
        </div>
        <div className="footer">
          {children}
          {/* <button type="button" className="btn-1" >확인</button> */}
          {delBtn &&
          <button type="button" className="btn-2" onClick={onClose}>닫기</button>
          }
        </div>
      </ModalWrapper>
    </ModalBG>
  );
};

export default Modal;