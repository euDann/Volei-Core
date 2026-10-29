export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid container">
        <div className="hero-copy">
          <p className="hero-tag"><span /> Site fictício · projeto demonstrativo</p>
          <h1>Seu próximo nível <em>mora em quadra.</em></h1>
          <p className="hero-description">
            Treinos personalizados, técnica e metodologia para quem quer evoluir — do primeiro fundamento ao jogo avançado.
          </p>
          <div className="hero-actions">
            <a className="button" href="https://wa.me/?text=Quero%20treinar%20no%20Volei%20Core" target="_blank" rel="noopener noreferrer">
              Quero treinar <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#planos">Conheça os planos <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-caption"><span className="caption-dot" /> Técnica. Confiança. Evolução.</div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="art-coordinate">VC <span>/ 01</span></div>
          <div className="court-orbit court-orbit-one" />
          <div className="court-orbit court-orbit-two" />
          <div className="volleyball"><span className="volleyball-seam seam-one" /><span className="volleyball-seam seam-two" /><span className="volleyball-seam seam-three" /></div>
          <div className="floating-tag"><span /> Site fictício · projeto demonstrativo</div>
          <div className="art-vertical-label">BUILT IN THE COURT</div>
          <div className="art-number">01</div>
        </div>
      </div>
      <div className="hero-bottom-rule"><span>VOLEI CORE</span><span>TREINAMENTO PARA EVOLUIR</span></div>
    </section>
  );
}
