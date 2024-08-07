import { Button, Flex,  Image, Link, Popover,  PopoverBody,  PopoverContent,  PopoverTrigger, SimpleGrid, Text } from "@chakra-ui/react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const DropDownNavbar = () => {

    const [hoverOne,setHoverOne] = useState(false);
    const [hoverTwo,setHoverTwo] = useState(false);
    const [hoverThree,setHoverThree] = useState(false);
    const [hoverFour,setHoverFour] = useState(false);
    const [hoverFive,setHoverFive] = useState(false);
    const [hoverSix,setHoverSix] = useState(false);
    const [hoverSeven,setHoverSeven] = useState(false);
    const [hoverEight,setHoverEight] = useState(false);
    const [hoverNine,setHoverNine] = useState(false);
     
    const  handleNavigation = useNavigate()

    const isHoverOneTrue = ()=>{
      setHoverOne(true);
    }
   const isHoverOneFalse = ()=>{
      setHoverOne(false);
    }

    
    const isHoverTwoTrue = ()=>{
      setHoverTwo(true);
    }
   const isHoverTwoFalse = ()=>{
      setHoverTwo(false);
    }


    const isHoverThreeTrue = ()=>{
      setHoverThree(true);
    }
   const isHoverThreeFalse = ()=>{
      setHoverThree(false);
    }


    const isHoverFourTrue = ()=>{
      setHoverFour(true);
    }
   const isHoverFourFalse = ()=>{
      setHoverFour(false);
    }


    const isHoverFiveTrue = ()=>{
      setHoverFive(true);
    }
   const isHoverFiveFalse = ()=>{
      setHoverFive(false);
    }



    const isHoverSixTrue = ()=>{
      setHoverSix(true);
    }
   const isHoverSixFalse = ()=>{
      setHoverSix(false);
    }


    const isHoverSevenTrue = ()=>{
      setHoverSeven(true);
    }
   const isHoverSevenFalse = ()=>{
      setHoverSeven(false);
    }


    const isHoverEightTrue = ()=>{
        setHoverEight(true);
      }
     const isHoverEightFalse = ()=>{
        setHoverEight(false);
      }

      
    const isHoverNineTrue = ()=>{
        setHoverNine(true);
      }
     const isHoverNineFalse = ()=>{
        setHoverNine(false);
      }



      const TextBox = ({ text , category  }) => {
        return (
          <Text
          fontSize={"small"}
          color="gray"
          _hover={{ color: "black" }}
          transition="color 0.1s"
          onClick={()=>handleClick(category)}
          >
            {text}
          </Text>
        );
      };
      const handleClick = (elem)=>{
        const category = elem
        handleNavigation(`/products`)
        handleNavigation(
          `/products?category=${category.replace(" & ", "%20%26%20")}`
        );
      }
      

  return (
   <>
    
    <Flex  
       
       justifyContent={'space-evenly'}   
      zIndex={2}
      pt={'1'}>
         
    <Flex gap={'4'}    display={["none", "none", "flex", "flex"]} flexWrap={'wrap'} justifyContent={'center'}  >
      {/* CLOTHING */}
    <Popover  isOpen={hoverOne} onClose={() => setHoverOne(false)} onOpen={() => setHoverOne(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverOneTrue}
        onMouseLeave={isHoverOneFalse}
         
          fontWeight={480}
          _hover={{ borderBottom: "2px solid black" ,  background: "none"}}
          borderRadius={"none"}
          variant={'ghost'}    
    >CLOTHING</Button>
  </PopoverTrigger>
  <PopoverContent w={'100vw'}  onMouseEnter={isHoverOneTrue}  onMouseLeave={isHoverOneFalse} >
     <PopoverBody> 

    <SimpleGrid   gridTemplateColumns={"repeat(3,1fr)"}
                    gap={3}
                    color={"61608B"}
                    m={'auto'}
                    
                    w={"60%"}>
      <SimpleGrid>
         <Image src="https://www.bluefly.com/cdn/shop/files/women.jpg?v=1613619704"/>
          <Text fontWeight={600}>Dresses</Text>
          <Text>Up to 80% Off</Text>           
      </SimpleGrid>

      <SimpleGrid>
      <Link to={"/womensclothing"}> <Text fontWeight={600}>Womens Clothing</Text></Link>  
             

      <SimpleGrid gap={3} mt={5}>
      <TextBox text={' Shop All'} category={"womenclothing"} />
      <TextBox text={' Activewear'} category={"womenclothing"}/>
      <TextBox text={'Coats & Jackets'} category={"womenclothing"}/>
      <TextBox text={'Dresses '} category={"womenclothing"}/>
      <TextBox text={'Jeans & Denim '} category={"womenclothing"}/>
      <TextBox text={'Jumpsuits & Rompers '} category={"womenclothing"}/>
      <TextBox text={' Lingerie & Hosiery'} category={"womenclothing"}/>
      <TextBox text={'Loungewear & Sleepwear '} category={"womenclothing"}/>
      <TextBox text={'Shorts '} category={"womenclothing"}/>
      <TextBox text={'Skirts '} category={"womenclothing"}/>
      <TextBox text={'Sweaters'} category={"womenclothing"} />
      <TextBox text={' Sweatshirts & Hoodies '} category={"womenclothing"}/>
      <TextBox text={' Swimwear & Coverups'} category={"womenclothing"}/>
      
          </SimpleGrid>

      </SimpleGrid>

      <SimpleGrid>
        <Text fontWeight={600}>Mens Clothing</Text>

        <SimpleGrid gap={3} mt={5}>

        <TextBox text={'Shop All'}/>
      <TextBox text={'Activewear'}/>
      <TextBox text={'Coats & Jackets'}/>
      <TextBox text={'Casual Button-Down Shirts '}/>
      <TextBox text={'Dress Shirts '}/>
      <TextBox text={'Jeans & Denim '}/>
      <TextBox text={'pants '}/>
      <TextBox text={'Polo Shirts'}/>
      <TextBox text={'Shorts '}/>
      <TextBox text={'Sport Coats & Blazers'}/>
      <TextBox text={'Suits & Separates   '}/>
      <TextBox text={'Sweatshirts & Hoodies  '}/>
      <TextBox text={'Swimwear & Coverups '}/>          
            </SimpleGrid>
      </SimpleGrid>
    </SimpleGrid>
    </PopoverBody>
  </PopoverContent>
</Popover>

{/*SHOES            ----------------------------------------------------- */}


 
<Popover isOpen={hoverTwo} onClose={() => setHoverTwo(false)} onOpen={() => setHoverTwo(true)}>
  <PopoverTrigger>
    <Button
      onMouseEnter={isHoverTwoTrue}
      onMouseLeave={isHoverTwoFalse}
      
      fontWeight={400}
      variant='ghost'
      _hover={{ borderBottom: "2px solid black", background: "none" }}
      borderRadius="none"
    >
      SHOES
    </Button>
  </PopoverTrigger>
  <PopoverContent w='100vw' onMouseEnter={isHoverTwoTrue} onMouseLeave={isHoverTwoFalse}>
    <PopoverBody>
      <SimpleGrid gridTemplateColumns="repeat(4, 1fr)" gap={3} color="#61608B" m="auto" w="60%">
        <SimpleGrid>
          <Link to="/womensshoes">
            <Text fontWeight={600}>Womens Shoes</Text>
          </Link>
          <SimpleGrid gap={3} mt={5}>

          <TextBox text={'Shop All'}/>
      <TextBox text={'Boots'}/>
      <TextBox text={' Espadrilles'}/>
      <TextBox text={'Flats'}/>
      <TextBox text={'Mules & Slides  '}/>
      <TextBox text={'Oxfords & Loafers  '}/>
      <TextBox text={'Pumps & Heels '}/>
      <TextBox text={'Sandals '}/>
      <TextBox text={'Slippers '}/>
      <TextBox text={'Sneakers '}/>
      <TextBox text={'Sweaters '}/>
      <TextBox text={'Wedges '}/>
           
          </SimpleGrid>
        </SimpleGrid>
        <SimpleGrid>
          <Text fontWeight={600}>Womens Designers</Text>
          <SimpleGrid gap={3} mt={5}>

      <TextBox text={'Shop All'}/>
      <TextBox text={'Alexander McQueen '}/>
      <TextBox text={'Balenciaga '}/>
      <TextBox text={'Bottega Veneta '}/>
      <TextBox text={'Christian Louboutin '}/>
      <TextBox text={'Dolce & Gabbana '}/>
      <TextBox text={'Fendi '}/>
      <TextBox text={'Gianvito Rossi '}/>
      <TextBox text={'Gucci '}/>
      <TextBox text={'Jimmy Choo '}/>
      <TextBox text={'Manolo Blahnik '}/>
      <TextBox text={'Saint Laurent '}/>
    
          </SimpleGrid>
        </SimpleGrid>
        <SimpleGrid>
          <Link to="/mensshoes">
            <Text fontWeight={600}>Mens Shoes</Text>
          </Link>
          <SimpleGrid mt={'-10'} >
                     
          <TextBox text={'Shop All'}/>
      <TextBox text={'Boots '}/>
      <TextBox text={' Drivers, Loafers & Slip-Ons'}/>
      <TextBox text={'Oxford & Derby Shoes'}/>
      <TextBox text={' Sandals & Flip Flops '}/>
      <TextBox text={'Slippers '}/>
      <TextBox text={'Sneakers '}/>
      <TextBox text={'Gucci '}/>
      <TextBox text={'Jimmy Choo '}/>
      <TextBox text={'Manolo Blahnik '}/>
      <TextBox text={'Saint Laurent '}/>
    
          </SimpleGrid>
        </SimpleGrid>
        <SimpleGrid>
          <Text fontWeight={600}>Mens Designers</Text>
          <SimpleGrid gap={3} mt={5}>

          <TextBox text={'Shop All'}/>
      <TextBox text={'Alexander McQueen'}/>
      <TextBox text={'Balenciaga '}/>
      <TextBox text={'Bottega Veneta '}/>
      <TextBox text={'Christian Louboutin '}/>
      <TextBox text={'Dolce & Gabbana '}/>
      <TextBox text={'Burberry '}/>
      <TextBox text={'Common Projects '}/>
      <TextBox text={' Gucci '}/>
      <TextBox text={'Golden Goose '}/>
      <TextBox text={' Off-White '}/>
      <TextBox text={'Saint Laurent'}/>

 
          </SimpleGrid>
        </SimpleGrid>
      </SimpleGrid>
    </PopoverBody>
  </PopoverContent>
</Popover>

{/* HANDBAGS */}

<Popover  isOpen={hoverThree} onClose={() => setHoverThree(false)} onOpen={() => setHoverThree(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverThreeTrue}
        onMouseLeave={isHoverThreeFalse}
         
          variant={'ghost'}
          fontWeight={400}
          _hover={{ borderBottom: "2px solid black",  background: "none" }}
          borderRadius={"none"}    
    >HANDBAGS</Button>
  </PopoverTrigger>
  <PopoverContent w={'100vw'}  onMouseEnter={isHoverThreeTrue}  onMouseLeave={isHoverThreeFalse}>   
    <PopoverBody> 

    <SimpleGrid   gridTemplateColumns={"repeat(3,1fr)"}
                    gap={3}
                    color={"61608B"}
                    m={'auto'}
                    
                    w={"60%"}>
      <SimpleGrid>
         <Image src="https://www.bluefly.com/cdn/shop/files/handbag2.jpg?v=1613619716"/>
          <Text fontWeight={600}> Satchels</Text>
          <Text>Up to 80% Off</Text>           
      </SimpleGrid>

      <SimpleGrid>
      <Link to={"/allhandbags"}> <Text fontWeight={600}> All Handbags</Text></Link>  
             

      <SimpleGrid gap={3} mt={5}>

      <TextBox text={'Shop All'}/>
      <TextBox text={'Backpacks'}/>
      <TextBox text={'Bucket Bags'}/>
      <TextBox text={'Clutches'}/>
      <TextBox text={' Crossbody Bags'}/>
      <TextBox text={'Hobo Bags '}/>
      <TextBox text={'Satchels '}/>
      <TextBox text={'Shoulder Bags '}/>
      <TextBox text={'Tote Bags  '}/>
      <TextBox text={ 'Skirts'}/>
      <TextBox text={'Travel Bags & Luggage '}/>
      <TextBox text={' Wallets & Cardholders'}/>
      <TextBox text={'Swimwear & Coverups '}/>
      
               </SimpleGrid>
        </SimpleGrid>
      </SimpleGrid>

      <SimpleGrid>
        <Text fontWeight={600}> Top Designers</Text>

        

        <SimpleGrid gap={3} mt={5}>
      <TextBox text={'Shop All'}/>
      <TextBox text={ 'Balenciaga'}/>
      <TextBox text={'Bottega Veneta'}/>
      <TextBox text={'Burberry'}/>
      <TextBox text={'Celine'}/>
      <TextBox text={'Chloe'}/>
      <TextBox text={'Dolce & Gabbana'}/>
      <TextBox text={' Fendi'}/>
      <TextBox text={' Givenchy '}/>
      <TextBox text={ 'Gucci'}/>
      <TextBox text={' Mario Valentino'}/>
      <TextBox text={'  Prada'}/>
      <TextBox text={' Saint Laurent'}/>

  
                      </SimpleGrid>
      </SimpleGrid>
    


    </PopoverBody>
  </PopoverContent>
</Popover>


{/* DESIGNERS  */}


<Popover  isOpen={hoverFour} onClose={() => setHoverFour(false)} onOpen={() => setHoverFour(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverFourTrue}
        onMouseLeave={isHoverFourFalse}
           
          variant={'ghost'}
          fontWeight={400}
          _hover={{ borderBottom: "2px solid black",  background: "none" }}
          borderRadius={"none"}    
    >DESIGNERS</Button>
  </PopoverTrigger>
  <PopoverContent w={'100vw'}  onMouseEnter={isHoverFourTrue}  onMouseLeave={isHoverFourFalse}>
    
     
    <PopoverBody> 

    <SimpleGrid   gridTemplateColumns={"repeat(3,1fr)"}
                    gap={3}
                    color={"61608B"}
                    m={'auto'}
                    
                    w={"60%"}>
      <SimpleGrid>
         <Image src="https://www.bluefly.com/cdn/shop/files/handbag.jpg?v=1613619701"/>
          <Text fontWeight={600}> Gucci</Text>
          <Text>Up to 64% Off</Text>           
      </SimpleGrid>

      <SimpleGrid>
      <Link to={"/allhandbags"}> <Text fontWeight={600}>Featured Designers</Text></Link>  
             

      <SimpleGrid gap={3} mt={5}>


      <TextBox text={'Shop All'}/>
      <TextBox text={ 'Alexander McQueen'}/>
      <TextBox text={'Balenciaga'}/>
      <TextBox text={'Bottega Veneta'}/>
      <TextBox text={' Burberry '}/>
      <TextBox text={'Celine '}/>
      <TextBox text={'Chloe'}/>
      <TextBox text={'Christian Louboutin  '}/>
      <TextBox text={'Dior'}/>
      <TextBox text={'Dolce & Gabbana '}/>
      <TextBox text={'Travel Bags & Luggage '}/>
      <TextBox text={'Fendi  '}/>
      <TextBox text={'Gianvito Rossi  '}/>

         </SimpleGrid>

      </SimpleGrid>

      <SimpleGrid>
        <Text fontWeight={600}> </Text>

        <SimpleGrid gap={3} mt={5}>

        <TextBox text={'Givenchy'}/>
      <TextBox text={'Gucci '}/>
      <TextBox text={'Jimmy Choo '}/>
      <TextBox text={'Manolo Blahnik '}/>
      <TextBox text={' Mario Valentino '}/>
      <TextBox text={'Moschino '}/>
      <TextBox text={' Off-White '}/>
      <TextBox text={' Palm Angels '}/>
      <TextBox text={' Prada '}/>
      <TextBox text={'Saint Laurent '}/>
      <TextBox text={' Salvatore Ferragamo'}/>
      <TextBox text={' Stella McCartney  '}/>
      <TextBox text={' Tom Ford '}/>

                     
                      </SimpleGrid>
      </SimpleGrid>
    </SimpleGrid>


    </PopoverBody>
  </PopoverContent>
</Popover>


{/* SUNGLASSES */}


<Popover  isOpen={hoverFive} onClose={() => setHoverFive(false)} onOpen={() => setHoverFive(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverFiveTrue}
        onMouseLeave={isHoverFiveFalse}
        
          variant={'ghost'}
          fontWeight={400}
          _hover={{ borderBottom: "2px solid black",  background: "none" }}
          borderRadius={"none"}    
    >SUNGLASSES</Button>
  </PopoverTrigger>
  <PopoverContent w={'100vw'}  onMouseEnter={isHoverFiveTrue}  onMouseLeave={isHoverFiveFalse}>
    
     
    <PopoverBody> 

    <SimpleGrid   gridTemplateColumns={"repeat(2,1fr)"}
                    gap={3}
                    color={"61608B"}
                    m={'auto'}
                    
                    w={"40%"}>
       
      <SimpleGrid>
      <Link to={"/allhandbags"}> <Text fontWeight={600}>  Womens Sunglasses</Text></Link>  
             

      <SimpleGrid gap={3} mt={5}>

      <TextBox text={'Shop All'}/>
      <TextBox text={'Balenciaga '}/>
      <TextBox text={'Dior'}/>
      <TextBox text={'Emilio Pucci '}/>
      <TextBox text={'Fendi'}/>
      <TextBox text={'Givenchy '}/>
      <TextBox text={'Gucci '}/>
      <TextBox text={' Jimmy Choo '}/>
      <TextBox text={' Oliver Peoples '}/>
      <TextBox text={' Prada '}/>
      <TextBox text={'Roberto Cavalli'}/>
      <TextBox text={'Saint Laurent '}/>
      <TextBox text={' Salvatore Ferragamo'}/>
        
                      </SimpleGrid>

      </SimpleGrid>

      <SimpleGrid>
        <Text fontWeight={600}>Mens Sunglasses </Text>

        <SimpleGrid gap={3} mt={5}>

           
      <TextBox text={'Shop All'}/>
      <TextBox text={'Burberry'}/>
      <TextBox text={'Carrera'}/>
      <TextBox text={'Dior'}/>
      <TextBox text={'Ermenegildo Zegna'}/>
      <TextBox text={'Givenchy '}/>
      <TextBox text={'Gucci '}/>
      <TextBox text={' Jimmy Choo '}/>
      <TextBox text={' Montblanc'}/>
      <TextBox text={' Persol'}/>
      <TextBox text={' Prada '}/>
      <TextBox text={'Ray Ban'}/>
      <TextBox text={' Saint Laurent'}/>
            
                      </SimpleGrid>
      </SimpleGrid>
    </SimpleGrid>

    </PopoverBody>
  </PopoverContent>
</Popover>
 

{/* ACCESSORIES */}


<Popover isOpen={hoverSeven} onClose={() => setHoverSeven(false)} onOpen={() => setHoverSeven(true)}>
  <PopoverTrigger>
    <Button
      onMouseEnter={isHoverSevenTrue}
      onMouseLeave={isHoverSevenFalse}
      
      variant="ghost"
      fontWeight={400}
      _hover={{ borderBottom: "2px solid black", background: "none" }}
      borderRadius="none"
    >
      ACCESSORIES
    </Button>
  </PopoverTrigger>
  <PopoverContent w="100vw" onMouseEnter={isHoverSevenTrue} onMouseLeave={isHoverSevenFalse}>
    <PopoverBody>
      <SimpleGrid gridTemplateColumns="repeat(2, 1fr)" gap={3} color="61608B" m="auto" w="30%">
        <SimpleGrid>
          <Link to="/allhandbags">
            <Text fontWeight={600}>Womens Accessories</Text>
          </Link>
          <SimpleGrid gap={3}>



      <TextBox text={'Shop All'}/>
      <TextBox text={'Bag Charms, Straps, & Accessories'}/>
      <TextBox text={ ' Belts'}/>
      <TextBox text={'Cosmetic Bags'}/>
      <TextBox text={'Gloves'}/>
      <TextBox text={'Scarves & Wraps'}/>
      <TextBox text={' Optical & Reading Glasses'}/>
      <TextBox text={'Travel Bags & Luggage'}/>
      
          </SimpleGrid>
        </SimpleGrid>

        <SimpleGrid>
          <Text fontWeight={600}>Mens Accessories</Text>
          
        </SimpleGrid>

        <SimpleGrid>

        


          <Text fontWeight={600}>Shop All</Text>
        </SimpleGrid>
      </SimpleGrid>
    </PopoverBody>
  </PopoverContent>
</Popover>

 

 
{/* JEWELRY & WATCHES */}

<Popover  isOpen={hoverSix} onClose={() => setHoverSix(false)} onOpen={() => setHoverSix(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverSixTrue}
        onMouseLeave={isHoverSixFalse}
        
           
          variant={'ghost'}
          fontWeight={400}
          _hover={{ borderBottom: "2px solid black",  background: "none" }}
          borderRadius={"none"}    
    >JEWELRY & WATCHES</Button>
  </PopoverTrigger>
  <PopoverContent  w={'100vw'}  onMouseEnter={isHoverSixTrue}  onMouseLeave={isHoverSixFalse}>
   
     
    <PopoverBody> 

    <SimpleGrid   gridTemplateColumns={"repeat(2,1fr)"}
                    gap={3}
                    color={"61608B"}
                    m={'auto'}
                    
                    w={"30%"}>
       
      <SimpleGrid>
      <Link to={"/allhandbags"}> <Text fontWeight={600}>  Jewelry</Text></Link>  
             

      <SimpleGrid gap={3} >
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Shop All
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Bracelets
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                         Brooches & Pins
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                         Earrings
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                         Necklaces
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Rings
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                            Watches
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >                          
                         Mens Jewelry
                        </Text>


 
                      </SimpleGrid>

      </SimpleGrid>

      <SimpleGrid>
        <Text fontWeight={600}> Featured Designer Watches </Text>

        <SimpleGrid gap={3} mt={5}>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Shop All
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           CT Scuderia
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Esprit
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Glycine
                        </Text>
                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Gucci
                        </Text>

                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        > 
                         Hamilton
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                           Invicta
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                            Jacques Lemans
                        </Text>



                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                            Jacy
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                            Juicy Couture
                        </Text>


                        <Text
                          fontSize={"small"}
                          color="gray"
                          _hover={{ color: "black" }}
                          transition="color 0.1s"
                        >
                          Michael Kors   
                        </Text>

                         
                      </SimpleGrid>
      </SimpleGrid>
    </SimpleGrid>



    </PopoverBody>
  </PopoverContent>
</Popover>



{/* HOME*/}

    
<Popover  isOpen={hoverEight} onClose={() => setHoverEight(false)} onOpen={() => setHoverEight(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverEightTrue}
        onMouseLeave={isHoverEightFalse}
           
          
          variant={'ghost'}
          fontWeight={400}
          _hover={{ borderBottom: "2px solid black",  background: "none" }}
          borderRadius={"none"}    
    >HOME</Button>
  </PopoverTrigger>
  <PopoverContent  w="100vw" onMouseEnter={isHoverEightTrue} onMouseLeave={isHoverEightFalse}>
    
     
    <PopoverBody  >
      <SimpleGrid gridTemplateColumns="repeat(2, 1fr)" gap={3} color="61608B" m="auto" w="30%">
    <SimpleGrid>
        <Text fontWeight={600}> Home </Text>
          
        <SimpleGrid gap={3}  mt={'5'} >
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            Shop All
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
              Travel Bags & Luggage
            </Text>
          </SimpleGrid>
        
      </SimpleGrid>

      
      <SimpleGrid>
        <Text fontWeight={600}> Beauty  </Text>
          
        <SimpleGrid gap={3}  mt={'5'} >
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            Shop All
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            Perfume
            </Text>
          </SimpleGrid>
        </SimpleGrid> 
        
      </SimpleGrid>
    </PopoverBody>
  </PopoverContent>
</Popover>
 
 {/* UNDER $50 */}

<Popover  isOpen={hoverNine} onClose={() => setHoverNine(false)} onOpen={() => setHoverNine(true)}>
  <PopoverTrigger>
    <Button
        onMouseEnter={isHoverNineTrue}
        onMouseLeave={isHoverNineFalse}
          
          
          variant={'ghost'}
          fontWeight={400}
          _hover={{ borderBottom: "2px solid black",  background: "none" }}
          borderRadius={"none"}    
    >UNDER $50</Button>
  </PopoverTrigger>
  <PopoverContent  w="100vw" onMouseEnter={isHoverNineTrue} onMouseLeave={isHoverNineFalse}>
    
     
    <PopoverBody> 

    <SimpleGrid gridTemplateColumns="repeat(2, 1fr)" gap={3} color="61608B" m="auto" w="30%">
    <SimpleGrid>
        <Text fontWeight={600}>  Shop By Pricepoint </Text>
          
        <SimpleGrid gap={3}  mt={'5'} >
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            Shop All Under $50
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            Under $25
            </Text>

            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            $25-$49.99
            </Text>
          </SimpleGrid>
        
      </SimpleGrid>

      
      <SimpleGrid>
        <Text fontWeight={600} >Shop By Category </Text>
          
        <SimpleGrid gap={3}  mt={'5'} >
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            Women
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            Men
            </Text>

            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            Shoes
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            Handbags & Accessories
            </Text>

            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            Jewelry
            </Text>
            <Text fontSize="small" color="gray" _hover={{ color: "black" }} transition="color 0.1s">
            Kids
            </Text>
          </SimpleGrid>
        </SimpleGrid> 
        
      </SimpleGrid>

    </PopoverBody>
  </PopoverContent>
</Popover>

    </Flex>  
    </Flex>
    
   </>
  )
}

export default DropDownNavbar
