import { useState, useEffect, useRef } from 'react'

export default function useSidebar() {
    const [open, setOpen] = useState(false)
    const [isInactive, setIsInactive] = useState(false)
    const sidebarRef = useRef<HTMLDivElement>(null)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node)
            ) {
                setOpen(false)
            }
        }

        function resetTimeout() {
            setIsInactive(false)
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
            timeoutRef.current = setTimeout(() => {
                setIsInactive(true)
                setOpen(false)
            }, 5000)
        }

        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('mousemove', resetTimeout)
        document.addEventListener('touchmove', resetTimeout)
        document.addEventListener('keydown', resetTimeout)
        resetTimeout()

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('mousemove', resetTimeout)
            document.removeEventListener('touchmove', resetTimeout)
            document.removeEventListener('keydown', resetTimeout)
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [sidebarRef])

    return { open, isInactive, sidebarRef, setOpen }
}
