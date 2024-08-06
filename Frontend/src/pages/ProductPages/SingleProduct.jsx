
// import { Box } from "@chakra-ui/react"
// import axios from "axios"
// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// const  SingleProduct = () => {
//     const {id} = useParams()
//     const [data,setData]= useState({})
//     const fetchData = async()=>{
//         try {
//             const res = await axios.get(`http://localhost:3000/product/${id}`)
//             console.log(res.data)
//             setData(res.data)
//         } catch (error) {
//             console.log(error.message)
//         }
//     }
//     useEffect(()=>{
//         fetchData()
//     },[])

//   return (
//     <Box>
//         {}
//     </Box>
//   )
// }
// export default SingleProduct


import {
     
    Box,
    Button,
    Flex,
    Img,
    SimpleGrid,
    Text,
    useToast,
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
 
  
  const  SingleProduct = () => {
    const { id } = useParams();
  
    const [data, setData] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    const toast = useToast(); // Initialize the toast hook
  
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/product/${id}`);
        // console.log(res.data.Product);
        setData(res.data.Product);
        setSelectedImage(res.data.Product.images[0]);
      } catch (error) {
        console.error("Error fetching product data:", error.message); // Improve error message
        toast({
          title: "Error Fetching Data",
          description: "Failed to load product details. Please try again later.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      }
    };
  
    useEffect(() => {
      fetchData();
    }, [id]);
  
    const handleClick = async () => {
      try {
        // Check if user details exist in local storage
        const user = localStorage.getItem("user");
        if (!user) {
          throw new Error("User not logged in");
        }
  
        const { token } = JSON.parse(user);
        if (!token) {
          throw new Error("Authentication token not found");
        }
  
        const response = await axios.post(
          `http://localhost:8080/cart/add/${id}`,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        if (response.status === 201) {
          toast({
            title: "Product Added to Cart",
            description: `${data.title} has been successfully added to your cart.`,
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        } else {
          throw new Error(`Unexpected response status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error adding product to cart:", error);
  
        if (error.response) {
          console.error("Error response:", error.response.data);
        }
  
        toast({
          title: "Error",
          description: `An error occurred while adding the product to the cart: ${error.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }
    };
  
    return (
      <Box>
        <Navbar />
        <SimpleGrid
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
          ]}
          gap={20}
          p={["5px", "5px", "30px", "30px"]}
          w={"80%"}
          m={"auto"}
        >
          <Box>
            <Img
              src={selectedImage}
              alt="Main Image"
              boxSize="500px"
              // objectFit="cover"
              border="2px solid rgba(0,0,0,0.2)"
              mb={5}
            />
  
            <Flex mt={5}>
              {data.image &&
                data.image.map((photo, index) => (
                  <Img
                    key={index}
                    src={photo}
                    alt={`Thumbnail ${index + 1}`}
                    boxSize="100px"
                    objectFit="cover"
                    border="1px solid rgba(0,0,0,0.2)"
                    mr={2}
                    cursor="pointer"
                    onClick={() => setSelectedImage(photo)}
                    opacity={selectedImage === photo ? 0.7 : 1}
                    _hover={{ opacity: 0.7 }}
                  />
                ))}
            </Flex>
          </Box>
  
          <SimpleGrid>
            <Text fontSize={"24px"} fontWeight={500} mb={4}>
              {data.Header}
            </Text>
            <Flex justifyContent={"space-between"} mb={4}>
              <Text fontWeight={500} fontSize={"20px"}>
                Your Price
              </Text>
              <Text fontWeight={500} fontSize={"20px"}>
                ${data.price}
              </Text>
            </Flex>
            <Box mb={6}>
              <Text fontSize={"16px"}>{data.CutPrice}</Text>
            </Box>
            <Button
              bg={"#296293"}
              color={"white"}
              _hover={{ color: "white", bg: "#1D4F6D" }}
              onClick={handleClick}
            >
              Add to Cart
            </Button>
          </SimpleGrid>
        </SimpleGrid>
        <Footer />
      </Box>
    );
  };
  
  export default SingleProduct;