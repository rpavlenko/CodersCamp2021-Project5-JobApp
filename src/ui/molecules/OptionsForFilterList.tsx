import { SingleFilterButton } from '../atoms/Button/SingleFilterButton';

interface IProps {
  options: { id: number, name: string }[]
  onButtonClick: (name: number) => void
}

export const OptionsForFilterList = (props: IProps) => {
  const { options, onButtonClick } = props;
  return <>
    {options.map((item) => (
        <SingleFilterButton item={item} onButtonClick={onButtonClick} />
    ))}
  </>;
};

