import Image from 'next/image';

export default function Home() {
  return (
    <main>  
      <section className="bg-blue-200">
        <div className="p-4">
          <p>The best URL Shortener</p>
          <p>Shorten your long URLs quickly and easily.</p>
        </div>
        <div className="bg-amber-200">
          <Image src={"/vector.jpg"} alt="URL Shortener" width={600} height={400} />
        </div>
      </section> 
    </main> 
  );
}
