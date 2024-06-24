import { useNavigate } from 'react-router-dom'
import { RiHome3Line } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { LuLogOut } from 'react-icons/lu'
import styled from '@emotion/styled'
import { colors } from '@styles/colorPalette'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <FooterStyle>
      <GridStyle>
        <button type="button" onClick={() => navigate('/')}>
          <RiHome3Line />
          <span>HOME</span>
        </button>
        <button type="button" onClick={() => navigate('/profile')}>
          <CgProfile />
          <span>PROFILE</span>
        </button>
        <button type="button" onClick={() => navigate('/')}>
          <LuLogOut />
          <span>LOGOUT</span>
        </button>
      </GridStyle>
    </FooterStyle>
  )
}

const FooterStyle = styled.div`
  position: sticky;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  background-color: ${colors.white};
`
const GridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  button {
    border: none;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    padding: 24px 0;
    cursor: pointer;
    span {
      font-size: 14px;
      font-weight: 500;
    }
  }
`

export default Navbar
