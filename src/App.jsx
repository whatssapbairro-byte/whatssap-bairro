import { useState } from 'react'

function App() {
  const [view, setView] = useState('home')
  const [password, setPassword] = useState('')
  const [isAuth, setIsAuth] = useState(false)

  const checkPassword = () => {
    // Sinta-se à vontade para mudar esta senha
    if (password === 'Sarahalves80') { 
      setIsAuth(true)
      setView('admin')
    } else {
      alert('Senha incorreta!')
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={{ margin: 0 }}>WhatsApp do Bairro</h2>
      </div>

      <div style={styles.content}>
        {view === 'home' && (
          <div style={styles.card}>
            <h3>Bem-vindo!</h3>
            <button onClick={() => setView('admin-login')} style={styles.btnAdmin}>Área do Administrador</button>
            <button onClick={() => setView('cliente')} style={styles.btnCliente}>Área do Cliente</button>
          </div>
        )}

        {view === 'admin-login' && (
          <div style={styles.card}>
            <h3>Acesso Restrito</h3>
            <input 
              type="password" 
              placeholder="Digite a senha" 
              onChange={(e) => setPassword(e.target.value)} 
              style={{padding: '10px', marginBottom: '10px', width: '80%'}} 
            />
            <br />
            <button onClick={checkPassword} style={styles.btnAdmin}>Entrar</button>
            <button onClick={() => setView('home')} style={styles.btnBack}>Voltar</button>
          </div>
        )}

        {isAuth && view === 'admin' && (
          <div style={styles.card}>
            <h3>Painel do Administrador</h3>
            <p>Bem-vindo, Admin!</p>
            <a href="https://wa.me/5511949988411" style={styles.btnWhatsapp}>Falar com Suporte Admin</a>
            <button onClick={() => {setIsAuth(false); setView('home')}} style={styles.btnBack}>Sair</button>
          </div>
        )}

        {view === 'cliente' && (
          <div style={styles.card}>
            <h3>Área do Cliente</h3>
            <a href="https://wa.me/5511888888888" style={styles.btnWhatsapp}>Falar com Suporte</a>
            <button onClick={() => setView('home')} style={styles.btnBack}>Voltar</button>
          </div>
        )}
      </div>
    </div>
  )
}

const styles = {
  container: { fontFamily: 'sans-serif', maxWidth: '400px', margin: 'auto', backgroundColor: '#ECE5DD', minHeight: '100vh' },
  header: { backgroundColor: '#075E54', color: 'white', padding: '20px', textAlign: 'center' },
  content: { padding: '20px' },
  card: { backgroundColor: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center' },
  btnAdmin: { backgroundColor: '#34B7F1', color: 'white', border: 'none', padding: '12px', width: '100%', marginBottom: '10px', borderRadius: '5px', cursor: 'pointer' },
  btnCliente: { backgroundColor: '#25D366', color: 'white', border: 'none', padding: '12px', width: '100%', borderRadius: '5px', cursor: 'pointer' },
  btnWhatsapp: { display: 'block', backgroundColor: '#25D366', color: 'white', padding: '15px', borderRadius: '25px', textDecoration: 'none', marginBottom: '10px' },
  btnBack: { background: 'none', border: 'none', color: '#075E54', cursor: 'pointer', marginTop: '10px' }
}

export default App
