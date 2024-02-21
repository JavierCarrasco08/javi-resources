import stylesScss from '../styles/category.module.scss';

interface Props {
  categories: string[];
  onEventChange: (e: string) => void;
}

export default function Category({ categories, onEventChange }: Props) {
  return (
    <select
      className={stylesScss.select}
      onChange={(e) => {
        onEventChange(e.target.value);
      }}>
      <option defaultChecked>All</option>
      {categories.map((category: string, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
