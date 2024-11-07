import UserData from './UserData'

export async function getAllUsers(): Promise<UserData[]> {
    const response = await cachedFetch(
        'https://api.json-generator.com/templates/5bz8P30FEwn8/data',
        {
            headers: {
                Authorization: `Bearer ${process.env.JSON_GENERATOR_TOKEN}`,
            },
        },
    )
    const users: UserData[] = await response.json()

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

export async function getUser(id: string): Promise<UserData | null> {
    const users = await getAllUsers()
    return users.find((user) => user.id === id) || null
}

function cachedFetch(url: string, options: RequestInit) {
    // TODO cache fetches

    return fetch(url, options)
}
