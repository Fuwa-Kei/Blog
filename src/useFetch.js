import { useState, useEffect } from "react";

// custom hooks need to start with the word use
const useFetch = (url) => {

    const [data, setData] = useState(null);
    // loading messsage for when fetching data takes too long
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        // abort fetch when you leave page 
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
        // get response object using the json method
            .then(res => {
                if(!res.ok) {
                    throw Error ('Could not fetch data');
                }
                return res.json();
            })
            // then get the data
            .then(data => {
                setData(data);

                // once data retrieved change pednign state
                setIsPending(false);
                setError(null);
            })
            // catch network error
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log("Fetch aborted")
                } else {
                setError(err.message);
                setIsPending(false);
                }
            })
            return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;