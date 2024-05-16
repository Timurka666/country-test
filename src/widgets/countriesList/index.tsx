
import Country from "../../entities/country";
import Spinner from "../../shared/loadingSpinner";
import { useFetchCountries } from "./hooks/useFetchCountries";
import styles from './countriesList.module.css';
import ErrorMessage from "../../shared/errorMessge";

export default function CountriesList() {
    const {isLoading, data, isError} = useFetchCountries()

    if (isLoading) {
        return <Spinner />
    } else if (!isLoading && data) {
        return <ul className={styles['countries-list']}>{data?.map((el, i) => <li className={styles['list-element']} key={i}><Country name={el.name.common} flag={el.flag} /></li>)}</ul>
    } else if (isError) {
        return <ErrorMessage />
    }
}