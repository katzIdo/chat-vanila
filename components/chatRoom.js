import {chatService} from '../services/chat';
import {MessageLine} from './messageLine';
import {typingLine} from './typingLine';

const chatList = document.getElementById('chatList');
const chatTypers = document.getElementById('chatTypers');

export const ChatRoom = () => {
  const typers = new Set();
  chatService.typing$((typerList)=>{
    const line = typingLine(typerList);
    chatTypers.innerHTML = line;
  });
  chatService.recieve$((data)=>{

  const line = MessageLine(data);
  chatList.appendChild(line);
  line.scrollIntoView();
  }) 

}