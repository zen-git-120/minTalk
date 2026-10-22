import './App.css'

function App() {
  
  return (
    <main>
      <h1>次に話す人</h1>
      <section>
        <h2>メンバーを追加</h2>
        <input type="text" placeholder="名前を入力" />
        <button type="button">追加</button>
      </section>
      <section>
        <h2>いま話す人</h2>
        <p>まずメンバーを追加してください</p>
        <button type="button">ランダムに選ぶ</button>
        <button type="button">話し終えた</button>
        <button type="button">最初から</button>
      </section>
      <section>
        <h2>メンバー一覧</h2>
      </section>
    </main>
  )
}

export default App