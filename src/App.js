import { Helmet } from "react-helmet";
import Navbar from "./components/navbar/Navbar";
import { Analytics } from "@vercel/analytics/react";
import SchemaMarkup from "./schemaMarkup";
import MetaTags from "./metaTags";

function App() {
  return (
    <>
      <Helmet>
        <MetaTags />
        <SchemaMarkup />
      </Helmet>
      <Navbar />
      <Analytics />
    </>
  );
}

export default App;
