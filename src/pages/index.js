import Image from 'next/image'
import Login from './login'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={``}
    >
      Hello
      <Login />
    </main>
  )
}
