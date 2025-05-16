import HistoryChat from "./HistoryChat";
import MainChat from "./MainChat";

const Chat = () => {
  return (
    <section className="flex">
      <HistoryChat/>
      <MainChat
      />
    </section>
  );
};


export default Chat;
