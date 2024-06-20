import { useState } from "react";
import { Container, VStack, Text, Button, HStack, Box, Image, Select } from "@chakra-ui/react";

const Index = () => {
  const [furColor, setFurColor] = useState("brown");
  const [accessory, setAccessory] = useState("none");
  const [expression, setExpression] = useState("happy");

  const handleFurColorChange = (event) => setFurColor(event.target.value);
  const handleAccessoryChange = (event) => setAccessory(event.target.value);
  const handleExpressionChange = (event) => setExpression(event.target.value);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Customize Your Monkey Avatar</Text>
        <HStack spacing={4}>
          <Box>
            <Text>Fur Color</Text>
            <Select value={furColor} onChange={handleFurColorChange}>
              <option value="brown">Brown</option>
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="golden">Golden</option>
            </Select>
          </Box>
          <Box>
            <Text>Accessory</Text>
            <Select value={accessory} onChange={handleAccessoryChange}>
              <option value="none">None</option>
              <option value="hat">Hat</option>
              <option value="glasses">Glasses</option>
              <option value="scarf">Scarf</option>
            </Select>
          </Box>
          <Box>
            <Text>Facial Expression</Text>
            <Select value={expression} onChange={handleExpressionChange}>
              <option value="happy">Happy</option>
              <option value="sad">Sad</option>
              <option value="angry">Angry</option>
              <option value="surprised">Surprised</option>
            </Select>
          </Box>
        </HStack>
        <Box boxSize="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" mt={4}>
          <Image src={`/images/monkey_${furColor}_${accessory}_${expression}.png`} alt="Monkey Avatar" />
        </Box>
        <Button colorScheme="teal" size="lg">Save Avatar</Button>
      </VStack>
    </Container>
  );
};

export default Index;