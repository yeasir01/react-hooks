import { useCallback, useState } from 'react';

function useToggle(initialState = false) {
    const [state, setState] = useState(initialState);

   const toggle = useCallback((value) => {
       const current = typeof value === "boolean" ? value : !state;
       setState(current);
   }, [state])

    return [state, toggle];
}

export default useToggle;