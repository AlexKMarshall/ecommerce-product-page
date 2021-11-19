import * as styles from './thumbnail.css'

import Image from 'next/image'

type Props = {
  src: string
  alt: string
}
export function Thumbnail({ src, alt }: Props): JSX.Element {
  return (
    <Image
      src={src}
      alt={alt}
      width={50}
      height={50}
      className={styles.thumbnail}
    />
  )
}
