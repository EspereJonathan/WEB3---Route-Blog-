// pages/index.tsx

import { useRouter } from 'next/router';
import Link from 'next/link';

const Home = () => {
  const router = useRouter();
  
  // Rediriger vers /home
  useEffect(() => {
    router.push('/home');
  }, []);

  return null;
};

export default Home;
