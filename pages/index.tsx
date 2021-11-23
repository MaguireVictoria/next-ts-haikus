import type { NextPage } from "next";
import Header from "../src/layout/Header";
import Footer from "../src/layout/Footer";
import Main from "../src/layout/Main";
import Home from "../src/Home/Home";

const App: NextPage = () => {
  return <>
  <Header/>
  <Main>
    <Home/>
  </Main>
  <Footer/>
  </>;
};

export default App;
