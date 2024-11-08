'use client'

import { useState, useEffect, useMemo } from 'react'
import UserData from './UserData'
import { useCachedFetch } from './cache'

export function useAllUsers() {
    const options = useMemo(
        () => ({
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_JSON_GENERATOR_TOKEN}`,
            },
        }),
        [],
    )

    const {
        data: users,
        loading,
        error,
    } = useCachedFetch<UserData[]>(
        'https://api.json-generator.com/templates/5bz8P30FEwn8/data',
        options,
        60 * 1000,
    )

    return { users: users ? processUserData(users) : [], loading, error }
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
