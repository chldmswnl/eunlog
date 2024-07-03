import { Post } from '@/type'
import Link from 'next/link'

export default function PostCard({ id, title, desc, date }: Post) {
  return (
    <Link href={`/${id}`}>
      <article className="flex w-full flex-col py-3">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="py-3 leading-8 text-gray-800">{desc}</span>
        <time className="text-sm text-gray-600">{date}</time>
      </article>
    </Link>
  )
}
