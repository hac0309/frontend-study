import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PostDetail from './components/PostDetail';

// POST앱 CRUD 만들기
// C: Create(등록) 
// R: Read(목록, 상세보기)
// U: Update(수정)
// D: Delete(삭제)

function App() {
  // 서버에서 가져온 데이터라고 가정
  const [posts, setPosts] = useState(['리액트 잘 쓰려면?', '자바스크립트 핵심 문법', 'CSS 스타일링 가이드']);

  const [showPostDetail, setShowPostDetail] = useState(false);
  const handleShowPostDetail = () => {
    setShowPostDetail(!showPostDetail)
  }

  const [currentIndex, setCurrentIndex] = useState(null); // 내가 보고있는 글의 index




  return (
    <>
      <header className="header--dark">
        <h4>ChaCha</h4>
        <nav>
          <ul>
            <li>트렌딩</li>
            <li>최신</li>
          </ul>
        </nav>
      </header>

      <div className="inner">
        {/* 포스트 목록 */}
        {/* <div className="list">
          <h4>{posts[0]}</h4>
          <p>2024.05.07</p>
          <p>by chacha</p>
        </div>
        <div className="list">
          <h4>{posts[1]}</h4>
          <p>2024.05.05</p>
          <p>by chacha</p>
        </div>
        <div className="list">
          <h4>{posts[2]}</h4>
          <p>2024.05.01</p>
          <p>by chacha</p>
        </div> */}

        {/* Quiz: map()을 이용하여 posts 반복 렌더링하기 */}
        {posts.map((post , index) => {
          return (
            <div key={index} className="list" 
              onClick={() => {
                setShowPostDetail(!showPostDetail);
                setCurrentIndex(index);
              }}>
              <h4>{post}</h4>
              <p>2024.05.01</p>
              <p>by chacha</p>
            </div>
          );
        })}

        {/* 포스트 상세보기 */}
        {/* Quiz: 조건부 렌더링 */}
        {showPostDetail? <PostDetail posts={posts} currentIndex={currentIndex} /> : null}
        {/* {showPostDetail && <PostDetail/>} */} 
      </div>
    </>
  );
}

export default App;
