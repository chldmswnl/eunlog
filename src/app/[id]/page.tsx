import { parsePost } from '@/utils/post'

import TitleSection from './components/TitleSection'
import Giscus from '@/components/Giscus'
import MdxSection from './components/MdxSection'
import { Metadata } from 'next'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id

  const { metadata } = await parsePost(`src/data/${id}.mdx`)

  return {
    title: metadata.title,
    openGraph: {
      title: metadata.title,
      description: metadata.desc,
    },
  }
}

export default async function Post({
  params: { id },
}: {
  params: { id: string }
}) {
  const { metadata, content } = await parsePost(`src/data/${id}.mdx`)

  return (
    <section>
      <TitleSection metaData={metadata} />
      <MdxSection content={content} />
      <Giscus />
      {/* <RecommendPostSection /> */}
    </section>
  )
}
