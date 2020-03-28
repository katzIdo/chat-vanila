const TYPING_TIMER = 8000;

/**
 * manage typing
 */
const manageTyping = (cb) => {
  const typingList = new Set();
  const typingTimers = {};
  
  const typingTimer = (whoIsTyping) => {
 
    if (typingTimers[whoIsTyping]) {
      clearTimeout(typingTimers[whoIsTyping]);
    }
    typingTimers[whoIsTyping] = setTimeout(()=>{
      typingList.delete(whoIsTyping);
       cb(Array.from(typingList));
    },TYPING_TIMER)
  }

  window.Chat.onTyping((whoIsTyping)=>{
    if ( whoIsTyping.toLowerCase() === 'me'){
      return;
    }
    typingTimer(whoIsTyping);
    typingList.add(whoIsTyping);
    cb(Array.from(typingList));
  });
}

/**
 * chatService
 */
export const chatService =  {
    recieve$ : (cb) => {
      window.Chat.onMessage((msg)=>{
        cb(msg);
      })
    },
    typing$ : manageTyping,
    send: (data) =>{
      window.Chat.sendMessage(data);
    }
}