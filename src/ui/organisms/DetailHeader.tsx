import { DetailHeaderTitle } from '../molecules/DetailHeaderTitle/DetailHeaderTitle';
import { DetailOfferHeaderDescription } from '../molecules/DetailOfferHeaderDescription/DetailOfferHeaderDescription';
import { IOfferData } from '../../api/models';

export const DetailHeader = ({ offerData }: { offerData: IOfferData }) => {
  return (
    <div>
      <DetailHeaderTitle offerData={offerData} />
      <DetailOfferHeaderDescription offerData={offerData} />
    </div>
  );
};
