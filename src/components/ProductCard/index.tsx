import styles from './index.module.css'


type Props = {
  children?: React.ReactNode 
}
export default function ProductCard(props: Props) {
  return (
    <div className={styles.wrapper}>
      {props.children}
    </div>
  )
}
