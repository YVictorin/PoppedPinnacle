
import { useState, useEffect } from "react";

export default function useFetchData({ url, method = "GET", initialPostedData = null }) {
  // start the data as an empty array so components that use this don't have to parse or Array.isArray checks, or anything
    const [data, setData] = useState([]);     
    const [isLoading, setIsLoading] = useState(false);
    const [postedData, setPostedData] = useState(initialPostedData || {})
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!url || (method === "POST" && Object.keys(postedData).length === 0)) {
                setIsError(true);
                setError("No data to send or URL undefined.");
                setIsLoading(false);
                return;
            }
            // reset all values at first
            setIsError(false);
            setIsLoading(true);
            setData([]); 
            setError(null);

            try {
                // default options configurations for a GET
                const options = {
                    method,
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                };

                // turn the params into a string for POST request
                if (method === "POST" && postedData) {
                    options.body = JSON.stringify(postedData); // options.body is the third param in a POST request
                }

                const response = await fetch(url, options); // actually does the fetch
                if (!response.ok) {
                    throw new Error(`There was a fetching error: ${response.status}`);
                }

                const result = await response.json();
                setData(result); // set data to the fetched result
            } catch (e) {
                setIsError(true); // set errors
                setError(e);
                console.error("Fetch error:", e);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url, method, postedData]); // only fetch when one of these three changes

    return [data, isLoading, isError, error, postedData, setPostedData];
}
