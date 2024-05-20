interface CoverProps {
  isOpen: boolean;
  onOpen: () => void;
}

const Cover = ({ isOpen, onOpen }: CoverProps) => {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-[url("/images/cover.jpg")] bg-center bg-cover flex flex-col justify-between transition duration-500 ${
        isOpen ? '-translate-y-full' : ''
      }`}>
      <div className='h-[25%] bg-gradient-to-b from-black/50 to-transparent flex items-center justify-center'>
        <p className='text-white text-center font-light text-2xl uppercase tracking-widest'>
          The Wedding Of
        </p>
      </div>
      <div className='h-[50%] bg-gradient-to-t from-black/75 to-transparent flex flex-col items-center justify-center gap-4'>
        <h1 className='text-white text-3xl'>Design & Preset</h1>
        <div className='flex items-center gap-4 text-white'>
          19
          <div className='inline-block size-1 bg-white rounded-full' />
          04
          <div className='inline-block size-1 bg-white rounded-full' />
          2024
        </div>
        <button
          onClick={onOpen}
          className='bg-rose-900 text-white px-6 py-4 text-lg'>
          Buka Undangan
        </button>
      </div>
    </div>
  );
};

export default Cover;
