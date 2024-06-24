import SignupForm from '@components/auth/SignupForm'
import { COLLECTIONS } from '@constants/index'
import { SignupValues } from '@models/signup'
import { auth, store } from '@remote/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { collection, doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Signup = () => {
  const navigate = useNavigate()
  const handleSubmit = async (formValues: SignupValues) => {
    try {
      const { email, password, name } = formValues
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )

      await updateProfile(user, {
        displayName: name,
      })
      const newUser = {
        uid: user.uid,
        email: user.email,
        displayName: name,
      }
      await setDoc(doc(collection(store, COLLECTIONS.USER), user.uid), newUser)
      toast.success(`Welcome! ${name}`)
      navigate('/')
    } catch (error: any) {
      toast.error(error)
      console.log(error)
    }
  }
  return (
    <div>
      <SignupForm onSubmit={handleSubmit} />
    </div>
  )
}

export default Signup
