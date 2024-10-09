'use client';

import Layout from '@/components/Layout/Layout';
import PostItem from '@/components/PostItem/PostItem';
import utilStyles from '@/styles/utils.module.css';
import { getSortedPostsData } from '@/utils/posts';
import type { PostItemDataprops } from '@/components/PostItem/PostItem';

export async function getStaticProps() {
  const allPostsData: PostItemDataprops[] = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

type HomeProps = {
  allPostsData: PostItemDataprops[];
  darkMode: boolean;
  setDarkMode: () => void;
};

export default function Home({ allPostsData, darkMode, setDarkMode }: HomeProps) {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus efficitur
          imperdiet. Nam at euismod risus. Nam sed cursus tortor. Cras sodales purus sed nisi
          interdum venenatis.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map((props: PostItemDataprops) => (
            <PostItem {...props} key={props.id} />
          ))}
        </ul>
      </section>
    </Layout>
  );
}
