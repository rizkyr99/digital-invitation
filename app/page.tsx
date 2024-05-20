'use client';

import Couples from '@/components/Couples';
import Cover from '@/components/Cover';
import { useState } from 'react';

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onInvitationOpen = () => {
    setIsOpened(true);
  };
  return (
    <>
      <Cover isOpen={isOpened} onOpen={onInvitationOpen} />
      <main className={`${isOpened ? 'block' : 'hidden'}`}>
        <section className='h-screen bg-[url("/images/hero.jpg")] bg-center bg-cover flex flex-col justify-between'>
          <div className='relative h-24 flex items-center px-4 bg-gradient-to-b from-black/30 to-transparent'>
            <div className='flex items-center w-full justify-between max-w-screen-xl mx-auto'>
              <div className='relative text-5xl text-white font-diamond h-8'>
                J
                <span className='absolute inset-0 text-orange-500 flex justify-center'>
                  &
                </span>
                C
              </div>
              <div className='hidden lg:flex items-center gap-8'>
                <a href='/' className='uppercase text-white'>
                  Couples
                </a>
                <a href='/' className='uppercase text-white'>
                  Galleries
                </a>
                <a href='/' className='uppercase text-white'>
                  Date
                </a>
                <a href='/' className='uppercase text-white'>
                  Location
                </a>
                <a href='/' className='uppercase text-white'>
                  Wishes
                </a>
              </div>
              <div
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className='absolute top-1/2 -translate-y-1/2 right-4 z-50 size-8 flex flex-col justify-center gap-1 lg:hidden cursor-pointer'>
                <div
                  className={`h-[2px] w-full rounded transition duration-500 ${
                    isMenuOpen
                      ? '-rotate-45 translate-y-1.5 bg-orange-200'
                      : 'bg-white'
                  }`}
                />
                <div
                  className={`h-[2px] w-full rounded transition duration-300 delay-100 ${
                    isMenuOpen ? 'rotate-45 bg-orange-200' : 'bg-transparent'
                  }`}
                />
                <div
                  className={`h-[2px] w-6 rounded transition duration-500 ${
                    isMenuOpen
                      ? '-rotate-45 -translate-y-1 translate-x-0.5 bg-orange-200'
                      : 'bg-white'
                  }`}
                />
              </div>
              <div
                className={`fixed z-40 top-0 left-0 h-screen max-w-screen-sm bg-amber-100 overflow-hidden transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'w-screen' : 'w-0'
                }`}>
                <div className='w-screen flex flex-col gap-8 p-20'>
                  <a
                    href=''
                    className='text-3xl text-orange-800 hover:text-black transition font-libre'>
                    Couples
                  </a>
                  <a
                    href=''
                    className='text-3xl text-orange-800 hover:text-black transition font-libre'>
                    Galleries
                  </a>
                  <a
                    href=''
                    className='text-3xl text-orange-800 hover:text-black transition font-libre'>
                    Date
                  </a>
                  <a
                    href=''
                    className='text-3xl text-orange-800 hover:text-black transition font-libre'>
                    Location
                  </a>
                  <a
                    href=''
                    className='text-3xl text-orange-800 hover:text-black transition font-libre'>
                    Wishes
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='relative bg-gradient-to-t from-black/50 to-transparent h-[50%] flex flex-col justify-end'>
            <div className='w-full flex items-center gap-2'>
              <div className='sm:whitespace-nowrap text-white text-4xl pl-8 md:pl-12 font-diamond max-sm:pr-8'>
                Jefferson & Clara
              </div>
              <div className='hidden sm:block h-px w-full bg-white' />
            </div>
            <p className='px-8 md:px-12 pt-2 lg:pb-32 text-white text-xs md:text-base font-light max-w-screen-lg'>
              Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
              untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
              dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
              kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
              terdapat tanda-tanda bagi kaum yang berfikir.” (QS. Ar-Rum: 21)
            </p>
            <div className='lg:absolute bottom-16 -right-8 text-white md:text-lg pl-8 md:pl-12 lg:pl-0 max-lg:py-4 lg:rotate-90 tracking-widest font-libre'>
              09/04/2019
            </div>
          </div>
        </section>
        <Couples />
      </main>
    </>
  );
}
