import styles from './spinner.module.css'

export default function Spinner() {
    return (
        <div className={styles['loader-wrapper']}>
            <div className={styles['loader']}></div>
        </div>
    )
}