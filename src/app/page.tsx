import CardGrid from '@/components/CardGrid'
import ProfileSection from '@/components/ProfileSection'

export default function PostList() {
  return (
    <section className="flex flex-col gap-y-8">
      <ProfileSection />
      <CardGrid />
    </section>
  )
}
