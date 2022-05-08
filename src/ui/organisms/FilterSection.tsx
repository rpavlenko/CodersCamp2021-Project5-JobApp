import { FiltersHeader } from '../atoms/FiltersHeader/FiltersHeader';
import { OptionsForFilterList } from '../molecules/OptionsForFilterList';
import { Accordion, AccordionDetails, AccordionSummary, styled } from '@mui/material';

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

  return (
    <>
      <Accordion>
        <AccordionSummary sx={{ padding: '0px', height: '30px', backgroundColor: '#eee' }}>
          <FiltersHeader category={category} />
        </AccordionSummary>
        <AccordionDetails>
          <OptionsForFilterList options={options} />
        </AccordionDetails>
      </Accordion>
    </>
  );
};