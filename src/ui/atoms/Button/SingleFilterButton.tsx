import { BaseButton } from './BaseButton';
import { useState } from 'react';

interface IProps {
  item: { id: number, name: string }
}

export const SingleFilterButton = (props: IProps) => {
  const { name } = props.item;
  const [selected, setSelected] = useState<boolean>(false);

  const handleClick = () => {
    setSelected((prevValue) => !prevValue);
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
