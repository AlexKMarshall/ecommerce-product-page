/* eslint-disable @next/next/no-img-element */
import { Box, Cluster, Icon, IconButton } from 'src/components'

import Image from 'next/image'
import Logo from 'public/logo.svg'

export function Header(): JSX.Element {
  return (
    <Box component="header" padding="l">
      <Cluster space="xs" justify="space-between">
        <Cluster space="xs">
          <IconButton onClick={() => {}}>
            <Icon icon="menu" />
          </IconButton>
          <Image src={Logo} alt="Sneakers" />
        </Cluster>

        <Cluster space="xs">
          <IconButton onClick={() => {}}>
            <Icon icon="cart" />
          </IconButton>
          <IconButton href="/">
            <img src="/image-avatar.png" alt="profile" width="24" height="24" />
          </IconButton>
        </Cluster>
      </Cluster>
    </Box>
  )
}
