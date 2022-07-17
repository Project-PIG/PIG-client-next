import type { NextPage } from "next";
import Header from "../components/Header";
import Contents from "../components/Contents";
import Search from "../components/Search";
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Search />
      <Contents />
    </>
  );
};

export default Home;
