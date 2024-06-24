import { useNavigate } from 'react-router-dom'
import { RiHome3Line } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { LuLogOut, LuLogIn } from 'react-icons/lu'
import styled from '@emotion/styled'
import { colors } from '@styles/colorPalette'
import { signOut } from 'firebase/auth'
import { auth } from '@remote/firebase'
import { toast } from 'react-toastify'
import { useContext } from 'react'
import AuthContext from '@contexts/AuthContext'

const Navbar = () => {
  const navigate = useNavigate()

  const { user } = useContext(AuthContext)

  const handleLogout = () => {
    try {
      signOut(auth).then(() => {
        toast.success('로그아웃되었습니다.')
        navigate('/login')
      })
    } catch (error: any) {
      console.log(error)
      toast.error(error.message)
    }
  }
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
        {user ? (
          <button type="button" onClick={handleLogout}>
            <LuLogOut />
            <span>LOGOUT</span>
          </button>
        ) : (
          <button type="button">
            <LuLogIn />
            <span>LOGIN</span>
          </button>
        )}
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
