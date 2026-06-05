import { useState } from 'react'

function App() {
  const [view, setView] = useState('home') // 'home', 'admin', ou 'cliente'

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>WhatsApp do Bairro 100%</h1>
      
      {view === 'home' && (
        <div>
          <p>Escolha o seu perfil de acesso:</p>
          <button onClick={() => setView('admin')} style={btnStyle}>Área do Administrador</button>
          <button onClick={() => setView('cliente')} style={btnStyle}>Área do Cliente</button>
        </div>
      )}

      {view === 'admin' && (
        <div>
          <h2>Painel Administrativo</h2>
          <p>Gerencie os contatos da comunidade aqui.</p>
          <a href="https://wa.me/5511999999999?text=Olá, sou Admin!" style={waStyle}>Entrar como Admin</a>
          <br/><br/>
          <button onClick={() => setView('home')}>Voltar</button>
        </div>
      )}

      {view === 'cliente' && (
        <div>
          <h2>Área do Cliente</h2>
          <p>Fale diretamente com o nosso suporte.</p>
          <a href="https://wa.me/5511888888888?text=Olá, preciso de ajuda!" style={waStyle}>Falar com o Suporte</a>
          <br/><br/>
          <button onClick={() => setView('home')}>Voltar</button>
        </div>
      )}
    </div>
  )
}

// Estilos para manter o código limpo
const btnStyle = { margin: '10px', padding: '10px 20px', cursor: 'pointer' }
const waStyle = { padding: '15px 30px', backgroundColor: '#25D366', color: 'white', textDecoration: 'none', borderRadius: '25px', display: 'inline-block' }

export default App