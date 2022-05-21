import { FilterSection } from '../organisms/FilterSection';
import { ShowScoreButton } from '../atoms/Button/ShowScoreButton';
import { Box, Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { FilterTitle } from '../molecules/FilterTitle';
import { filtersData } from '../../api/api';

interface IProps {
 onClose: () => void
}

export const FilterPage = (props: IProps) => {
  const { onClose } = props;
  return (
    <Box sx={{ margin: '0px', height: '100vh' }}>
      <AppBar position='fixed' >
        <FilterTitle onClose={onClose}/>
      </AppBar>
      <Box sx={{ paddingTop: '72px', paddingBottom: '82px' }}>
        {filtersData.map((item) => {
          return <FilterSection item={item} />;
        })}
      </Box>
      <AppBar position='fixed' sx={{ top: 'auto', bottom: 0 }}>
        <Container maxWidth='lg'>
          <ShowScoreButton />
        </Container>
      </AppBar>
    </Box>
  );
};