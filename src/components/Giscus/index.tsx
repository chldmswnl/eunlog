'use client'

import { useEffect, useRef } from 'react'

export default function Giscus() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return

    const scriptElem = document.createElement('script')
    scriptElem.src = 'https://giscus.app/client.js'
    scriptElem.async = true
    scriptElem.crossOrigin = 'anonymous'

    scriptElem.setAttribute('data-repo', 'chldmswnl/eunlog')
    scriptElem.setAttribute('data-repo-id', 'R_kgDOMLu0KQ')
    scriptElem.setAttribute('data-category', 'General')
    scriptElem.setAttribute('data-category-id', 'DIC_kwDOMLu0Kc4ChTNK')
    scriptElem.setAttribute('data-mapping', 'pathname')
    scriptElem.setAttribute('data-strict', '0')
    scriptElem.setAttribute('data-reactions-enabled', '1')
    scriptElem.setAttribute('data-emit-metadata', '0')
    scriptElem.setAttribute('data-input-position', 'bottom')
    scriptElem.setAttribute('data-lang', 'en')

    ref.current.appendChild(scriptElem)
  }, [])

  return <section ref={ref} />
}
