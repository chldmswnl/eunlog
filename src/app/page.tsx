import CardGrid from '@/components/CardGrid'
import ProfileSection from '@/components/ProfileSection'

export default function PostList() {
  return (
    <section className="flex flex-col gap-y-10">
      <ProfileSection />
      <CardGrid />
    </section>
  )
}
