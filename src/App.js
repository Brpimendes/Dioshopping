import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <MainRoutes />
      <Footer />
    </Router>
  );
};

export default App;
