import { ListItem } from '../molecules/ListItem';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IOfferData } from '../../api/models';

interface IProps {
  offers: IOfferData[];
}
export const OffersList = ({ offers }: IProps) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ marginBottom: '30px' }}>
      {offers.map((offer) => {
        const {
          id,
          jobType,
          jobTitle,
          companyTitle,
          salary,
          languageTitle,
          logo,
        } = offer;
        return (
          <ListItem
            key={id}
            jobType={jobType}
            jobTitle={jobTitle}
            companyTitle={companyTitle}
            buttonTitle={salary}
            languageTitle={languageTitle}
            logo={logo}
            onClick={() => navigate(`/detail/${offer.id}`)}
          />
        );
      })}
    </Box>
  );
};
