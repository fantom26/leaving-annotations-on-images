import { Footer, Header } from "components";
import { Gallery } from "pages/home";

export const App = () => (
  <div className="wrapper">
    <Header />
    <main>
      <Gallery />
    </main>
    <Footer />
  </div>
);
