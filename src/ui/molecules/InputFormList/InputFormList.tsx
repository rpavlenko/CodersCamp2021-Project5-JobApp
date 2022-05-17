import { BasicInputForm } from '../../atoms/InputForm/BasicInputForm';

const labelData = [
  {
    id: 1,
    label: 'Imię i nazwisko',
    requiredStar: true,
  },
  {
    id: 2,
    label: 'Adres e-mail',
    requiredStar: true,
  },
  {
    id: 3,
    label: 'Profil LinkedIn',
    requiredStar: false,
  },
  {
    id: 4,
    label: 'Profil GitHub',
    requiredStar: false,
  },
  {
    id: 5,
    label: 'Lokalizacja',
    requiredStar: true,
  }
];

export const InputFormList = () => {
    return (
      <>
        {labelData.map((item) => <BasicInputForm
          item={item} />
        )}
      </>
    );
  }
;