import Button from '@components/Button'
import styled from '@emotion/styled'
import { colors } from '@styles/colorPalette'
import { IoImagesOutline } from 'react-icons/io5'

const PostForm = () => {
  const handleFileUpload = () => {}

  return (
    <PostFormStyle>
      <textarea
        required
        name="content"
        id="content"
        placeholder="What is happening?"
      />
      <SubmitStyles>
        <label htmlFor="file-input">
          <IoImagesOutline />
        </label>
        <input
          type="file"
          name="file-input"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />
        <Button size="medium" style={{ border: `1px solid ${colors.green}}` }}>
          Drop
        </Button>
      </SubmitStyles>
    </PostFormStyle>
  )
}

const PostFormStyle = styled.form`
  textarea {
    min-height: 120px;
    display: block;
    width: calc(100% - 32px);
    padding: 16px;
    border: none;
    margin: 0 auto;
    resize: none;
    outline: none;
    letter-spacing: 0.1rem;

    ::placeholder {
      font-size: 16px;
    }
  }
`

const SubmitStyles = styled.div`
  display: flex;
  padding: 0.75rem 1rem;
  justify-content: space-between;
  border-bottom: 1px solid $border;
  align-items: center;
  label:hover svg {
    stroke: ${colors.green};
  }
  svg {
    font-size: 24px;
    cursor: pointer;
  }
`

export default PostForm
