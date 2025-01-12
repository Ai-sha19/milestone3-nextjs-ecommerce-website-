import Features from "./components/features";
import GetInTouch from "./components/get-in-touch";
import Hero from "./components/hero";
import NewCaramics from "./components/new-caramics";
import PopularProduct from "./components/popular-products";
import SignupSection from "./components/sign-up-section";


// src/app/page.tsx
export default async function Home() {



  return (
 <>
 <Hero />
 <Features />
 <NewCaramics />
 <PopularProduct />
 <SignupSection />
 <GetInTouch />
 

 </>
  );
}
