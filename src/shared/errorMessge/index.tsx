import styles from './error.module.css'

export default function ErrorMessage() {
    return (
        <div className={styles['error-message']}>
            <span>Something went wrong, try again later</span>
        </div>
    )
}