import { Image } from "@/components/image";
import { Link, SimpleGrid } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const books = [
  {
    title: "Essencialismo",
    link: "https://amzn.to/3FDQQkt",
    img: "https://m.media-amazon.com/images/I/81zPPPtKuxL._AC_UY218_.jpg",
  },
  {
    title: "Dopamine Nation",
    link: "https://amzn.to/3Kjucl0",
    img: "https://m.media-amazon.com/images/I/91ftqwH8MkL._AC_UY218_.jpg",
  },
  {
    title: "Como fazer amigos e influenciar pessoas",
    link: "https://amzn.to/3qIOuwB",
    img: "https://m.media-amazon.com/images/I/81Fhc27uXZL._AC_UY218_.jpg",
  },
];

const Books = () => {
  return (
    <>
      <NextSeo />
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {books.map((book, index) => (
          <Link href={book.link} key={index} isExternal>
            <Image
              width={241}
              height={346}
              src={book.img}
              alt={book.title}
              objectFit="cover"
            />
          </Link>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Books;
