import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Counter from "./components/Counter";
import Clock from "./components/Clock";
import Counter2 from "./components/Counter2";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/list" element={<UserList />} />
          <Route path="/count" element={<Counter2 />} />
          <Route path="/about" element={<Counter />} />
          <Route path="/clock" element={<Clock />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
