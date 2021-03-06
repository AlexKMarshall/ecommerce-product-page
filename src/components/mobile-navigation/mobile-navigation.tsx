import * as styles from './mobile-navigation.css'

import { Icon, IconButton, Stack, Text } from '..'
import {
  OverlayContainer,
  OverlayProvider,
  useModal,
  useOverlay,
  usePreventScroll,
} from '@react-aria/overlays'
import { ReactNode, useEffect, useRef } from 'react'

import { FocusScope } from '@react-aria/focus'
import Link from 'next/link'
import { resolveScreenMQ } from 'src/styles/sprinkles.css'
import { useButton } from '@react-aria/button'
import { useDialog } from '@react-aria/dialog'
import { useOverlayTriggerState } from '@react-stately/overlays'

type Props = {
  isOpen?: boolean
  onClose?: () => void
  /**
   * Whether to close the overlay when the user interacts outside it.
   * @default true
   */
  isDismissable?: boolean
  title?: string
  'aria-label'?: string
  'aria-labelledby'?: string
  children: ReactNode
  className?: string
}

const defaultProps: Partial<Props> = {
  isDismissable: true,
}

export function Dialog(props: Props): JSX.Element {
  const propsWithDefaults = { ...defaultProps, ...props }
  const ref = useRef<HTMLDivElement>(null)
  const { overlayProps, underlayProps } = useOverlay(propsWithDefaults, ref)
  usePreventScroll()
  const { modalProps } = useModal()
  const { dialogProps, titleProps } = useDialog(props, ref)

  return (
    <div {...underlayProps} className={styles.underlay}>
      <FocusScope contain restoreFocus autoFocus>
        <div
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={ref}
          className={styles.overlay}
        >
          {props.children}
        </div>
      </FocusScope>
    </div>
  )
}

export function MobileNavigation() {
  const state = useOverlayTriggerState({})
  const openButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const { buttonProps: openButtonProps } = useButton(
    { onPress: () => state.open() },
    openButtonRef
  )
  const { buttonProps: closeButtonProps } = useButton(
    { onPress: () => state.close() },
    closeButtonRef
  )

  useEffect(() => {
    const mql = window.matchMedia(resolveScreenMQ.desktop)
    const listener = (e: MediaQueryListEvent) => {
      if (e.matches) {
        state.close()
      }
    }

    mql.addEventListener('change', listener)

    return () => {
      mql.removeEventListener('change', listener)
    }
  }, [])

  return (
    <>
      <IconButton {...openButtonProps} label="Open Navigation Menu">
        <Icon icon="menu" size="s" />
      </IconButton>
      {state.isOpen ? (
        <OverlayContainer>
          <Dialog title="Navigation" isOpen isDismissable onClose={state.close}>
            <Stack space="xl" align="flex-start">
              <IconButton {...closeButtonProps}>
                <Icon icon="close" size="s" />
              </IconButton>
              <nav>
                <Stack component="ul" space="m">
                  <NavItem label="Collections" url="/" />
                  <NavItem label="Men" url="/" />
                  <NavItem label="Women" url="/" />
                  <NavItem label="About" url="/" />
                  <NavItem label="Contact" url="/" />
                </Stack>
              </nav>
            </Stack>
          </Dialog>
        </OverlayContainer>
      ) : null}
    </>
  )
}

type NavItemProps = {
  url: string
  label: string
}
function NavItem({ url, label }: NavItemProps) {
  return (
    <Text weight="bold" size="m" color="primary" component="li">
      <Link href={url}>
        <a>{label}</a>
      </Link>
    </Text>
  )
}
