import { Metadata } from 'next'
import Image from 'next/image'

import CompoundLogo from '@/components/CompoundLogo'
import Input from '@/components/Input'
import Button from '@/components/Button'

import style from './style.module.scss'
import illustration from '@/public/login-illustration.png'

export const metadata: Metadata = {
  title: 'Login',
}

export default function LoginPage() {
  return (
    <main className={style.loginPage}>
      <CompoundLogo className={style.compoundLogo} />
      <div className={style.illustrationContainer}>
        <Image src={illustration} alt='welcome to lendsqr' />
      </div>
      <div className={style.formContainer}>
        <form>
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
