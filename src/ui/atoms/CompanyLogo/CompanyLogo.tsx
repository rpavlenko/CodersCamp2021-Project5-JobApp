import noImage from '../../../assets/No-image-available.png';

interface ICompanyLogo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className: string;
  style: {
    border: string;
    width: string;
    height: string;
  };
}

export const CompanyLogo = ({
  className,
  src,
  alt,
  width,
  height,
  style,
}: ICompanyLogo) => {
  return (
    <img
      className={className}
      src={src ? src : noImage}
      alt={alt}
      width={width}
      height={height}
      style={style}
    />
  );
};
