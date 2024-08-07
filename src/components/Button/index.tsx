'use client'

import { useRouter } from 'next/navigation'

export default function Button() {
  const router = useRouter()
  return <button onClick={() => router.push('/')}>메인으로 가기</button>
}
