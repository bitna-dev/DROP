import Layout from '@components/Layout'
import Loader from '@components/Loader'
import Router from '@components/Router'
import { auth } from '@remote/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser,
  )
  const [init, setInit] = useState<boolean>(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
      setInit(true)
    })
  }, [auth])

  return (
    <>
      <Layout>
        <ToastContainer position="top-right" autoClose={1500} closeOnClick />
        {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader full />}
      </Layout>
    </>
  )
}

export default App
