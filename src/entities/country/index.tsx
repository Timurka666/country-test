import { Link } from 'react-router-dom'
import styles from './country.module.css'

interface IProps {
    name: string,
    flag: string,
}

export default function Country({name, flag}: IProps) {

    return (
        <Link to={`/country/${name}`} className={styles['country-entity']}>

                <span className={styles['country-flag']}>{flag}</span>
                <h2 className={styles['country-name']}>{name}</h2>
            
        </Link>
    )
}