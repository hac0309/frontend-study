import { useNavigate } from "react-router-dom";

function PlacePage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>장소 페이지</h1>

      <button type="button" onClick={() => navigate('/')}>메인으로</button>
    </>
  );
};

export default PlacePage;