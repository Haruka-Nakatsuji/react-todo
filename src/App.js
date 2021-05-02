import React, { useState } from 'react';
import { WhisperList } from './components/WhisperList';

function App() {
  const [userName, setUserName] = useState(['HELLO Whispper!']);
  const [whisperMsg, setWhisperMsg] = useState(['何かささやきたいことを入力してください。']);
  const [whisperList, setWhisperList] = useState(['firstwhis']);

  const onClickAddList = () => {
  if(document.querySelector('input').value === '' || document.querySelector('textarea').value === '') return;
  const inputValue =  document.querySelector('input').value;
  const textareaValue =  document.querySelector('textarea').value;

  const newUserName = [...userName, inputValue];
  const newWhisperMsg = [...whisperMsg, textareaValue];

  setUserName(newUserName);
  setWhisperMsg(newWhisperMsg);

  const newWhisperList = [...whisperList, 'whis!']; //indexを更新して無理矢理という方法
  setWhisperList(newWhisperList);

  // document.querySelector('input').value　= '';
  document.querySelector('textarea').value　= '';
  }

  const onClickDelete = index => {
    if(window.confirm('削除しますか？')) {
      const newWhisperList = [...whisperList];
      newWhisperList.splice(index, 1);
      setWhisperList(newWhisperList); 
    } else {
      return
    }
  }

  const sorry = () => {
    alert('ごめんね！ダミーです。');
  }

  return (
    <>
    <header>
      <h1>Whispper</h1>
    </header>
    <main>
      <section className="whisper-area">
        <input className="unko" type="text" placeholder="ユーザーネーム"  /><br />
        <textarea className="unkokko" placeholder="whisる"  ></textarea><br />
        <div className="wrap">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16" onClick={sorry}>
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
          </svg>
          <button className="whisper-btn" onClick={onClickAddList}>whisper</button>
        </div>
      </section>
      <section>
        <h2>whispers</h2>
        <ul>
          <WhisperList list={whisperList} userName={userName} whisperMsg={whisperMsg} onClick={onClickDelete} />
        </ul>
      </section>
    </main>
    </>
  );
}

export default App;
