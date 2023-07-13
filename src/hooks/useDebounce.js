import { useEffect, useState} from 'react';

function useDebounce(value, delay) {
    const [debounceVale, setDebounceValue] = useState(value);

    useEffect (() => {
        const handler = setTimeout(() => setDebounceValue(value),delay);

        return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[value]);

    return debounceVale;
}




export default useDebounce;