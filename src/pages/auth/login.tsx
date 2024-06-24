import LoginForm from '@components/auth/LoginForm'
import { LoginValues } from '@models/login'
import { auth } from '@remote/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const LoginPage = () => {
  const navigate = useNavigate()
  const { state } = useLocation()

  const handelSubmit = async (formValues: LoginValues) => {
    try {
      const { email, password } = formValues
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      toast.success(`Welcome! ${user.displayName}`)
      if (state) {
        console.log(state)
        navigate(state)
      } else {
        navigate('/')
      }
    } catch (error: any) {
      toast.error('계정정보를 다시 확인해주세요.')
    }
  }
  return (
    <>
      <LoginForm onSubmit={handelSubmit} />
    </>
  )
}

export default LoginPage
