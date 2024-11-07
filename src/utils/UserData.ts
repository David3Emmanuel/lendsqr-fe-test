export default interface UserData {
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
        employment?: string
        sector?: string
        duration?: number
        monthlyIncome: {
            average: number
            rangePercent: number
        }
        loanRepayment: number
    }
    socials: {
        twitter?: string
        instagram?: string
        facebook?: string
    }
    guarantors: {
        fullName: string
        email: string
        relationship: string
        phone: string
    }[]
}
