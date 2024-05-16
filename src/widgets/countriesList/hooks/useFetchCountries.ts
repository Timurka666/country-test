import { useEffect, useState } from "react";
import { ICountry } from "../../../../types/countryType";
import axios, { AxiosResponse } from "axios";

export function useFetchCountries() {
    const [isLoading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<ICountry[] | undefined>(undefined)

    async function fetchCountries() {
        setLoading(true)
        const response = await axios.get<any, AxiosResponse<ICountry[], ICountry>>(`${import.meta.env.VITE_BASE_URL}/all?fields=name,flag`, {
            withCredentials: true,
        })
        return response
    }

    useEffect(() => {
        fetchCountries().then((data) => {

                setLoading(false)
                setData(() => data.data)
        })
    }, [])

    return {isLoading, data}
}