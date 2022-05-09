interface ICompanyTitle {
  title: string;
}

export const CompanyTitle = ({ title }: ICompanyTitle) => {
  return <span>{title}</span>;
};
