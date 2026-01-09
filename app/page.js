import Image from 'next/image';
import localFont from 'next/font/local';
import Link from 'next/link';
const poppins = localFont({
  src: 'fonts/Poppins-ExtraBold.ttf',
  variable: '--font-poppins',
});

export default function Home() {
  return (
    <main className='bg-cyan-100'>
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>BlinkURL- Short links in a blink!</p>
          <p className='px-36'>BlinkURL helps you shorten long links quickly and easily. Just paste your URL and get a short link instantly — no login or signup needed. It’s perfect for sharing links on social media, messages, or anywhere else.</p>

          <div className='flex gap-4 justify-start'>
            <Link href="/shorten"><button className='bg-cyan-600 text-white shadow-lg rounded-lg p-3 py-2 font-semibold '>Try Now</button></Link>
            <Link href="/github"><button className='bg-cyan-600 text-white shadow-lg rounded-lg p-3 py-2 font-semibold '>Github</button></Link>
          </div>
        </div>

        <div className="flex justify-start relative">
          <Image className='mix-blend-darken' src={"/vector.jpg"} alt="URL Shortener" fill={true} />
        </div>
      </section>
    </main>
  );
}
