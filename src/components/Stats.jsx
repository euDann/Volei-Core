const stats = [
  ['500+', 'alunos formados'],
  ['03', 'planos de treino'],
  ['5★', 'avaliação média'],
];

export default function Stats() {
  return (
    <section className="stats" aria-label="Volei Core em números">
      <div className="container stats-inner">
        <p className="stats-label">Evolução que<br />continua em jogo.</p>
        {stats.map(([value, label], index) => (
          <div className="stat" key={label}>
            <span className="stat-index">0{index + 1}</span>
            <strong>{value}</strong>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
