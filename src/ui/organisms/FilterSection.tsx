import { FiltersHeader } from '../atoms/FiltersHeader/FiltersHeader';
import { OptionsForFilterList } from '../molecules/OptionsForFilterList';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { useState } from 'react';

interface IProps {
  item: {
    id: number,
    category: string,
    options: { id: number, name: string }[]
  }
}

export const FilterSection = (props: IProps) => {
  const { item } = props;
  const { category, options } = item;
  const [chosenArray, setChosenArray] = useState<number[]>([]);
  const handleAddToArray = (id: number) => {
    if (chosenArray.includes(id)) {
      setChosenArray((prevValue) => prevValue.filter((item: number) => id !== item));
      return;
    }
    setChosenArray((prevValue) => [...prevValue, id]);
  };

  return (
    <>
      <Accordion sx={{
        // EDGE CASE - DO NOT TOUCH
        '&.Mui-expanded': {
          margin: 0,
        },
      }}>
        <AccordionSummary sx={{ padding: '0px', height: '30px' }}>
          <FiltersHeader category={category} numberCategories={chosenArray.length} />
        </AccordionSummary>
        <AccordionDetails sx={{paddingBottom: '10px'}}>
          <OptionsForFilterList options={options} onButtonClick={handleAddToArray} />
        </AccordionDetails>
      </Accordion>
    </>
  );
};