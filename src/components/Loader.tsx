import styled from '@emotion/styled'
import { colors } from '@styles/colorPalette'
import { HashLoader } from 'react-spinners'
import Flex from './Flex'
interface LoaderProps {
  size?: number
  full?: boolean
}

const Loader = ({ size = 40, full }: LoaderProps) => {
  if (full) {
    return (
      <LoaderStyles>
        <HashLoader color={colors.green} size={size} />
      </LoaderStyles>
    )
  }

  return (
    <Flex justify="center">
      <HashLoader color={colors.green} size={size} />
    </Flex>
  )
}
const LoaderStyles = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default Loader
