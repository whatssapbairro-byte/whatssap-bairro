import { useState } from 'react'

function App() {
  const [view, setView] = useState('home')
  const [password, setPassword] = useState('')
  const [isAuth, setIsAuth] = useState(false)

  const checkPassword = () => {
    // Defina aqui a sua senha secreta
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
            <input type="password" placeholder="Digite a senha" onChange={(e) => setPassword(e.target.value)} style={{padding: '10px', marginBottom: '10px'}} />
            <button onClick={checkPassword} style={styles.btnAdmin}>Entrar</button>
            <button onClick={() => setView('home')} style={styles.btnBack}>Voltar</button>
          </div>
        )}

        {view === 'admin' && (
          <div style={styles.card}>
            <h3>Painel do Administrador</h3>
            <p>Bem-vindo, Admin!</p>
            <button onClick={() => {setIsAuth(false); setView('home')}} style={styles.btnBack}>Sair</button>
          </div>
        )}

        {view === 'cliente' && (
          <div style={styles.card}>
            <h3>Área do Cliente</h3>
            <a href="https://wa.me/5511949988411" style={styles.btnWhatsapp}>Falar com Suporte</a>
            <button onClick={() => setView('home')} style={styles.btnBack}>Voltar</button>
          </div>
        )}
      </div>
    </div>
  )
}

// Mantenha os mesmos estilos (styles) da mensagem anterior...
