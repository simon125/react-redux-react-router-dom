import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Counter } from "./components/Counter/Counter";
import { CounterWithInput } from "./components/CounterWithInput/CounterWithInput";

export const App = () => {
  return (
    <main className="container">
      <article>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/counter-with-input">Counter with Input</Link>
        </nav>
      </article>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="counter" element={<Counter />} />
        <Route path="counter-with-input" element={<CounterWithInput />} />
      </Routes>
    </main>
  );
};
