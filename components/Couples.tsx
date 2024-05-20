import Image from 'next/image';

const Couples = () => {
  return (
    <section className='bg-amber-100 py-16 lg:p-24 space-y-16 md:space-y-24'>
      <div className='grid grid-cols-1 sm:grid-cols-2 max-w-screen-lg mx-auto relative'>
        <div className='order-2 sm:order-1 flex items-center justify-end'>
          <div className='p-4 md:px-16'>
            <h2 className='text-2xl text-right font-libre italic'>
              Jefferson Ignacio, S.M.
            </h2>
            <p className='text-right text-lg font-semibold my-2'>
              PUTRA BUNGSU DARI:
            </p>
            <p className='text-right'>
              Bapak Sanusi, S.M.
              <br />
              dan
              <br />
              Ibu Jubaedah
              <br />
              dari Jakarta, Indonesia
            </p>
          </div>
        </div>
        <div className='absolute hidden sm:block bottom-32 left-0 h-[2px] w-[80%] bg-black'></div>
        <div className='relative ml-12 mt-16 order-1 sm:order-2'>
          <div className='absolute -top-16 -left-8 md:-left-12 h-80 w-full max-w-80 bg-rose-950 p-4'>
            <p className='text-white text-2xl text-center font-diamond'>
              THE GROOM
            </p>
          </div>
          <div className='w-full max-w-md mx-auto h-96 lg:h-[500px] relative'>
            <Image
              src='/images/groom.jpg'
              fill
              alt='groom'
              className='object-cover object-center'
            />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 max-w-screen-lg mx-auto relative'>
        <div className='order-2 sm:order-1 flex items-center justify-start'>
          <div className='p-4 md:px-16'>
            <h2 className='text-2xl text-left font-libre italic'>
              Clara Ignacio, S.M.
            </h2>
            <p className='text-left text-lg font-semibold my-2'>
              PUTRA BUNGSU DARI:
            </p>
            <p className='text-left'>
              Bapak Sanusi, S.M.
              <br />
              dan
              <br />
              Ibu Jubaedah
              <br />
              dari Jakarta, Indonesia
            </p>
          </div>
        </div>
        <div className='absolute hidden sm:block bottom-32 right-0 h-[2px] w-[80%] bg-black'></div>
        <div className='relative mr-12 mt-16'>
          <div className='absolute -top-16 -right-8 md:-right-12 h-80 w-full max-w-80 bg-rose-950 p-4'>
            <p className='text-white text-2xl text-center font-diamond'>
              THE BRIDE
            </p>
          </div>
          <div className='w-full max-w-md mx-auto h-96 lg:h-[500px] relative'>
            <Image
              src='/images/bride.jpg'
              fill
              alt='groom'
              className='object-cover object-center'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Couples;
