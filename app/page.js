import Image from 'next/image';

export default function Home() {
  return (
    <main>  
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="bg-blue-200">
          <p>The best URL Shortener</p>
          <p>Shorten your long URLs quickly and easily.</p>
        </div>
        <div className="bg-amber-200 flex justify-start relative">
          <Image src={"/vector.jpg"} alt="URL Shortener" fill={true} />
        </div>
      </section> 
    </main> 
  );
}
