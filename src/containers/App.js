import { Navbar } from "../components/Navbar";
import '../assets/styles/style.css';
import { Principal } from "../components/Principal";
import { LatearlMenu } from "../components/LateralMenu";

export function App() {
  return (
    <div className="App">
      <Navbar />
      <LatearlMenu />
      <Principal />
    </div>
  );
}

