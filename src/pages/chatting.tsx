import Chatted from "../components/ChattedPeople";
import Chatting from "../components/Chatting";
import Header from "../components/Header";
import Search from "../components/Search";

export default function Profile() {
  return (
    <>
      <Header />
      <Chatted />
      <Chatting />
    </>
  );
}
