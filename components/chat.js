import {chatService} from '../services/chat';
import {ChatRoom} from './chatRoom';

const btn = document.getElementById('sendBtn');
const inputMessage = document.getElementById('inputMessage');

export const Chat = () => {
btn.addEventListener('click', (ev)=>{
  ev.preventDefault();
  chatService.send(inputMessage.value);
  inputMessage.value = '';
})

ChatRoom()

}