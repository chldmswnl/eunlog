import { MDXRemote } from 'next-mdx-remote/rsc'

import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'

export default function MdxSection({ content }: { content: string }) {
  return (
    <div className="prose mb-32 max-w-full">
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
  )
}
