import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex'>
      <Button className='flex justify-center items-center p-3 m-20'>

      <Link href="/mail">Go the the axios working mail</Link>
      </Button>

      <Button className='flex justify-center items-center p-3 m-20'>

      <Link href="/form">Go the the shadcn error</Link>
      </Button>
    </div>
  )
}

export default page