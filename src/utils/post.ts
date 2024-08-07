import { PostMetadataType } from '@/type'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export const getPostList = async () => {
  const mdxList: PostMetadataType[] = []
  const dir = path.join(process.cwd(), 'src/data')
  const files = await fs.readdirSync(dir)

  const mdxFiles = files.filter((file) => file.endsWith('.mdx'))

  await Promise.all(
    mdxFiles.map(async (file) => {
      const fullPath = path.join(dir, file)
      const postData = await parsePost(fullPath)
      mdxList.push(postData.metadata)
    }),
  )

  return mdxList
}

export const parsePost = async (postPath: string) => {
  const file = await fs.readFileSync(postPath, 'utf8')
  const { content, data } = matter(file)

  return { metadata: data as PostMetadataType, content }
}
