import React, { Fragment, useState } from 'react';
import { chat } from '../api/chat';
import ScrollToBottom from 'react-scroll-to-bottom';

var cnt = 0;

const Chat = () => {
  const [msg, setMsg] = useState('');
  const [messages, setMessages] = useState([]);

  const changeHandle = (e) => {
    setMsg(([e.target.name] = e.target.value));
  };

  const clickHandle = (e) => {
    setMessages([...messages, { sender: 'user', msg: msg }]);
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    const res = await chat('id1', msg);
    setMessages([...messages, { sender: 'bot', msg: res.data.cnt }]);
    setMsg('');
  };
  return (
    <Fragment>
      <div className='chat-box'>
        <header className='header'>
          <h1>Chatterbot</h1>
        </header>
        <ScrollToBottom className='messages'>
          {messages.length > 0 &&
            messages.map((message) => (
              <div
                className={message.sender === 'bot' ? 'message-bot' : 'message-user'}
                key={cnt++}
              >
                <div className={message.sender === 'bot' ? 'msg-bot' : 'msg-user'}>
                  <p>{message.msg}</p>
                </div>
              </div>
            ))}
        </ScrollToBottom>
        <form className='form' onSubmit={(e) => submitHandle(e)}>
          <input
            type='text'
            placeholder='Message'
            name='message'
            onChange={(e) => changeHandle(e)}
            value={msg}
            className='input'
          />
          <button
            className='btn btn-submit'
            type='submit'
            disabled={msg === ''}
            onClick={(e) => clickHandle(e)}
          >
            Send
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Chat;
