import AllProductsPreview from "./components/all-products";
import Features from "./components/features";
import GetInTouch from "./components/get-in-touch";
import Hero from "./components/hero";
import PopularProduct from "./components/popular-products";
import SignupSection from "./components/sign-up-section";


// src/app/page.tsx
export default async function Home() {



  return (
 <>
 <Hero />
 <Features />
 <AllProductsPreview />
 <PopularProduct />
 <SignupSection />
 <GetInTouch />
 

 </>
  );
}
