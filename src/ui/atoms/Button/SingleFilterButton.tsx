import { BaseButton } from './BaseButton';
import { useState } from 'react';

interface IProps {
  item: { id: number, name: string }
  onButtonClick: (id: number) => void
}

export const SingleFilterButton = (props: IProps) => {
  const { id, name } = props.item;
  const { onButtonClick } = props
  const [selected, setSelected] = useState<boolean>(false);

  const handleClick = () => {
    setSelected((prevValue) => !prevValue);
    onButtonClick(id)
  };

  return (
    <BaseButton
      onClick={handleClick}
      variant={'outlined'}
      size={'small'}
      sx={{
        borderRadius: 0,
        color: selected ?'red' : '#ddd',
        borderColor: selected ? 'red' : '#ddd',
        textTransform: 'none',
        mt: '10px',
        mr: 1,
      }}>
      {name}
    </BaseButton>
  );
};
