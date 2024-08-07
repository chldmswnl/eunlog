import { parsePost } from '@/utils/parsePost'

import TitleSection from './components/TitleSection'
import RecommendPostSection from './components/RecommendPostSection'
import Giscus from '@/components/Giscus'
import MdxSection from './components/MdxSection'

export default async function Post({
  params: { id },
}: {
  params: { id: string }
}) {
  const { metadata, content } = await parsePost('src/data/post.mdx')

  return (
    <section>
      <TitleSection metaData={metadata} />
      <MdxSection content={content} />
      <Giscus />
      {/* <RecommendPostSection /> */}
    </section>
  )
}
