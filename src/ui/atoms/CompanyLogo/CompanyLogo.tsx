import noImage from '../../../assets/No-image-available.png';
import CSS from 'csstype';

interface ICompanyLogo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className: string;
  style?: React.CSSProperties;
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
