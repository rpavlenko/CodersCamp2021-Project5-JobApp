
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface IProps {
  onClick: (e: any) => void
}

export const FavoriteBorderIconButton = (props: IProps) => {
  return (
      <>
        <FavoriteBorderIcon sx={{color: 'secondary', cursor: 'pointer'}}
                            fontSize='medium'
                            onClick={props.onClick}
        />
      </>
    )

}