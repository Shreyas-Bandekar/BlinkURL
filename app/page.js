import Image from 'next/image';

export default function Home() {
  return (
    <main className='bg-cyan-100'>  
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className='text-2xl font-bold '>The best URL Shortener</p>
          <p>Shorten your long URLs quickly and easily.</p>
        </div>
        <div className="flex justify-start relative">
          <Image className='mix-blend-darken' src={"/vector.jpg"} alt="URL Shortener" fill={true} />
        </div>
      </section> 
    </main> 
  );
}
