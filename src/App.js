import Navbar from "./components/navbar/Navbar";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Navbar />
      <Analytics />
    </>
  );
}

export default App;
