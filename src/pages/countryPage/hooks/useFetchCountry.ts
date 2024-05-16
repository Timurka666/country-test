import { useEffect, useState } from "react";
import { ICountryByName } from "../../../../types/countryType";
import axios, { AxiosResponse } from "axios";

export function useFetchCountry(name: string) {
    const [isLoading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<ICountryByName[] | undefined>(undefined)
    const [isError, setError] = useState<boolean>(false)

    async function fetchCountry() {
        setLoading(true)
        const response = await axios.get<any, AxiosResponse<ICountryByName[], any>>(`${import.meta.env.VITE_BASE_URL}/name/${name}`, {
            withCredentials: true,
        })
        return response
    }

    useEffect(() => {
        fetchCountry().then((data) => {

                setLoading(false)
                setData(() => data.data)
                return data
        }).catch(() => {
            setData(undefined)
            setError(true)
        })
    }, [])

    return {isLoading, data, isError}
}