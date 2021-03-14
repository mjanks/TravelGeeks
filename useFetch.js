import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, {
          headers: {
            'Cache-control': 'no-cache, no-store, must-revalidate', 
            'pragma': 'no-cache'
          }
        })
        .then(res => {
          if(!res.ok) {
            throw Error('ERROR: Could not fetch data!');
          }
          return res.json();
        })
        .then(data => {
          setData(data);
          setIsPending(false);
          setError(null);
          //console.log(data);
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
        })
      }, [url]);

    return { data, isPending, error };
}
export default useFetch;