export default function Post({ params: { id } }: { params: { id: string } }) {
  return (
    <section>
      <span>Post page {id}</span>
    </section>
  )
}
