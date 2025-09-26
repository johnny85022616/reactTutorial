import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const MessageList = styled.div.attrs({ className: 'MessageList' })`
  width: 350px;
  margin: 40px auto;
  background: #222;
  border-radius: 8px;
  overflow: hidden;
  overflow-x: hidden; /* ✅ 防止橫向破版 */
`;

const MessageRow = styled.div.attrs({ className: 'MessageRow' })`
  position: relative;
  width: calc(100% + 120px); /* 120px = 按鈕區寬度 */
  height: 48px;
  display: flex;
  align-items: center;
  background: #222;
  border-bottom: 1px solid #333;
  user-select: none;
  touch-action: pan-y;
  transition: ${({ $isTouching }) => ($isTouching ? 'none' : 'transform 0.2s')};
  transform: ${({ $offsetX }) => `translateX(${$offsetX}px)`};
`;

const MessageText = styled.div.attrs({ className: 'MessageText' })`
  width: 70%;
  color: #fff;
  padding-left: 16px;
  background: #222;
`;

const Actions = styled.div.attrs({ className: 'Actions' })`
  display: flex;
  height: 100%;
  min-width: 120px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
`;

const HideBtn = styled.button.attrs({ className: 'HideBtn' })`
  width: 60px;
  background: #333;
  color: #fff;
  border: none;
  font-size: 16px;
  height: 100%;
`;

const DeleteBtn = styled.button.attrs({ className: 'DeleteBtn' })`
  width: 60px;
  background: #e74c3c;
  color: #fff;
  border: none;
  font-size: 16px;
  height: 100%;
`;

const messagesData = [
  { id: 1, text: 'Hello, 早安你好abcdefghijklmnopqrstuvwxyzabcdefg！' },
  { id: 2, text: '今天要去哪裡？' },
  { id: 3, text: '晚上吃什麼？' },
];

function Line() {
  const [messages, setMessages] = useState(messagesData); // 訊息列表
  const [offsetMap, setOffsetMap] = useState({}); // 儲存每個訊息的偏移量
  const [touchingId, setTouchingId] = useState(null); // 目前正在觸控的訊息ID
  const startXRef = useRef({}); // 儲存每個訊息剛開始觸控的X座標
  const startOffsetRef = useRef(0); // 儲存剛開始觸控的偏移量(0或是-120)
  const preTouchingId = useRef(null); //記錄上次的ㄔㄟ
  console.log('init');

  // 手指觸控開始
  function handleTouchStart(e, id) {
    console.log('handleTouchStart', e);
    resetOffset(id)
    startXRef.current[id] = e.touches[0].clientX; //取得手指觸控的X座標
    startOffsetRef.current = offsetMap[id] || 0; //取得目前的偏移量(基本上只會是0或-120)
    setTouchingId(id);
  }
  // 手指觸控移動
  function handleTouchMove(e, id) {
    console.log('handleTouchMove');
    // if (touchingId !== id) return;
    const startX = startXRef.current[id]; //取得剛開始觸控的X座標(基本上移動的時候都不會變)
    const currentX = e.touches[0].clientX; //取得目前手指觸控的X座標
    const startOffset = startOffsetRef.current || 0; //取得剛開始的偏移量(基本上只會是0或-120，往左拉是0往右拉是-120)
    console.log(currentX, startX, currentX - startX);
    let diff = currentX - startX + startOffset; //計算偏移量
    if (diff < -120) diff = -120; //避免往左拉太多
    if (diff > 0) diff = 0; //避免往右拉

    setOffsetMap((prev) => ({ ...prev, [id]: diff }));
  }
  //手指觸控移動結束
  function handleTouchEnd(e, id) {
    console.log('handleTouchEnd');
    const offsetX = offsetMap[id] || 0;
    if (offsetX <= -60) {
      setOffsetMap((prev) => ({ ...prev, [id]: -120 })); //顯示全部按鈕
    } else {
      setOffsetMap((prev) => ({ ...prev, [id]: 0 })); //回到原位
    }
    preTouchingId.current = id
    setTouchingId(null);
  }

  function handleHide(id) {
    setOffsetMap((prev) => ({ ...prev, [id]: 0 }));
  }

  function handleDelete(id) {
    setMessages((msgs) => msgs.filter((m) => m.id !== id));
    setOffsetMap((prev) => {
      const newMap = { ...prev };
      delete newMap[id];
      return newMap;
    });
  }

  //將不是目前滑動的聊天列都歸回原位
  function resetOffset(touchingId){
      Object.entries(offsetMap).forEach(([key]) => {
      if (preTouchingId.current === touchingId) return; //若這次滑動的和上次滑動的是同一個就從目前的地方開始不回歸原位
      setOffsetMap((prev) => ({ ...prev, [key]: 0 }));
    });
  }

  return (
    <MessageList>
      {messages.map((msg) => (
        <div key={msg.id} style={{ position: 'relative', overflow: 'hidden' }}>
          <MessageRow
            $offsetX={offsetMap[msg.id] || 0}
            $isTouching={touchingId === msg.id}
            onTouchStart={(e) => handleTouchStart(e, msg.id)}
            onTouchMove={(e) => handleTouchMove(e, msg.id)}
            onTouchEnd={(e) => handleTouchEnd(e, msg.id)}
          >
            <MessageText>{msg.text}</MessageText>
            <Actions>
              <HideBtn onClick={() => handleHide(msg.id)}>隱藏</HideBtn>
              <DeleteBtn onClick={() => handleDelete(msg.id)}>刪除</DeleteBtn>
            </Actions>
          </MessageRow>
        </div>
      ))}
    </MessageList>
  );
}

export default Line;
