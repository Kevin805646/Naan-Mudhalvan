import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";
const Card = ({ course, title, category, description, _id,img }) => {
  const image = [
    "https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-800x450.jpg",
    "https://teachyourkidscode.com/wp-content/uploads/2022/02/best-coding-language-for-games-1024x683.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/18/72/61/1000_F_218726143_pmty274nfMofewFkM8EhInvAfzaaNm62.jpg",
    "https://maddyness-uk.twic.pics/2020/04/code-on-a-computer-screen-scaled.jpg?twic=v1/focus=auto/cover=940x515"
  ];
  const length = image.length;
  const miniimg =
    "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/60SA8pGxPXMmJf4n7umK1H/ccec31bbe2358210bf8391dcba6cd2f1/umich.png?auto=format%2Ccompress&dpr=1&w=&h=55";
  return (
    <Link to={`/course/${_id}`} target="_blank">
      <Flex
        direction={"column"}
        gap={"5px"}
        borderWidth="1px"
        borderRadius="md"
        borderColor="#c9c9c9"
        boxShadow="xl"
        p={4}
        m={2}
        h={{
          sm: "420px",
          md: "400px",
          lg: "400px",
        }}
        _hover={{ boxShadow: "2xl", cursor: "pointer" }}
      >
        <Image
          src={image[Math.floor(Math.random() * length)]}
          alt="demo"
          objectFit="cover"
          h='150px'
        />
        <Box display="flex" alignItems="center" mb={2}>
          <Image src={miniimg} alt="Logo" boxSize={4} mr={2} />
          <Text
            fontSize="sm"
            fontWeight="bold"
            color="#a7a7a7"
            textTransform={"capitalize"}
          >
            {category}
          </Text>
        </Box>
        <Text
          fontSize="lg"
          fontWeight="bold"
          mb={2}
          textTransform={"capitalize"}
        >
          {title}
        </Text>
        <Text fontSize="sm" mb={2} textTransform={"capitalize"}>
          {description.substring(0,80)}...
        </Text>
        <Flex color="#0056d2" fontFamily={"poppins"} gap={2}>
          <Flex alignItems={"center"}>
            <FaGraduationCap />
          </Flex>
          <Box>Earn a degree</Box>
        </Flex>
        <Text fontSize="sm">{course}</Text>
      </Flex>
    </Link>
  );
};

export default Card;
