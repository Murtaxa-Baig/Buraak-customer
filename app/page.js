import Image from "next/image";
import RentACarSection from "./(components)/rentACarSection/RentACarSection";
import CitySection from "./(components)/citySection/CitySection";
import FAQ from "./(components)/fAQ/FAQ";

export default function Dashboard() {
  return (
    <>
      <RentACarSection />
      <CitySection />
      <FAQ />



    </>
  );
}
