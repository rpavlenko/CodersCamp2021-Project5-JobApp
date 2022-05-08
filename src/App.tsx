import { BaseButton } from './ui/atoms/Button/BaseButton';
import { Container } from '@mui/material';
import { FilterButton } from './ui/atoms/Button/FilterButton';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import Header from './ui/organisms/Header';
import './index.css';
import { ListItem } from './ui/molecules/ListItem';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg">
        <header className="App-header">
          <p>Hello Vite + React + MaterialUI!</p>
          <BaseButton variant={'outlined'} color={'primary'} size={'large'}>
            Filtry
          </BaseButton>
          <FilterButton />
        </header>
        <ListItem
          jobType={'Zdalna'}
          jobTitle={'Junior Developer'}
          companyTitle={'Devire'}
          buttonTitle={'10000-15000 zł'}
          languageTitle={'javascript'}
        />
      </Container>
    </div>
  );
}
