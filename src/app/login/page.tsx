import { Metadata } from 'next'
import Image from 'next/image'

import CompoundLogo from '@/components/CompoundLogo'
import Input from '@/components/Input'
import Button from '@/components/Button'

import style from './style.module.scss'
import illustration from '@/public/login-illustration.png'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Login',
}

export default async function LoginPage() {
  const handleSubmit = async () => {
    'use server'
    redirect('/dashboard/users')
  }

  return (
    <main className={style.loginPage}>
      <CompoundLogo className={style.compoundIcon} />
      <div className={style.illustrationContainer}>
        <Image src={illustration} alt='welcome to lendsqr' />
      </div>
      <div className={style.formContainer}>
        <form action={handleSubmit}>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
          <div className={style.inputGroup}>
            <Input type='text' placeholder='Email' />
            <Input type='password' placeholder='Password' />
            <p className={style.forgotPassword}>Forgot your password?</p>
          </div>
          <Button type='submit'>LOG IN</Button>
        </form>
      </div>
    </main>
  )
}
