import { useParams } from "react-router-dom";
import { useFetchCountry } from "./hooks/useFetchCountry";
import Spinner from "../../shared/loadingSpinner";
import styles from "./countrySection.module.css";
import GoBackToRoot from "../../features/goBackButton";
import ErrorMessage from "../../shared/errorMessge";

export default function CountryPage() {
    const {name} = useParams()
    const {data, isLoading, isError} = useFetchCountry(name as string)
    if (isLoading) {
        return <Spinner />
    } else if (!isLoading && data) {

        return (
            <>
            <section className={styles['country-section']}>
                <GoBackToRoot />
                <h2><span>{data[0].flag}</span> {data[0].name.common} | {data[0].name.official}</h2>
                <span>Population: {data[0].population}</span>
            </section>
            </>
        )
    } else if (isError) {
        return <ErrorMessage />
    }
}