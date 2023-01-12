import { createContext, useContext, useState } from "react"
import "./App.css"

const SnusContext = createContext(null)

function App() {
    const [antal, setAntal] = useState(4)

    function decrement() {
        setAntal(antal - 1)
    }

    return (
        <SnusContext.Provider
            value={{
                snusHemma: "general",
                antal: antal,
                setAntal: setAntal,
                decrement: decrement,
            }}
        >
            <div className="App">
                hej
                <SnusDosa />
            </div>
        </SnusContext.Provider>
    )
}

function SnusDosa() {
    const { snusHemma, antal, setAntal, decrement } = useContext(SnusContext)

    return (
        <div>
            Jag har {snusHemma} hemma och har {antal} stycken
            <button
                onClick={() => {
                    setAntal(antal + 1)
                }}
            >
                öka antal
            </button>
            <button
                onClick={() => {
                    decrement()
                }}
            >
                minska antal
            </button>
        </div>
    )
}

export default App
