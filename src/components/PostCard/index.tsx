import { PostMetadataType } from '@/type'
import Link from 'next/link'

export default function PostCard({
  id,
  title,
  desc,
  date,
  keyword,
}: PostMetadataType) {
  return (
    <Link href={`/${id}`}>
      <article className="hover:bg-hover_gray flex w-full flex-col rounded-lg px-5 py-8">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="py-3 leading-8 text-gray-800">{desc}</span>
        <div className="flex items-center justify-between">
          <time className="text-sm text-gray-600">{date}</time>
          <span className="text-sm font-semibold text-point_1">#{keyword}</span>
        </div>
      </article>
    </Link>
  )
}
