import styled from '@emotion/styled'
import React from 'react'
import Navbar from './Navbar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <LayoutStyle>{children}</LayoutStyle>
      <Navbar />
    </>
  )
}

const LayoutStyle = styled.div`
  max-width: 600px;
  margin: 0 auto;
  min-height: 100vh;
`
export default Layout
