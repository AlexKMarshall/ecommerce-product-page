import * as styles from './image.css'

import { Box } from '..'
import { ComponentPropsWithoutRef } from 'react'
import NextImage from 'next/image'

type Props = ComponentPropsWithoutRef<typeof NextImage>
export function Image(props: Props): JSX.Element {
  return (
    <Box className={styles.imageWrapper}>
      <NextImage {...props} />
    </Box>
  )
}
