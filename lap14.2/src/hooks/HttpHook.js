import { useState, useEffect } from "react"

const useHttp = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({});
    const [isError, setIsError] = useState(false);

    const getData = async (url) => {
        setIsLoading(true);
        setData({});
        setIsError(null);

        const response = await fetch(url);
        if (!response.ok) {
            setIsLoading(false);
            setData({});
            setIsError('Some thing went wrong!');
        }

        const json = await response.json();
        setIsLoading(false);
        setData(json);
        setIsError(null);
    }
    useEffect(() => { getData(url) }, [url])
    return { isLoading, data, isError };
}

export default useHttp;