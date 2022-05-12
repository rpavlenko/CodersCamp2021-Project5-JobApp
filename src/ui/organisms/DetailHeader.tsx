import { DetailHeaderTitle } from '../molecules/DetailHeaderTitle/DetailHeaderTitle';
import { DetailOfferHeaderDescription } from '../molecules/DetailOfferHeaderDescription/DetailOfferHeaderDescription';
import { offerData } from '../../api/api';

export const DetailHeader = () => {
  return (
    <div>
      <DetailHeaderTitle offerData={offerData} />
      <DetailOfferHeaderDescription offerData={offerData} />
    </div>
  );
};
