'use client'
import { useState, useEffect, useRef } from 'react'

export default function useFloating() {
    const [open, setOpen] = useState(false)
    const [isInactive, setIsInactive] = useState(false)
    const parentRef = useRef<HTMLDivElement>(null)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                parentRef.current &&
                !parentRef.current.contains(event.target as Node)
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
    }, [parentRef])

    const toggleOpen = () => setOpen((prev) => !prev)

    return { open, isInactive, parentRef, toggleOpen }
}
