import { ChatRooms } from "./ChatRooms";
import { ChatMessages } from "./ChatMessages";

export const ChatBody = () => (
  <div className="h-screen overflow-hidden flex items-center justify-center" style={{ background:" #edf2f7"}}>
    <div className="w-screen">
      <div className="grid grid-cols-3 min-w-full border rounded" style={{ minHeight: "80vh"}}>
        <div className="col-span-1 bg-white border-r border-gray-300"><ChatRooms /></div>
        <div className="col-span-2 bg-white"><ChatMessages /></div>
      </div>
    </div>
  </div>
);