import { Post } from '@/type'
import PostCard from '../PostCard'

const data: Post[] = [
  {
    id: 1,
    title: '링크에 마우스를 hover',
    desc: '위 움짤에서 한 가지 더 눈치챌만한 점이 있는데, 그래서 실제로 링크를 눌러서 들어갈 때는 HTML 파일이 다시 오지는 않았다는 점이다. 새로운 HTML을 받아오지 않고 바로 여기서 랜더링을 한다는 것을 확인할 수 있다.',
    date: '2024-07-03',
  },
  {
    id: 2,
    title: '링크에 마우스를 hover',
    desc: '위 움짤에서 한 가지 더 눈치챌만한 점이 있는데, 그래서 실제로 링크를 눌러서 들어갈 때는 HTML 파일이 다시 오지는 않았다는 점이다. 새로운 HTML을 받아오지 않고 바로 여기서 랜더링을 한다는 것을 확인할 수 있다.',
    date: '2024-07-03',
  },
  {
    id: 3,
    title: '링크에 마우스를 hover',
    desc: '위 움짤에서 한 가지 더 눈치챌만한 점이 있는데, 그래서 실제로 링크를 눌러서 들어갈 때는 HTML 파일이 다시 오지는 않았다는 점이다. 새로운 HTML을 받아오지 않고 바로 여기서 랜더링을 한다는 것을 확인할 수 있다.',
    date: '2024-07-03',
  },
  {
    id: 4,
    title: '링크에 마우스를 hover',
    desc: '위 움짤에서 한 가지 더 눈치챌만한 점이 있는데, 그래서 실제로 링크를 눌러서 들어갈 때는 HTML 파일이 다시 오지는 않았다는 점이다. 새로운 HTML을 받아오지 않고 바로 여기서 랜더링을 한다는 것을 확인할 수 있다.',
    date: '2024-07-03',
  },
  {
    id: 5,
    title: '링크에 마우스를 hover',
    desc: '위 움짤에서 한 가지 더 눈치챌만한 점이 있는데, 그래서 실제로 링크를 눌러서 들어갈 때는 HTML 파일이 다시 오지는 않았다는 점이다. 새로운 HTML을 받아오지 않고 바로 여기서 랜더링을 한다는 것을 확인할 수 있다.',
    date: '2024-07-03',
  },
]

export default function CardGrid() {
  return (
    <section className="flex w-full flex-col gap-y-7 py-5">
      {data.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </section>
  )
}
