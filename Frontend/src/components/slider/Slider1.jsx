import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";

export function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <Box
      className={className}
      onClick={onClick}
      borderRadius="50%"
      width="40px"
      height="40px"
      position="absolute"
      right="10px"
      top="50%"
      transform="translateY(-50%)"
      zIndex="1"
      cursor="pointer"
      
      
    />
  );
}

export function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <Box
      className={className}
      onClick={onClick}
      borderRadius="50%"
      width="40px"
      height="40px"
      position="absolute"
      left="10px"
      top="50%"
      transform="translateY(-50%)"
      zIndex="1"
      cursor="pointer"
       
       
    />
  );
}

const SliderOne = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    
  };

  const arr = [
    "https://famous-caramel-42646b.netlify.app/images/banner%20img/Valentino.jpg",
    "https://www.bluefly.com/cdn/shop/files/AdobeStock_157593748_2_1512x.jpg?v=1712177399",
    "https://www.bluefly.com/cdn/shop/files/shutterstock_773947222_97e3ce6e-89fa-4a0f-a5d5-d0d373ae995e_1512x.jpg?v=1660340662",
    "https://www.bluefly.com/cdn/shop/files/shutterstock_324325775_1_1512x.jpg?v=1660337720",
    "https://www.bluefly.com/cdn/shop/files/pietro-schellino-RMMmKR8RCoo-unsplash_1512x.jpg?v=1687447308",
    "https://www.bluefly.com/cdn/shop/files/shutterstock_390723769_4_7_1512x.jpg?v=1660348351",
    "https://www.bluefly.com/cdn/shop/files/shutterstock_2056290722_1512x.jpg?v=1660337209",
    "https://www.bluefly.com/cdn/shop/files/shutterstock_442324294_1512x.jpg?v=1660338965",
  ];

  return (
    <Box height={'380px'} overflow="hidden" w="99vw" m="auto" mt="2" position="relative" >
      <Slider {...settings}>
        {arr.map((elem, i) => (
          <Box key={i} height="380px" display="flex" alignItems="center" justifyContent="center">
            <Image src={elem} alt="slider" objectFit="cover" height="100%" width="100%" />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SliderOne;
