import Image from 'next/image';
import localFont from 'next/font/local';

const poppins = localFont({
  src: 'fonts/Poppins-ExtraBold.ttf',
  variable: '--font-poppins',
});

export default function Home() {
  return (
    <main className='bg-cyan-100'>  
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-4xl font-bold ${poppins.className}`}>The best URL Shortener</p>
          <p>Shorten your long URLs quickly and easily.</p>
        </div>
        <div className="flex justify-start relative">
          <Image className='mix-blend-darken' src={"/vector.jpg"} alt="URL Shortener" fill={true} />
        </div>
      </section> 
    </main> 
  );
}
