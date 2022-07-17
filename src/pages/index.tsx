import type { NextPage } from "next";
import Header from "../components/Header";
import Contents from "../components/Contents";
import Search from "../components/Search";
import { useState } from "react";

const Home: NextPage = () => {
  type SelectMajorTpye = string[];

  const [selectMajor, setSelectMajor] = useState<SelectMajorTpye>([]);
  const [search, setSearch] = useState("");

  return (
    <>
      <Header />
      <Search
        list={selectMajor}
        fn={setSelectMajor}
        search={search}
        setSearch={setSearch}
      />
      <Contents list={selectMajor} search={search} />
    </>
  );
};

export default Home;
