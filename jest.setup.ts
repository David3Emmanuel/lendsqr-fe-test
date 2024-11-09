import '@testing-library/jest-dom'
import { useRouter } from 'next-router-mock'

jest.mock('next/navigation', () => {
  const usePathname = () => {
    const router = useRouter()
    return router.pathname
  }

  const useSearchParams = () => {
    const router = useRouter()
    console.log(router.query)
    return new URLSearchParams(router.query as Record<string, string>)
  }

  return {
    usePathname,
    useSearchParams,
    useRouter,
  }
})
