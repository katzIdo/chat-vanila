import {timestampToHHMM} from '../services/time';

let lastMessageUser = '';

export const MessageLine = (data) => {
    const {content, user, id, timestamp} = data;
      
    const line = document.createElement('div');
    line.setAttribute('class', `message 
    ${user.toLowerCase() === 'me'? 'self ' : ' '}
    ${lastMessageUser !== user ? 'with-arrow ': ' '}
    `)
  
     line.innerHTML = `
      <div class='massageD'>
        ${(lastMessageUser !== user || user.toLowerCase() === 'me')? `<div class='title'>${user}</div>`: ''}
        <div>${content}</div>
        <div class='time'>${timestampToHHMM(timestamp)}</div>
      </div>
     `

    lastMessageUser = user;
  
  
 
     return line;
  }

