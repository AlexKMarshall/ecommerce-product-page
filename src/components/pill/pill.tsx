import * as styles from './pill.css'
type Props = {
  children: string
}
export function Pill({ children }: Props): JSX.Element {
  return <span className={styles.pill}>{children}</span>
}
