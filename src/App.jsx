import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [members, setMembers] = useState([])
  const [error, setError] = useState('')
  const [currentSpeaker, setCurrentSpeaker] = useState(null)

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
    if (members.length === 0) {
      return
    }
    if (currentSpeaker !== null) {
      return
    }
    const randomIndex = Math.floor(Math.random() * members.length)
    setCurrentSpeaker(members[randomIndex])
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
            : 'ランダムに選ぶボタンを押してください'
          )}
        </p>
        <div className="speaker-actions">
          <button type="button" disabled={members.length === 0 || currentSpeaker !== null} onClick={handleSelectSpeaker}>
            ランダムに選ぶ
            </button>
          <button type="button">話し終えた</button>
          <button type="button">最初から</button>
        </div>
      </section>
      <section>
        <h2>メンバー一覧</h2>
        <ul>
          {members.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App