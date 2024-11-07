import { TabContent } from '@/components/Tabs'
import { UserData } from '@/utils'
import style from '../style.module.scss'
import EmploymentDetails from './EmploymentDetails'

export default function General({ user }: { user: UserData }) {
  return (
    <TabContent tab='general'>
      <h2>Personal Information</h2>
      <div className={style.row}>
        <div>
          <h3>Full Name</h3>
          <p>{user.username}</p>
        </div>
        <div>
          <h3>Phone Number</h3>
          <p>{user.phone}</p>
        </div>
        <div>
          <h3>Email Address</h3>
          <p>{user.email}</p>
        </div>
        <div>
          <h3>BVN</h3>
          <p>{user.bankDetails.accountNumber}</p>
        </div>
        <div>
          <h3>Gender</h3>
          <p>{user.gender}</p>
        </div>
        <div>
          <h3>Marital Status</h3>
          <p>{user.personal.maritalStatus}</p>
        </div>
        <div>
          <h3>Children</h3>
          <p>{user.personal.children || 'None'}</p>
        </div>
        <div>
          <h3>Type of Residence</h3>
          <p>{user.personal.residence}</p>
        </div>
      </div>
      <div className={style.divider} />
      <EmploymentDetails details={user.employmentDetails} email={user.email} />
      <div className={style.divider} />
      <Socials socials={user.socials} />
      <div className={style.divider} />
      <Guarantors guarantors={user.guarantors} />
    </TabContent>
  )
}

function Socials({ socials }: { socials: Record<string, string> }) {
  const socialsArray = Object.entries(socials)
  return socialsArray.length === 0 ? (
    <h2>No socials linked</h2>
  ) : (
    socialsArray.map(([platform, username], i) => (
      <>
        <h2>Socials</h2>
        <div key={i} className={style.row}>
          <div>
            <h3>{platform}</h3>
            <p>{username}</p>
          </div>
        </div>
      </>
    ))
  )
}

function Guarantors({ guarantors }: { guarantors: UserData['guarantors'] }) {
  if (guarantors.length === 0) return <h2>No guarantors added</h2>

  return (
    <>
      <h2>Guarantors</h2>
      {guarantors.map((guarantor, i) => (
        <>
          <div key={i} className={style.row}>
            <div>
              <h3>Full Name</h3>
              <p>{guarantor.fullName}</p>
            </div>
            <div>
              <h3>Phone Number</h3>
              <p>{guarantor.phone}</p>
            </div>
            <div>
              <h3>Email Address</h3>
              <p>{guarantor.email}</p>
            </div>
            <div>
              <h3>Relationship</h3>
              <p>{guarantor.relationship}</p>
            </div>
          </div>
          {i < guarantors.length - 1 && <div className={style.divider} />}
        </>
      ))}
    </>
  )
}

function EmploymentDetails({
  details,
  email,
}: {
  details: UserData['employmentDetails']
  email: string
}) {
  const yearsOfEmployment = details.duration
  const employmentDuration =
    yearsOfEmployment == 1 ? '1 year' : `${yearsOfEmployment} years`

  const { average, rangePercent } = details.monthlyIncome
  const range = (rangePercent / 100) * average
  const min = average - range
  const max = average + range
  const currencyOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'NGN',
  }
  const monthlyIncome = `${min.toLocaleString(
    undefined,
    currencyOptions,
  )} - ${max.toLocaleString(undefined, currencyOptions)}`

  return (
    <>
      <h2>Education and Employment</h2>
      <div className={style.row}>
        <div>
          <h3>Level of Education</h3>
          <p>{details.levelOfEducation}</p>
        </div>
        <div>
          <h3>Employment Status</h3>
          <p>{details.employment || 'Unemployed'}</p>
        </div>
        {details.sector && (
          <div>
            <h3>Sector of Employment</h3>
            <p>{details.sector}</p>
          </div>
        )}
        {details.duration && (
          <div>
            <h3>Sector of Employment</h3>
            <p>{employmentDuration}</p>
          </div>
        )}
        <div>
          <h3>Office Email</h3>
          <p>{email}</p>
        </div>
        <div>
          <h3>Monthly Income</h3>
          <p>{monthlyIncome}</p>
        </div>
        <div>
          <h3>Loan Repayment</h3>
          <p>
            {details.loanRepayment.toLocaleString(undefined, currencyOptions)}
          </p>
        </div>
      </div>
    </>
  )
}
