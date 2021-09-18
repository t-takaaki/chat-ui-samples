import { RoomList } from "../components/RoomList"
import { SearchBox } from "../components/SearchBox"

export const ChatRooms = () => (
  <>
    <div className="my-3 mx-3 ">
      <SearchBox />
    </div>
    <ul className="overflow-auto" style={{height: "500px"}}>
      <h2 className="ml-2 mb-2 text-gray-600 text-lg my-2">Chats</h2>
      <RoomList />
    </ul>
  </>
)