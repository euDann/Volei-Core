import { plans } from '../data/plans.js';

function Plan({ plan, index }) {
  const classes = `plan${plan.featured ? ' plan-featured' : ''}`;
  const message = encodeURIComponent(plan.message);

  return (
    <article className={classes}>
      <div className="plan-topline"><span>0{index + 1}</span>{plan.featured && <span className="popular">Mais escolhido</span>}</div>
      <h3>{plan.name}</h3>
      <div className="price"><span>R$</span>{plan.price}<small>/ mês</small></div>
      <p className="plan-frequency">{plan.cadence}</p>
      <ul className="plan-features">
        {plan.features.map((feature) => <li key={feature}><span aria-hidden="true">+</span>{feature}</li>)}
      </ul>
      <a
        className={`button plan-button${plan.featured ? '' : ' button-outline'}`}
        href={`https://wa.me/?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Escolher plano <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}

export default function Plans() {
  return (
    <section className="plans-section section-pad" id="planos">
      <div className="container">
        <div className="plans-heading">
          <div>
            <p className="eyebrow"><span /> Planos de treino</p>
            <h2>Encontre seu<br /><em>ritmo de jogo.</em></h2>
          </div>
          <p>Três caminhos para treinar. Escolha o que combina com seu momento e fale com a equipe para começar.</p>
        </div>
        <div className="plans-grid">
          {plans.map((plan, index) => <Plan key={plan.name} plan={plan} index={index} />)}
        </div>
        <p className="plans-note">Todos os planos são mensais. Consulte a equipe para tirar dúvidas.</p>
      </div>
    </section>
  );
}
