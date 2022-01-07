import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';


const projectID="2a3b3f0e-100d-4022-a685-3e2277ba1b91"
const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return(
    <ChatEngine 
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      
      // userName="javascriptmastry"
      // userSecret="123456"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      //onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    
    />
  );
}

export default App;
