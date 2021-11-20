/* eslint-disable @next/next/no-img-element */
import * as styles from './header.css'

import {
  Box,
  Cluster,
  Icon,
  IconButton,
  MobileNavigation,
} from 'src/components'

import { Cart } from '..'
import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/logo.svg'
import { ReactNode } from 'react'
import { sprinkles } from 'src/styles/sprinkles.css'

const navigationLinks = [
  { label: 'Collections', url: '/' },
  { label: 'Men', url: '/' },
  { label: 'Women', url: '/' },
  { label: 'About', url: '/' },
  { label: 'Contact', url: '/' },
]

export function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <Cluster space="xs" justify="space-between">
        <Cluster space={{ all: 'xs', desktop: '2xl' }}>
          <MediaQueryVisibility>
            <MobileNavigation />
          </MediaQueryVisibility>
          <Image src={Logo} alt="Sneakers" />

          <Box component="nav" display={{ all: 'none', desktop: 'block' }}>
            <Cluster component="ul" space="xl">
              {navigationLinks.map((navItem) => (
                <li key={navItem.label}>
                  <Link href={navItem.url}>
                    <a className={styles.navAnchor}>{navItem.label}</a>
                  </Link>
                </li>
              ))}
            </Cluster>
          </Box>
        </Cluster>

        <Cluster space="xs">
          <Cart />
          <IconButton href="/" label="Profile">
            <img src="/image-avatar.png" alt="" width="24" height="24" />
          </IconButton>
        </Cluster>
      </Cluster>
    </header>
  )
}

function MediaQueryVisibility({ children }: { children: ReactNode }) {
  const sprinklesClass = sprinkles({
    display: { all: 'block', desktop: 'none' },
  })
  return <span className={sprinklesClass}>{children}</span>
}
