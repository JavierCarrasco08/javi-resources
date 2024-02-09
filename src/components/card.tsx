import stylesScss from '../styles/card.module.scss';
import type { Resource } from '../type.js';

export default function Card({ name, des, url, category, id }: Resource) {
  return (
    <article className={stylesScss.card}>
      <header>
        <h3 className={stylesScss.h3}>{name}</h3>
      </header>
      <p className={stylesScss.p}>{des}</p>
      <a
        className={stylesScss.a}
        href={url}
        target="_blank"
        rel="noopener noreferrer">
        👉 Ir a {name}
      </a>
    </article>
  );
}
