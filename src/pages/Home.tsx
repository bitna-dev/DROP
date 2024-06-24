import { PostProps } from '@components/models/post'
import PostBox from '@components/posts/PostBox'
import PostForm from '@components/posts/PostForm'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { colors } from '@styles/colorPalette'
import { useState } from 'react'

const posts: PostProps[] = [
  {
    id: '1',
    email: '22@gmail.com',
    content: '내용입니다.',
    createdAt: '2024-01-22',
    uid: '123123',
  },
  {
    id: '2',
    email: '2@gmail.com',
    content: '내용입니다1.',
    createdAt: '2024-01-22',
    uid: '123123',
  },
  {
    id: '3',
    email: '122@gmail.com',
    content: '내용입니다2.',
    createdAt: '2024-04-22',
    uid: '123123',
  },
  {
    id: '4',
    email: '22333@gmail.com',
    content: '내용입니다3.',
    createdAt: '2024-03-22',
    uid: '123123',
  },
  {
    id: '5',
    email: '22444@gmail.com',
    content: '내용입니다4.',
    createdAt: '2024-08-11',
    uid: '123123',
  },
]
const Home = () => {
  const [isActive, setIsActive] = useState<boolean>(false)
  return (
    <HomeContainer>
      <HomeTitle>DROP</HomeTitle>
      <HomeTabs>
        <div
          css={isActive ? null : ActiveStyle}
          onClick={() => {
            setIsActive(false)
          }}
        >
          For You
        </div>
        <div
          css={isActive ? ActiveStyle : null}
          onClick={() => {
            setIsActive(true)
          }}
        >
          Following
        </div>
      </HomeTabs>
      <PostForm />
      {posts?.map((post) => <PostBox key={post.id} post={post} />)}
    </HomeContainer>
  )
}

const HomeContainer = styled.div``
const HomeTitle = styled.div`
  padding: 16px;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  font-size: 1.8rem;
  font-family: 'Rubik Mono One';
  font-style: italic;
  color: ${colors.green};
`
const HomeTabs = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  color: ${colors.gray400};
  div {
    text-align: center;
    font-weight: 600;
    padding: 16px;
    cursor: pointer;
    margin-bottom: 10px;
  }
`

const ActiveStyle = css`
  font-weight: 700;
  border-bottom: 4px solid ${colors.green};
  color: ${colors.gray900};
`

export default Home
