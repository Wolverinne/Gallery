import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [Images,setImages] =useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
            fetch(url)
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data .');
                  } 
                  return res.json();
                })
            .then(data => {
                setImages(data);
                console.log(data);
                setError(null);
            })
            .catch(err =>{
                setError(err.message)
            })
    }, [url]);
    return {error,Images}

}
export default useFetch;