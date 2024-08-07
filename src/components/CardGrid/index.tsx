import PostCard from '../PostCard'
import { getPostList } from '@/utils/post'
import { getFormattedDate } from '@/utils/date'

export default async function CardGrid() {
  const postList = await getPostList()
  return (
    <section className="flex w-full flex-col gap-y-7 py-5">
      {postList.map(({ date, id, title, desc, keyword }) => (
        <PostCard
          date={getFormattedDate(new Date(date))}
          key={id}
          id={id}
          title={title}
          desc={desc}
          keyword={keyword}
        />
      ))}
    </section>
  )
}
