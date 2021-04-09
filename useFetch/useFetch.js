import { useEffect, useState } from 'react';

function useFetch(initURL = "", initOPT = {}) {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [url, setUrl] = useState(initURL);
    const [options, setOptions] = useState(initOPT);
    
    const request = (newURL = "", newOpt = {}) => {
        setUrl(newURL)
        setOptions(newOpt)
    };

    useEffect(() => {
        if (url === "" || url === null) return;

        const controller = new AbortController();
        const signal = controller.signal;
        
        const handleFetch = async () => {
            options.signal = signal;
            
            try {
                setIsLoading(true);
                const res = await fetch(url, options);
                const json = await res.json();
                setResponse(json);
                setError(null);
            } catch (err) {
                setError(err);
                setResponse([]);
            } finally {
                setIsLoading(false);
            }
        };

        handleFetch();

        return () => controller.abort();
        
    }, [options, url]);

    return [response, error, isLoading, request];
}

export default useFetch;