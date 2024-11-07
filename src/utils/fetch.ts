'use client'

import { useState, useEffect } from 'react'
import UserData from './UserData'

export function useAllUsers() {
    const [users, setUsers] = useState<UserData[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        cachedFetch(
            'https://api.json-generator.com/templates/5bz8P30FEwn8/data',
            {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_JSON_GENERATOR_TOKEN}`,
                },
            },
        )
            .then((response) => response.json())
            .then((users: UserData[]) => {
                setUsers(processUserData(users))
            })
            .catch((err) => {
                setError(err as Error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return { users, loading, error }
}

export function useUser(id: string) {
    const { users, loading: usersLoading, error } = useAllUsers()
    const [user, setUser] = useState<UserData | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        if (!usersLoading) {
            setUser(users.find((user) => user.id === id) || null)
            setLoading(false)
        }
    }, [usersLoading, users, id])

    return { user, loading, error }
}

function cachedFetch(url: string, options: RequestInit) {
    // TODO cache fetches

    return fetch(url, options)
}

function processUserData(users: UserData[]): UserData[] {
    users.forEach((user) => {
        if (user.socials.twitter)
            user.socials.twitter = `@${user.firstName.toLowerCase()}_${user.lastName.toLowerCase()}`
        else delete user.socials.twitter

        if (user.socials.instagram)
            user.socials.instagram = `@${user.firstName.toLowerCase()}_${user.lastName.toLowerCase()}`
        else delete user.socials.instagram

        if (user.socials.facebook)
            user.socials.facebook = `${user.firstName} ${user.lastName}`
        else delete user.socials.facebook
    })
    return users
}
