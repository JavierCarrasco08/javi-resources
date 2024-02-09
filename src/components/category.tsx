import stylesScss from '../styles/category.module.scss';

interface Props {
  categories: string[];
}

export default function Category({ categories }: Props) {
  return (
    <select>
      <option defaultChecked>All</option>
      {categories.map((category: string, index) => (
        <option key={index}>{category}</option>
      ))}
    </select>
  );
}
