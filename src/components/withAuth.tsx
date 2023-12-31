import { useUser } from '@/hooks/user/useUser';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Spinner from './ui/spinner';

const styles = {
  container: {
    marginTop: 60,
  },
};

const withAuth = (Component: React.FC) => {
  const myComponent = () => {
    const { data: currentUser, isLoading } = useUser();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && !currentUser) {
        toast.info('You need to login to use');
        router.push('/login');
      }
    }, [currentUser, isLoading, router]);

    if (currentUser) {
      return <Component />;
    }

    return (
      <div style={styles.container}>
        <Spinner size={40} />
      </div>
    );
  };
  return myComponent;
};

export default withAuth;
