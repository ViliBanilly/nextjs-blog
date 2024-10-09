import Layout from '@/components/Layout/Layout';
import utilStyles from '../styles/utils.module.css';

export default function About({ allPostsData }) {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <h2>About</h2>
        <p>
          Chinchilla Teatro es una productora creada en el 2019, con la idea de impulsar proyectos
          originales, estéticos, ambiciosos y poco tradicionales. Un laboratorio para horror,
          comedia, ciencia ficción, animación, arte contemporáneo, así como el documental y la
          no-ficción.
        </p>
      </section>
    </Layout>
  );
}
