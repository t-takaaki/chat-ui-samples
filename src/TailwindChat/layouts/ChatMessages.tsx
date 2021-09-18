import { User } from "../components/User";
import { MessageBox } from "../components/MessageBox";
import { InputBox } from "../components/InputBox";

export const ChatMessages = () => (
  <div className="w-full">
    <User
      name="Eduard"
      active={true}
      imgSrc="https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    />
    <div
      id="chat"
      className="w-full overflow-y-auto p-10 relative"
      style={{ height: "700px" }}
    >
      <MessageBox />
    </div>
    <div className="w-full py-3 px-3 flex items-center justify-between border-t border-gray-300">
      <InputBox />
    </div>
  </div>
);
