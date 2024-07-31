import Button from '@/components/Button'
import { parsePost } from '@/utils/parsePost'
import { MDXRemote } from 'next-mdx-remote/rsc'

import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
import TitleSection from './components/TitleSection'

export default async function Post({
  params: { id },
}: {
  params: { id: string }
}) {
  const { metadata, content } = await parsePost('src/data/post.mdx')

  return (
    <section>
      <TitleSection metaData={metadata} />
      <div className="prose">
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [
                [
                  // @ts-ignore
                  rehypePrettyCode,
                  {
                    theme: {
                      dark: 'github-dark-dimmed',
                      light: 'github-light',
                    },
                  },
                ],
              ],
            },
          }}
        />
      </div>
      <Button />
    </section>
  )
}
