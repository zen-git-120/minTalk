import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [members, setMembers] = useState([])
  const [error, setError] = useState('')
  const [currentSpeaker, setCurrentSpeaker] = useState(null)
  const [completedMembers, setCompletedMembers] = useState([])

  const remainingMembers = members.filter(
    (member) => !completedMembers.includes(member)
  )

  const allCompleted = members.length > 0 && remainingMembers.length === 0

  function handleAddMember() {
    const trimmedName = name.trim()
    if (trimmedName === '') {
      setError('名前を入力してください')
      return
    }
    if (members.includes(trimmedName)) {
      setError('その名前はすでに登録されています')
      return
    }
    setMembers([...members, trimmedName])
    setName('')
    setError('')
  }

  function handleSelectSpeaker() {
    if (remainingMembers.length === 0) {
      return
    }
    if (currentSpeaker !== null) {
      return
    }
    const randomIndex = Math.floor(Math.random() * remainingMembers.length)
    setCurrentSpeaker(remainingMembers[randomIndex])
  }

  function handleCompleteTurn () {
    if(currentSpeaker === null) {
      return
    }

    setCompletedMembers([...completedMembers, currentSpeaker])
    setCurrentSpeaker(null)
  }
  
  return (
    <main>
      <h1>次に話す人</h1>
      <section>
        <h2>メンバーを追加</h2>
        <div className="member-form">
          <input type="text"
          placeholder="名前を入力"
          value={name}
          onChange={(event) => setName(event.target.value)}
          />
          <button type="button" onClick={handleAddMember}>追加</button>
        </div>
        {error && <p>{error}</p>}
      </section>
      <section>
        <h2>いま話す人</h2>
        <p>
          {currentSpeaker ?? (
            members.length === 0
            ? 'まずメンバーを追加してください'
            :allCompleted
              ? '全員が話し終えました'
              : 'ランダムに選ぶボタンを押してください'
          )}
        </p>
        <div className="speaker-actions">
          <button type="button" disabled={remainingMembers.length === 0 || currentSpeaker !== null} onClick={handleSelectSpeaker}>
            ランダムに選ぶ
          </button>
          <button type="button" disabled={currentSpeaker === null} onClick={handleCompleteTurn}>
            話し終えた
          </button>
          <button type="button">最初から</button>
        </div>
      </section>
      <section>
        <h2>メンバー一覧</h2>
        <ul>
          {members.map((member, index) => (
            <li key={index}>
              {member}:
              {member === currentSpeaker
                ? '今話す人'
                : completedMembers.includes(member)
                  ? '発言済み'
                  : '未発言'}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App