import { Message } from "./Message"

export const MessageBox = () => (
  <ul>
    <li className="clearfix2">
      <Message body="Hello bro" sentAt="10:30pm" my={false} />
      <Message body="Hello" sentAt="10:32pm" my={true} />
      <Message body="how are you?" sentAt="10:32pm" my={true} />
      <Message body="I am fine" sentAt="10:42pm" my={false} />
    </li>
  </ul>
)