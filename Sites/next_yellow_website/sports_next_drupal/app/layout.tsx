import './globals.css';
import { Poppins } from 'next/font/google';
import Headers from './components/Headers';

const poppins = Poppins({
  weight: ['400','600','900'],
  subsets: ['latin']
})



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <div className='w-full min-h-screen'>
          <Headers />
          <div className='p-4'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
