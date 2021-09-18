// RCE CSS
import 'react-chat-elements/dist/main.css';
import "./App.css"
// from react-chat-elements#example: https://github.com/Detaysoft/react-chat-elements/tree/master/example
import App from './App'

const Index = () => (
  <div className="elements-wrapper" style={{background: "navajowhite"}}>
    <App />
  </div>
)

export default Index;