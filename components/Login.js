import React from 'react'
import Button from '@material-tailwind/react/Button';
import Image from 'next/image';
import {signIn} from 'next-auth/react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <Image 
        src="https://links.papareact.com/1ui"
        height={300}
        width={550}
        objectFit="contain"
        />

        <Button
        className="w-44 mt-10"
        color='blue'
        buttonType="filled"
        ripple="light"
        onClick={signIn}
        >
            Login
        </Button>

    </div>
  )
}

export default Login