const steps = [
  ['01', 'Fundamento', 'Construa uma base técnica sólida.'],
  ['02', 'Técnica', 'Ganhe precisão em cada movimento.'],
  ['03', 'Leitura de jogo', 'Leve sua evolução para cada ponto.'],
];

export default function Method() {
  return (
    <section className="method-section section-pad" id="metodo">
      <div className="container method-layout">
        <div className="method-intro">
          <p className="eyebrow"><span /> O método Core</p>
          <h2>Treinar bem muda <em>o jogo.</em></h2>
          <p>Desenvolva fundamentos, técnica e leitura de jogo com treinos pensados para seu nível e seus objetivos.</p>
          <span className="method-side-note">DA PRIMEIRA BOLA<br />AO PRÓXIMO NÍVEL</span>
        </div>
        <ol className="method-steps">
          {steps.map(([number, title, description]) => (
            <li key={number}>
              <span className="step-number">{number}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
              <span className="step-arrow" aria-hidden="true">↗</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
