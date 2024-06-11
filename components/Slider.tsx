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
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  const images: { src: string; alt: string }[] = [
    { src: '/images/IMG_5304.JPG', alt: 'Image 1' },
    { src: '/images/IMG_5307.JPG', alt: 'Image 2' },
    { src: '/images/20180902205216.png', alt: 'Image 3' },
    { src: '/images/IMG_5316.JPG', alt: 'Image 4' },
    { src: '/images/yuta.jpg', alt: 'Image 5' },
  ];

  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-xs"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="relative flex aspect-square items-center justify-center p-6">
                    <Image
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
