import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

// map() 함수를 이용하여 PostListItem을 반복 렌더링하는 컴포넌트
function PostList(props) {
  const { posts } = props;
  
  return (
    <Wrapper>
      {/* Quiz: posts 배열을 반복 렌더링하기 */}
      {/* key값은 반복해주는 컴포넌트에 넣어주기🎈 */}
      {posts.map((post) => {
        return <PostListItem post={post} key={post.id}/> 
      })}
    </Wrapper>
  );
};

export default PostList;