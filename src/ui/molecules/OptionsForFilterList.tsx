import { SingleFilterButton } from '../atoms/Button/SingleFilterButton';

interface IProps {
  options: { id: number, name: string }[]
}

export const OptionsForFilterList = (props: IProps) => {
  const { options } = props;
  return <>
    {options.map((item) => (
        <SingleFilterButton item={item}  />
    ))}
  </>;
};

