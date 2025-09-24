import React, { useState, useRef } from 'react'
import styled from 'styled-components'

const MessageList = styled.div.attrs({className: 'MessageList'})`
  width: 350px;
  margin: 40px auto;
  background: #222;
  border-radius: 8px;
  overflow: hidden;
`

const MessageRow = styled.div.attrs({className: 'MessageRow'})`
  position: relative;
  width: calc(100% + 120px); /* 120px = 按鈕區寬度 */
  height: 48px;
  display: flex;
  align-items: center;
  background: #222;
  border-bottom: 1px solid #333;
  user-select: none;
  touch-action: pan-y;
  transition: ${({ isTouching }) => (isTouching ? 'none' : 'transform 0.2s')};
  transform: ${({ offsetX }) => `translateX(${offsetX}px)`};
`

const MessageText = styled.div.attrs({className: 'MessageText'})`
  flex: 1;
  color: #fff;
  padding-left: 16px;
  background: #222;
`

const Actions = styled.div.attrs({className: 'Actions'})`
  display: flex;
  height: 100%;
  min-width: 120px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
`

const HideBtn = styled.button.attrs({className:'HideBtn'})`
  width: 60px;
  background: #333;
  color: #fff;
  border: none;
  font-size: 16px;
  height: 100%;
`

const DeleteBtn = styled.button.attrs({className:'DeleteBtn'})`
  width: 60px;
  background: #e74c3c;
  color: #fff;
  border: none;
  font-size: 16px;
  height: 100%;
`

const messagesData = [
  { id: 1, text: 'Hello, 早安！' },
  { id: 2, text: '今天要去哪裡？' },
  { id: 3, text: '晚上吃什麼？' },
]

function Line() {
  const [messages, setMessages] = useState(messagesData)
  const [offsetMap, setOffsetMap] = useState({})
  const [touchingId, setTouchingId] = useState(null)
  const startXRef = useRef({})
  const startOffsetRef = useRef(0)

  function handleTouchStart(e, id) {
    startXRef.current[id] = e.touches[0].clientX
    startOffsetRef.current = offsetMap[id] || 0
    setTouchingId(id)
  }

  function handleTouchMove(e, id) {
    if (touchingId !== id) return
    const startX = startXRef.current[id]
    const currentX = e.touches[0].clientX
    const startOffset = startOffsetRef.current || 0
    let diff = currentX - startX + startOffset
    if (diff < -120) diff = -120
    if (diff > 0) diff = 0
    setOffsetMap(prev => ({ ...prev, [id]: diff }))
  }

  function handleTouchEnd(e, id) {
    const offsetX = offsetMap[id] || 0
    if (offsetX <= -60) {
      setOffsetMap(prev => ({ ...prev, [id]: -120 }))
    } else {
      setOffsetMap(prev => ({ ...prev, [id]: 0 }))
    }
    setTouchingId(null)
  }

  function handleHide(id) {
    setOffsetMap(prev => ({ ...prev, [id]: 0 }))
  }

  function handleDelete(id) {
    setMessages(msgs => msgs.filter(m => m.id !== id))
    setOffsetMap(prev => {
      const newMap = { ...prev }
      delete newMap[id]
      return newMap
    })
  }

  return (
    <MessageList>
      {messages.map(msg => (
        <div key={msg.id} style={{ position: 'relative', overflow: 'hidden' }}>
          <MessageRow
            offsetX={offsetMap[msg.id] || 0}
            isTouching={touchingId === msg.id}
            onTouchStart={e => handleTouchStart(e, msg.id)}
            onTouchMove={e => handleTouchMove(e, msg.id)}
            onTouchEnd={e => handleTouchEnd(e, msg.id)}
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
  )
}

export default Line