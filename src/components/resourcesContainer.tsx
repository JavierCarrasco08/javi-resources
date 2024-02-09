import Category from './category';
import Card from './card';
import stylesScss from '../styles/resourcesContainer.module.scss';
import type { Resource } from '../type.js';

interface Props {
  categories: string[];
  category?: boolean;
  resources: Resource[];
}

export default function ResourcesContainer({
  categories,
  resources,
  category = false,
}: Props) {
  return (
    <main className={stylesScss.main}>
      <header className={stylesScss.header}>
        {category && <Category categories={categories} />}
      </header>
      <section className={stylesScss.section}>
        {resources.map((resource: Resource) => (
          <Card key={resource.id} {...resource} />
        ))}
      </section>
    </main>
  );
}
