import { auth } from '@remote/firebase'
import { onAuthStateChanged, User } from 'firebase/auth'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface AuthProps {
  children: ReactNode
}

const AuthContext = createContext({
  user: null as User | null,
})

export const AuthContextProvider = ({ children }: AuthProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user)
      } else {
        setCurrentUser(null)
      }
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user: currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
