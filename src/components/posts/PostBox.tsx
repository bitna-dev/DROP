import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'
import { AiOutlineComment } from 'react-icons/ai'
import { PostProps } from '@components/models/post'
import styled from '@emotion/styled'
import Flex from '@components/Flex'
import { colors } from '@styles/colorPalette'
import { css } from '@emotion/react'

interface PostBoxProps {
  post: PostProps
}
const PostBox = ({ post }: PostBoxProps) => {
  const handleDelete = () => {}
  const handleEdit = () => {}
  return (
    <PostStyle>
      <PostBoxStyle key={post.id}>
        <Link to={`/posts/${post.id}`}>
          <div css={ProfileStyle}>
            <Flex align="center" css={FlexStyle}>
              {post?.profileUrl ? (
                <img css={ImageStyle} src={post.profileUrl} alt="profile" />
              ) : (
                <FaUserCircle css={ImageStyle} />
              )}
              <div>{post?.email}</div>
              <div>{post?.createdAt}</div>
            </Flex>
          </div>
          <ContentStyle>{post?.content}</ContentStyle>
        </Link>
        <FooterStyles>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
          <button type="button" className="post__edit">
            <Link to={`/posts/edit/${post?.id}`}>Edit</Link>
          </button>
          <button type="button" className="post__likes">
            <Link to={`/posts/edit/${post?.id}`}>
              <FaRegHeart />
              {post?.likeCount || 0}
            </Link>
          </button>
          <button type="button" className="post__comments">
            <Link to={`/posts/edit/${post?.id}`}>
              <AiOutlineComment />
              {post?.comments || 0}
            </Link>
          </button>
        </FooterStyles>
      </PostBoxStyle>
    </PostStyle>
  )
}

const PostStyle = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid ${colors.gray100};
  :last-child {
    border: none;
  }
`

const PostBoxStyle = styled.div`
  padding: 10px 0px;
`

const ProfileStyle = styled.div`
  padding: 0px 10px;
`

const ImageStyle = css`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`
const FlexStyle = css`
  gap: 8px;
  font-size: 14px;
  padding: 0px 10px;
`

const ContentStyle = styled.div`
  display: block;
  font-weight: 500;
  padding: 16px;
`

const FooterStyles = styled.div`
  padding: 0 16px;
  margin-top: 10px;
  font-size: 14px;
  display: flex;
  gap: 8px;
  flex-direction: row-reverse;

  button {
    cursor: pointer;
  }
  button:hover,
  button:hover a,
  button:hover svg {
    fill: ${colors.green};
    color: ${colors.green};
  }
  a {
    display: flex;
    gap: 4px;
    align-items: center;
  }
`
export default PostBox
