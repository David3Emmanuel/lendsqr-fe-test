export interface UserData {
    id: string
    email: string
    phone: string
    status: string
    username: string
    firstName: string
    dateJoined: string
    organization: string
}

export async function getAllUsers(): Promise<UserData[]> {
    const response = await fetch(
        'https://api.json-generator.com/templates/5bz8P30FEwn8/data',
        {
            headers: {
                Authorization: `Bearer ${process.env.JSON_GENERATOR_TOKEN}`,
            },
        },
    )
    return response.json()
}

export async function getUser(id: string): Promise<UserData | null> {
    const users = await getAllUsers()
    return users.find((user) => user.id === id) || null
}
