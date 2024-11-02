export default function UserDetailPage({ params }: { params: { id: string } }) {
  const { id } = params

  return (
    <div>
      <h1>User Detail for {id}</h1>
    </div>
  )
}
