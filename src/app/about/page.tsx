// pages/about.js
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="px-6 md:px-12 lg:px-24 py-12">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-semibold mb-4">
          A brand built on the love of craftsmanship, quality and outstanding customer service
        </h1>
        <Link href='/products'>
        <button className="px-6 py-3 text-sm font-medium bg-gray-200 hover:bg-gray-300 rounded">
          View our products
        </button>
        </Link>
      </header>

      {/* First Content Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-blue-900 text-white p-8 flex flex-col justify-between">
          <h2 className="text-xl font-semibold mb-4">It started with a small idea</h2>
          <p className="text-sm mb-6">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
          <Link href='/products'>
          <button className="self-start px-6 py-3 text-sm font-medium bg-white text-blue-900 rounded hover:bg-gray-100">
            View collection
          </button>
          </Link>
        </div>
        <Image
          src="/about/about-1.png"
          alt="Interior design featuring a yellow chair"
          width={800}
          height={600}
          className="rounded"
        />
      </section>

      {/* Second Content Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Image
          src="/about/about-2.png"
          alt="Minimalistic furniture setup"
          width={800}
          height={600}
          className="rounded"
        />
        <div className="bg-white p-8 flex flex-col justify-between">
          <h2 className="text-xl font-semibold mb-4">
            Our service isn’t just personal, it`s actually hyper-personally exquisite
          </h2>
          <p className="text-sm mb-6">
            When we started Avalon, the idea was simple: Make high-quality furniture affordable and accessible for the mass market.
          </p>
          <p className="text-sm mb-6">
            Handcrafted, we bring bold character and homes to what we live. Brands are design-led as Chelsea boutique became the hottest for the London interior design community.
          </p>
         <Link href='/sign-up'>
         <button className="self-start px-6 py-3 text-sm font-medium bg-gray-900 text-white rounded hover:bg-gray-800">
            Get in touch
          </button>
         </Link>
        </div>
      </section>
    </div>
  );
}