import { Room } from './Room'

export const RoomList = () => (
    <li>
        <Room active={false} name="Jhon C" time="5 minutes" message="Hello world!!" imgSrc="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
        <Room active={true} name="Eduard" time="15 minutes" message="I am fine"imgSrc="https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
        <Room active={false} name="Celia" time="1 hour" message="Last message" imgSrc="https://images.pexels.com/photos/6238133/pexels-photo-6238133.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
    </li>
)