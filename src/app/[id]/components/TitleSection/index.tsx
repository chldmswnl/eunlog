import { PostMetadataType } from '@/type'
import { getFormattedDate } from '@/utils/date'

export default function TitleSection({
  metaData,
}: {
  metaData: PostMetadataType
}) {
  const { title, keyword, date } = metaData

  return (
    <section
      style={{
        borderTop: '1px solid rgb(212 212 212)',
        borderBottom: '1px solid rgb(212 212 212)',
      }}
      className="mb-10 flex h-52 w-full flex-col items-center justify-center gap-y-4"
    >
      <h1 className="block text-3xl font-bold">{title}</h1>
      <h2 className="text-point_1 block text-lg font-bold">{keyword}</h2>
      <span className="block text-sm font-semibold text-gray-600">
        {getFormattedDate(new Date(date))}
      </span>
    </section>
  )
}
