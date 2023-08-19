import Error from '@/components/Error';
import Meta from '@/components/Meta/Meta';



const Home = () => {
  const working = true;

  return (
    <>
      <Meta />
      {working ? (
        <div className='h-fit w-full'>
          <div className='flex w-full flex-col h-screen' >
            
          </div>
        </div>
      ) : (
        <Error message='Looks like server is down' />
      )}
    </>
  );
};

export default Home;


// export async function getStaticProps() {

// }
