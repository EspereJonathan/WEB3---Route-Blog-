// pages/blog/[id]/image.tsx

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const BlogImage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />
      <h1>Image pour Blog {id}</h1>
      <Image
        src={`https://picsum.photos/200/300?random=${id}`}
        alt={`Image for Blog ${id}`}
        width={200}
        height={300}
      />
      <Link href="/blog/[id]" as={`/blog/${id}`}>
        <a>Retour au blog</a>
      </Link>
      <Footer />
    </div>
  );
};

export default BlogImage;
