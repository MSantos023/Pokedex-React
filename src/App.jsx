import { AppRouter } from "./AppRouter";
import { Pokemonprovider } from "./context/Pokemonprovider";


function App() {
  return (
      <Pokemonprovider>
        <AppRouter></AppRouter>
      </Pokemonprovider>
    )
}

export default App
