export interface UserData {
    email: string
    phone: string
    id: string
    status: string
    username: string
    firstName: string
    gender: string
    lastName: string
    dateJoined: string
    organization: string
    tier: 1 | 2 | 3

    bankDetails: {
        balance: number
        accountNumber: string
        bankName: string
    }
    personal: {
        maritalStatus: string
        children: number
        residence: string
        bvn: string
    }
    employmentDetails: {
        levelOfEducation: string
        employment: string | undefined
        sector: string | undefined
        duration: number | undefined
        monthlyIncome: {
            average: number
            rangePercent: number
        }
        loanRepayment: number
    }
    socials: {
        twitter: string | undefined
        instagram: string | undefined
        facebook: string | undefined
    }
    guarantors: {
        fullName: string
        email: string
        relationship: string
        phone: string
    }[]
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
    const users: UserData[] = await response.json()

    users.forEach((user) => {
        user.socials = {
            twitter:
                user.socials.twitter ||
                `@${user.firstName.toLowerCase()}_${user.lastName.toLowerCase()}`,
            instagram:
                user.socials.instagram ||
                `@${user.firstName.toLowerCase()}_${user.lastName.toLowerCase()}`,
            facebook:
                user.socials.facebook || `${user.firstName} ${user.lastName}`,
        }
    })

    return users
}

export async function getUser(id: string): Promise<UserData | null> {
    const users = await getAllUsers()
    return users.find((user) => user.id === id) || null
}

// TODO cache fetches
