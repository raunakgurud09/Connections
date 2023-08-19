import NextImage from 'next/image';
import defaultImage from '@/public/defaultAvatar.png';

interface props {
  src: string;
  alt: string;
  rest?: any;
}

const Image = ({ src, alt, ...rest }: props) => {
  return (
    <>
      <div className='opacity-90'>
        {src === '' ? (
          <NextImage alt={alt} src={defaultImage} {...rest} />
        ) : (
          <NextImage alt={''} src={src} {...rest} />
        )}
      </div>
    </>
  );
};
export default Image;
