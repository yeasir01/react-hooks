import { useEffect, useState } from 'react';

function useTitle(initalTitle = "") {
    const [title, setTitle] = useState(initalTitle);

    useEffect(() => {
        window.document.title = title;
    },[title]);

    return [setTitle];
}

export default useTitle;