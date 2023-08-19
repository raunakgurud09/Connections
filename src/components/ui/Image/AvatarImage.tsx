import NextImage from 'next/image';
import cx from "classnames"
import { default_image } from '@/constants/index';

interface props {
  src: string;
  alt: string;
  width?: number
  height?: number
  rest?: any;
}

const AvatarImage = ({ src, alt, ...rest }: props) => {
  return (
    <>
      <div className='opacity-90'>
        {src === '' ? (
          <NextImage
            alt={alt}
            src={default_image}
            width={48}
            height={48}
            {...rest}
            className='rounded-md w-8 h-8'
          />
        ) : (
          <NextImage
            alt={'profile-pic'}
            src={src}
            {...rest}
            width={48}
            height={48}
            className={cx('rounded-md w-8 h-8', rest)}
          />
        )}
      </div>
    </>
  );
};
export default AvatarImage;
