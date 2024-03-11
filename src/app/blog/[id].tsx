// pages/blog/[id].tsx

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';
import Link from 'next/link';

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />
      <h1>Blog {id}</h1>
      <p>Contenu du blog {id}</p>
      <Link href="/blog/[id]/image" as={`/blog/${id}/image`}>
        <a>Lien vers l'image</a>
      </Link>
      <Footer />
    </div>
  );
};

export default BlogDetail;
