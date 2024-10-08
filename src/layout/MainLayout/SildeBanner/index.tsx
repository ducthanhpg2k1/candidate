/* eslint-disable react/display-name */
import React, { useEffect } from 'react';

import { Button, Image } from '@nextui-org/react';
import clsx from 'clsx';
import { isMobile } from 'react-device-detect';
import { ResponsiveContainer, StackedCarousel } from 'react-stacked-center-carousel';

const data = [
  {
    cover: '/static/images/banner-1.png',
  },
  {
    cover: '/static/images/banner-2.png',
  },
  {
    cover: '/static/images/banner-1.png',
  },
  {
    cover: '/static/images/banner-2.png',
  },
];

const SildeBanner = () => {
  const ref = React.useRef<any>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      ref.current?.goNext(); // Automatically move to the next slide
    }, 2500); // Change slide every 2.5 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div className='flex justify-center items-center relative z-10'>
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          return (
            <StackedCarousel
              ref={carouselRef}
              customScales={[0.7, 0.7, 0.7]}
              slideComponent={Card}
              slideWidth={isMobile ? 340 : 1100}
              carouselWidth={parentWidth}
              data={data}
              maxVisibleSlide={3}
              currentVisibleSlide={3}
              useGrabCursor
              fadeDistance={0.1}
              height={isMobile ? 200 : 400}
              swipeSpeed={0.1}
            />
          );
        }}
      />
      <>
        <Button
          onClick={() => ref.current?.goBack()}
          isIconOnly
          size='md'
          className='absolute left-20 md:left-32 z-50 bg-white shadow-lg'
          radius='full'
        >
          <Image
            src={'/static/icons/ic-arrow-left.svg'}
            className='w-4 h-4'
            width={16}
            height={16}
            alt=''
          />
        </Button>
        <Button
          onClick={() => ref.current?.goNext()}
          isIconOnly
          size='md'
          className='absolute right-20 md:right-32 z-50 bg-white shadow-lg'
          radius='full'
        >
          <Image
            src={'/static/icons/ic-arrow-right.svg'}
            className='w-4 h-4'
            width={16}
            height={16}
            alt=''
          />
        </Button>
      </>
    </div>
  );
};
export default SildeBanner;

export const Card = React.memo(function (props: any) {
  const { data, dataIndex, isCenterSlide } = props;
  const { cover } = data[dataIndex];

  return (
    <div
      className={clsx(
        'w-full h-[400px] relative transition-colors z-10 flex justify-center items-center',
        {
          'h-[200px]': isMobile,
        },
      )}
    >
      <img
        className={clsx('w-full h-full  rounded-2xl shadow-2xl', {
          'bg-white opacity-50': !isCenterSlide,
        })}
        draggable={false}
        alt=''
        src={cover}
      />
    </div>
  );
});
