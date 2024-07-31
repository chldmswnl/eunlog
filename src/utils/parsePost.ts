import { PostMetadataType } from '@/type'
import fs from 'fs'
import matter from 'gray-matter'

export const parsePost = async (postPath: string) => {
  const file = await fs.readFileSync(postPath, 'utf8')
  const { content, data } = matter(file)

  return { metadata: data as PostMetadataType, content }
}
