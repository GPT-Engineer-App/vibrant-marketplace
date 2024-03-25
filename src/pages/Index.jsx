import React from "react";
import { Box, Heading, Text, Button, Grid, GridItem, Image, Container, Stack, Icon } from "@chakra-ui/react";
import { FaCar, FaHome, FaBriefcase, FaTools } from "react-icons/fa";

const categories = [
  {
    name: "Cars",
    icon: FaCar,
    description: "Find your dream car",
    image: "https://images.unsplash.com/photo-1499062918700-389fa905494e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXIlMjBvbiUyMHJvYWQlMjBpbiUyMGF1c3RyYWxpYXxlbnwwfHx8fDE3MTEzNjg2MTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Real Estate",
    icon: FaHome,
    description: "Discover your perfect home",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGluJTIwYXVzdHJhbGlhfGVufDB8fHx8MTcxMTM2ODYxMHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Jobs",
    icon: FaBriefcase,
    description: "Explore exciting career opportunities",
    image: "https://images.unsplash.com/photo-1485217988980-11786ced9454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjB3b3JraW5nJTIwaW4lMjBvZmZpY2UlMjBpbiUyMGF1c3RyYWxpYXxlbnwwfHx8fDE3MTEzNjg2MTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Services",
    icon: FaTools,
    description: "Find reliable services near you",
    image: "https://images.unsplash.com/photo-1512128998072-0cb86c8dfcd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYW5keW1hbiUyMHdvcmtpbmclMjBpbiUyMGF1c3RyYWxpYXxlbnwwfHx8fDE3MTEzNjg2MTF8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Box bg="gray.100" minHeight="100vh">
      <Box bg="blue.500" color="white" py={20} textAlign="center" bgImage="https://images.unsplash.com/photo-1540448051910-09cfadd5df61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzeWRuZXklMjBvcGVyYSUyMGhvdXNlfGVufDB8fHx8MTcxMTM2ODYxMXww&ixlib=rb-4.0.3&q=80&w=1080" bgPosition="center" bgSize="cover" position="relative">
        <Box position="absolute" top={0} left={0} width="100%" height="100%" bg="blackAlpha.600" />
        <Container maxW="container.lg" position="relative" zIndex={1}>
          <Heading as="h1" size="2xl" mb={4}>
            Australia's Top Classifieds
          </Heading>
          <Text fontSize="xl" mb={8}>
            Find everything you need, all in one place
          </Text>
          <Button colorScheme="orange" size="lg" fontWeight="bold" borderRadius="full" px={8} py={6}>
            Get Started
          </Button>
        </Container>
      </Box>

      <Container maxW="container.lg" py={20}>
        <Grid templateColumns="repeat(2, 1fr)" gap={10}>
          {categories.map((category) => (
            <GridItem key={category.name}>
              <Box borderRadius="lg" overflow="hidden" boxShadow="md" bg="white" transition="transform 0.2s" _hover={{ transform: "scale(1.05)" }}>
                <Image src={category.image} alt={category.name} />
                <Box p={6}>
                  <Stack direction="row" align="center" mb={4}>
                    <Icon as={category.icon} boxSize={8} color="blue.500" />
                    <Heading as="h3" size="lg">
                      {category.name}
                    </Heading>
                  </Stack>
                  <Text fontSize="lg" mb={4}>
                    {category.description}
                  </Text>
                  <Button colorScheme="blue" size="lg">
                    Explore
                  </Button>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Index;
