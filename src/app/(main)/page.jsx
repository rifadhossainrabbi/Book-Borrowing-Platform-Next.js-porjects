import Image from "next/image";
import Banner from "../components/homepage/Banner";
import FeaturedBooks from "../components/homepage/FeaturedBooks";

export default function Home() {
  return (
    <>
      <Banner />
      <FeaturedBooks />
    </>
  );
}
