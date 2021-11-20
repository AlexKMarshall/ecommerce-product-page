/* eslint-disable @next/next/no-img-element */

import * as styles from './avatar.css'

type Props = {
  src: string
}
export function Avatar({ src }: Props): JSX.Element {
  return (
    <img src={src} alt="" width="80" height="80" className={styles.avatar} />
  )
}
