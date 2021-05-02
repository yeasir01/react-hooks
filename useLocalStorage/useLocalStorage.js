import { useEffect, useState } from 'react';

function useLocalStorage(key = "", initialValue) {
    const [state, setState] = useState(getInitialValue);

    function getInitialValue() {
        const string = window.localStorage.getItem(key);
        const item = string ? JSON.parse(string) : initialValue;
        
        if (typeof item === "object" && item !== null){
            return {
                ...initialValue,
                ...item
            }
        }

        return item;
    };

    useEffect(() => {
        if (!state) return;
        
        const value = JSON.stringify(state);
        window.localStorage.setItem(key, value);
    },[key, state]);

    return [state, setState];
}

export default useLocalStorage;