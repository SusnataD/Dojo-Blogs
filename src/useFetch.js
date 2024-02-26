import { useEffect, useState } from "react";

const useFetch = (url) =>{
    
    const [IsPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(()=>{

        const abortConst = new AbortController();

        fetch(url, {signal : abortConst.signal})
        .then(res => {
            if(!res.ok){
                throw Error('The response is not coming! :(');
            }
            return res.json();
        })
        .then(data=>{
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if(err.name === 'AbortError' ){
                console.log('Fetch Aborted');
            }
            else{
            setIsPending(false);
            setError(err.message);
            }
        })

        return () => abortConst.abort();

    },[url])

    return { data, IsPending, error}
}

export default useFetch;