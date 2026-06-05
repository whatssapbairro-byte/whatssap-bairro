import { useState } from 'react'

function App() {
  const [view, setView] = useState('home')

  return (
    <div style={styles.container}>
      {/* Barra superior estilo WhatsApp */}
      <div style={styles.header}>
        <h2 style={{ margin: 0 }}>WhatsApp do Bairro</h2>
        <span style={styles.status}>Online</span>
      </div>

      <div style={styles.content}>
        {view === 'home' && (
          <div style={styles.card}>
            <h3>Bem-vindo!</h3>
            <p>Selecione seu perfil para continuar:</p>
            <button onClick={() => setView('admin')} style={styles.btnAdmin}>Área do Administrador</button>
            <button onClick={() => setView('cliente')} style={styles.btnCliente}>Área do Cliente</button>
          </div>
        )}

        {view === 'admin' && (
          <div style={styles.card}>
            <h3>Painel do Administrador</h3>
            <a href="https://wa.me/5511999999999" style={styles.btnWhatsapp}>Falar com Suporte Admin</a>
            <button onClick={() => setView('home')} style={styles.btnBack}>Voltar</button>
          </div>
        )}

        {view === 'cliente' && (
          <div style={styles.card}>
            <h3>Área do Cliente</h3>
            <a href="https://wa.me/5511888888888" style={styles.btnWhatsapp}>Falar no WhatsApp</a>
            <button onClick={() => setView('home')} style={styles.btnBack}>Voltar</button>
          </div>
        )}
      </div>
    </div>
  )
}

const styles = {
  container: { fontFamily: 'Segoe UI, sans-serif', maxWidth: '400px', margin: 'auto', backgroundColor: '#ECE5DD', minHeight: '100vh' },
  header: { backgroundColor: '#075E54', color: 'white', padding: '20px', textAlign: 'center' },
  status: { fontSize: '0.8rem', opacity: 0.8 },
  content: { padding: '20px' },
  card: { backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', textAlign: 'center' },
  btnAdmin: { backgroundColor: '#34B7F1', color: 'white', border: 'none', padding: '12px', width: '100%', marginBottom: '10px', borderRadius: '5px', cursor: 'pointer' },
  btnCliente: { backgroundColor: '#25D366', color: 'white', border: 'none', padding: '12px', width: '100%', borderRadius: '5px', cursor: 'pointer' },
  btnWhatsapp: { display: 'block', backgroundColor: '#25D366', color: 'white', padding: '15px', borderRadius: '25px', textDecoration: 'none', marginBottom: '10px' },
  btnBack: { background: 'none', border: 'none', color: '#075E54', cursor: 'pointer', marginTop: '10px' }
}

export default App
