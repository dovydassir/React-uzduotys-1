import { useState, useEffect } from 'react';

const FonoSpalva = () => {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
  console.log(theme);

  if (theme === "light") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
}, [theme]);

    return (
        <>
        <h2>fono spalvos keitimas 6 uzduotis
        </h2>
        <button onClick={() => setTheme('light')}>Light</button>
        <button onClick={() => setTheme('dark')}>Dark</button>
        </>
    )
}

export default FonoSpalva