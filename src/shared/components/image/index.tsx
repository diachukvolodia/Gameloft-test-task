import { memo, useState } from 'react';
import type { ImgHTMLAttributes, FC } from 'react';
import classNames from 'clsx';
import { Spinner } from '../spinner';

type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

const ImageComponent: FC<ImageProps> = ({ className, ...rest }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleLoad = () => {
    console.log('loaded');
    setIsLoading(false);
  };

  const handleError = () => {
    console.log('error');
    setIsLoading(false);
    setIsError(true);
  };

  return (
    <div className={classNames('relative flex items-center justify-center', className)}>
      {!isError && (
        <img
          {...rest}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          className={classNames('w-full h-full')}
        />
      )}

      {isLoading && !isError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner width={20} height={20} border={10} />
        </div>
      )}

      {isError && (
        <div className="absolute inset-0 bg-gray-200 border border-red-500 flex items-center justify-center text-gray-500">
          No image
        </div>
      )}
    </div>
  );
};

export const Image = memo(ImageComponent);
