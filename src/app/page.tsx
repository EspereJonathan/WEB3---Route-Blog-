// pages/home.tsx

import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <Header />
        <h1>Home Page</h1>
        <ul>
        <li>
          <Link href="/blog/1">Blog 1</Link>
        </li>
        <li>
          <Link href="/blog/2">Blog 2</Link>
        </li>
        {/* Ajoutez les autres blogs ici */}
        </ul>
      <Footer />
    </div>
  );
};

export default Home;
