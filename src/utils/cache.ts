'use client'

import { useEffect, useState } from 'react'

export function cacheData<T>(
    key: string,
    data: T,
    expiration: number = 60 * 60 * 1000,
) {
    const now = new Date().getTime()
    const expirationTime = now + expiration
    const cache = { data, expirationTime }

    localStorage.setItem(key, JSON.stringify(cache))
}

export function getCachedData<T>(key: string): T | null {
    const cache = localStorage.getItem(key)
    if (!cache) return null

    const parsedCache = JSON.parse(cache)
    const now = new Date().getTime()
    if (now > parsedCache.expirationTime) {
        localStorage.removeItem(key)
        return null
    }

    return parsedCache.data
}

export function useCachedFetch<T>(url: string, options: RequestInit) {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    // TODO encrypt options

    useEffect(() => {
        const cacheKey = url + JSON.stringify(options)

        const cachedData = getCachedData<T>(cacheKey)
        if (cachedData) {
            console.log('Using cached data')
            setData(cachedData)
            setLoading(false)
        } else {
            console.log('Fetching data')
            fetch(url, options)
                .then((response) => response.json())
                .then((data: T) => {
                    setData(data)
                    cacheData(cacheKey, data)
                })
                .catch((err) => setError(err as Error))
                .finally(() => setLoading(false))
        }
    }, [options, url])

    return { data, loading, error }
}

export function removeCachedData(key: string) {
    localStorage.removeItem(key)
}
