import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface ISearchInput {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export const SearchInput = ({
  onSubmit,
  searchTerm,
  setSearchTerm,
}: ISearchInput) => {
  return (
    <Paper
      component="form"
      onSubmit={onSubmit}
      action=""
      method="POST"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '42px',
        '&:hover': {
          bgcolor: 'primary.dark',
        },
      }}
    >
      <InputBase
        sx={[
          { ml: 1, flex: 1 },
          {
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          },
        ]}
        placeholder="Wpisz, aby wyszukać"
        inputProps={{ 'aria-label': 'Wpisz, aby wyszukać' }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
