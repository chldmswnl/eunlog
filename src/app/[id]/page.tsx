export default function Post({ params: { id } }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span>Post page {id}</span>
    </main>
  )
}
