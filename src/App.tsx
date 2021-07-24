import { BrowserRouter, Route } from 'react-router-dom';
// import { Button } from "./components/Button";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

import { AuthContextProvider } from './contexts/AuthContexts'

function App() {


  return (
    //Lnha 16, primeira chave significa que é cod JS e a segunda um obj
    <AuthContextProvider>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
