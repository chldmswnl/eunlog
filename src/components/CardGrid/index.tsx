import { PostMetadataType } from '@/type'
import PostCard from '../PostCard'

const data: PostMetadataType[] = []

export default function CardGrid() {
  return (
    <section className="flex w-full flex-col gap-y-7 py-5">
      {data.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </section>
  )
}
