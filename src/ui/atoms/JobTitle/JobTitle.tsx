interface IJobTitle {
  title: string;
}

export const JobTitle = ({ title }: IJobTitle) => {
  return <span>{title}</span>;
};
