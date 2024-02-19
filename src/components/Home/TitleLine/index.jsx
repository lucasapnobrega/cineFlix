import styles from './TitleLine.module.css'

export default function TitleLine({ title }) {
  return (
    <div className={styles.horizontalLine}>
      <div className={`${styles.line} ${styles.lineLeft}`}></div>
      <h3 className={styles.title}>{title}</h3>
      <div className={`${styles.line} ${styles.lineRight}`}></div>
    </div>
  )
}