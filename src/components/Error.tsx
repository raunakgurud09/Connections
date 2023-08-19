import Link from "next/link"

function Error({ message }: { message: string }) {
  return (
    <div className='flex min-h-screen items-start justify-center text-offWhite'>
      <div className='flex flex-col space-y-5 p-4 md:p-20'>
        <div className='mx-20 flex w-auto flex-col items-center justify-center'>
          <h3 className='text-6xl font-semibold md:text-9xl'>Oops!!!</h3>
          <p className='mt-10 text-center text-lg font-medium md:text-3xl'>
            {message}
          </p>
        </div>
        <div className='w-auto flex items-center font-semibold justify-center'>
          <Link href="/" className="px-6 py-2 bg-black text-white rounded-lg">
            Go to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
