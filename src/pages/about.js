import Layout from '@/components/Layout/Layout';
import utilStyles from '../styles/utils.module.css';

export default function About() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <h2>About</h2>
        <p>
          I am a <strong>Front-End developer</strong> with <strong>14 years of experience</strong>{' '}
          working with multiple technologies in a huge variety of projects on different domains. Due
          to my strong background on design, my development work embraces outstanding visual balance
          and attention to detail, combined with top level coding skills using modern technologies.
        </p>
      </section>
    </Layout>
  );
}
