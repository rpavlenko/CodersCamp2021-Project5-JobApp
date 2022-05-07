import { FiltersHeader } from '../atoms/FiltersHeader/FiltersHeader';
import { OptionsForFilterList } from '../molecules/OptionsForFilterList';

interface IProps {
  item: {
    id: number,
    category: string,
    options: { id: number, name: string }[]
  }
}

export const FilterSection = (props: IProps) => {
  const { item } = props;
  const {category, options } = item;
  return (
    <>
      <FiltersHeader category={category} />
      <OptionsForFilterList options={options} />
    </>
  );
};