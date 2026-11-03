import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [members, setMembers] = useState([])
  const [error, setError] = useState('')

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
        <p>まずメンバーを追加してください</p>
        <div className="speaker-actions">
          <button type="button">ランダムに選ぶ</button>
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