import Image from 'next/image';
import img2 from '../public/images/yuta.jpg';
import React, { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Slider = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );

  const images: { src: string; alt: string }[] = [
    { src: '/images/IMG_5304.JPG', alt: 'Image 1' },
    { src: '/images/IMG_5300.JPG', alt: 'Image 2' },
    { src: '/images/20180902205216.png', alt: 'Image 3' },
    { src: '/images/IMG_5315.JPG', alt: 'Image 4' },
    { src: '/images/IMG_5307.JPG', alt: 'Image 5' },
    { src: '/images/IMG_6875.JPG', alt: 'Image 6' },
    { src: '/images/IMG_5320.JPG', alt: 'Image 7' },
    { src: '/images/IMG_5316.JPG', alt: 'Image 8' },
  ];

  return (
    <div className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className=""
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/3">
              <div className="">
                <Card>
                  <CardContent className="relative flex aspect-square items-center justify-center p-12">
                    <Image
                      className="w-full rounded-md"
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                    />
                    {index + 1}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Slider;
