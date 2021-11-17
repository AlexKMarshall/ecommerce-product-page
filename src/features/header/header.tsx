/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Cluster,
  Icon,
  IconButton,
  MobileNavigation,
} from 'src/components'

import Image from 'next/image'
import Logo from 'public/logo.svg'

export function Header(): JSX.Element {
  return (
    <Box component="header" padding="l">
      <Cluster space="xs" justify="space-between">
        <Cluster space="xs">
          <MobileNavigation />
          {/* <IconButton onClick={() => {}}>
            <Icon icon="menu" size="s" />
          </IconButton> */}
          <Image src={Logo} alt="Sneakers" />
        </Cluster>

        <Cluster space="xs">
          <IconButton onClick={() => {}} color="primary">
            <Icon icon="cart" size="l" />
          </IconButton>
          {/* <IconButton href="/">
            <img src="/image-avatar.png" alt="profile" width="24" height="24" />
          </IconButton> */}
        </Cluster>
      </Cluster>
    </Box>
  )
}
