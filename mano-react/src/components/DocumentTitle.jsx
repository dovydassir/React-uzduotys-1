import { useState, useEffect} from "react";

function DocumentTitle () {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = 'Skaicius: ${count}';
    }, [count]);

    return (
        <div>
            <h2> 2 užduotis</h2>
            <p>Skaicius: {count}</p>
            <button onClick={() => setCount(count + 1)}>padidinti</button>
        </div>
    );
}

export default DocumentTitle;
