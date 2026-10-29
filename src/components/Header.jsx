import { useState } from 'react';

const contactUrl = 'https://wa.me/?text=Quero%20saber%20sobre%20os%20treinos%20do%20Volei%20Core';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="Volei Core, início" onClick={closeMenu}>
          <span className="brand-mark">VC</span>
          <span className="brand-name">VOLEI <strong>CORE</strong></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Navegação principal">
          <a href="#inicio" onClick={closeMenu}>Início</a>
          <a href="#planos" onClick={closeMenu}>Planos</a>
          <a href="#metodo" onClick={closeMenu}>O método</a>
        </nav>

        <a className="button button-small header-contact" href={contactUrl} target="_blank" rel="noopener noreferrer">
          Fale com a equipe <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
