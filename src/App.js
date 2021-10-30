import React, {useState} from 'react'
// import Counter from './Counter'
import CounterHooks from './CounterHooks'

//the default themeContext value is 'red'
export const ThemeContext = React.createContext('red')

function App() {

  const [style, setStyle] = useState('green')

  return (
    <ThemeContext.Provider value={{backgroundColor: style}}>
      {/* CounterHooks is within the ThemeContext  */}
      {/* so that he can reach the 'style' state */}
      <CounterHooks initialCount={0}/>
      <hr />
      <button onClick={() => setStyle(prevStyle => prevStyle === 'red' ? 'blue' : 'red')}>
        Toggle Style
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
