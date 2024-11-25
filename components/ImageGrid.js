import Image from 'next/image';

const ImageGrid = () => {
  const images = [
    { src: "/gallery/gallery1.jpg", alt: "Fourways Dental Studio Happy Client 1" },
    { src: "/gallery/gallery3.jpg", alt: "Fourways Dental Studio Happy Client 2" },
    { src: "/gallery/gallery7.jpg", alt: "Fourways Dental Studio Happy Client 3" },
    { src: "/gallery/gallery8.jpg", alt: "Fourways Dental Studio Happy Client 4" },
    { src: "/gallery/gallery2.jpg", alt: "Fourways Dental Studio Happy Client 5" },
    { src: "/gallery/gallery4.jpg", alt: "Fourways Dental Studio Happy Client 6" },
    { src: "/gallery/gallery5.jpg", alt: "Fourways Dental Studio Happy Client 7" },
    { src: "/gallery/gallery6.jpg", alt: "Fourways Dental Studio Happy Client 8" },
  ];

  return (
    <div className="flex flex-wrap -mx-2">
      {images.map((image, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
