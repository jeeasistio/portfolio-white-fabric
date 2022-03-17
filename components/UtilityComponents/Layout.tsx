import { ReactNode } from 'react'
import { SxObject } from '../../interfaces/interfaces'
import Header from './Header'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />

      {children}
    </>
  )
}

export default Layout
