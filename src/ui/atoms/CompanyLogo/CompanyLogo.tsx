interface ICompanyLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}

export const CompanyLogo = ({
  className,
  src,
  alt,
  width,
  height,
}: ICompanyLogo) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};
