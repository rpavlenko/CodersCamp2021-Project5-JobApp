import FavoriteIcon from '@mui/icons-material/Favorite';

interface IProps {
  onClick: (e: any) => void
}

export const FavoriteIconButton = (props: IProps) => {
  return (
    <>
      <FavoriteIcon
        sx={{ color: 'red', cursor: 'pointer' }}
        fontSize='medium'
        onClick={props.onClick}
      />
    </>
  );
};