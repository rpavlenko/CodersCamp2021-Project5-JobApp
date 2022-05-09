import { FilterSection } from '../organisms/FilterSection';
import { ShowScoreButton } from '../atoms/Button/ShowScoreButton';
import { Box, Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { FilterTitle } from '../molecules/FilterTitle';

interface IProps {
  data: {
    id: number,
    category: string,
    options: { id: number, name: string }[]
  }[],
}

export const FilterPage = (props: IProps) => {
  return (
    <Box sx={{ margin: '0px', backgroundColor: 'white', height: '100vh' }}>
      <FilterTitle />
      {props.data.map((item) => {
        return <FilterSection item={item} />;
      })}
      <AppBar position='fixed' sx={{ top: 'auto', bottom: 0 }}>
        <Container maxWidth='lg'>
          <ShowScoreButton />
        </Container>
      </AppBar>
    </Box>
  );
};