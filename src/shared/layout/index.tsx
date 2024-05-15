import styles from './layout.module.css';

interface IProps {
    children: React.ReactNode
}

export default function Layout({children}: IProps) {
    return (
        <main className={styles['main-content']}>
            {children}
        </main>
    )
}