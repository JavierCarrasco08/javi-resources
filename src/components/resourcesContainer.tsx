import Category from './category';
import Card from './card';
import stylesScss from '../styles/resourcesContainer.module.scss';
import type { Resource } from '../type.js';
import { useRef, useState, useEffect } from 'react';

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
  const [resourceState, setResourceState] = useState<Resource[]>(resources);
  const [useDownAnimation, setDownAnimation] = useState<boolean>(false);
  const mainRef = useRef<null | HTMLElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    const top: number = mainRef.current!.getBoundingClientRect().top;
    if (Math.floor(top) < window.scrollY) {
      setDownAnimation(true);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll(): void {
    const top: number = mainRef.current!.getBoundingClientRect().top;
    if (window.scrollY > Math.floor(top)) {
      setDownAnimation(true);
    }
  }

  function handleChangeSelect(e: string): void {
    if (categories.includes(e)) {
      const resourcesFilter: Resource[] = resources.filter(
        (resource) => resource.category === e
      );
      setResourceState(resourcesFilter);
    } else {
      setResourceState(resources);
    }
  }

  return (
    <main className={stylesScss.main} ref={mainRef}>
      <header className={stylesScss.header}>
        {category && (
          <Category
            categories={categories}
            onEventChange={handleChangeSelect}
          />
        )}
      </header>
      <section
        className={`${stylesScss.section} ${
          useDownAnimation === true ? stylesScss.animation : 'no-Animation'
        }`}>
        {resourceState.map((resource: Resource) => (
          <Card key={Math.random()} {...resource} />
        ))}
      </section>
    </main>
  );
}
