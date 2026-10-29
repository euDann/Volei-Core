export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand" href="#inicio" aria-label="Vôlei Core, voltar ao início">
          <span className="brand-mark">VC</span><span className="brand-name">VÔLEI <strong>CORE</strong></span>
        </a>
        <span className="footer-copy">© 2026 Vôlei Core. Todos os direitos reservados.</span>
        <div className="footer-links">
          <a href="https://wa.me/?text=V%C3%B4lei%20Core" target="_blank" rel="noopener noreferrer">WhatsApp <span>↗</span></a>
        </div>
      </div>
    </footer>
  );
}
