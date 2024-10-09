import Link from 'next/link';
import Date from './Date';
import utilStyles from '@/styles/utils.module.css';

export type PostItemDataprops = {
  id: string;
  title: string;
  date: string;
};

function PostItem({ id, title, date }: PostItemDataprops) {
  return (
    <li className={utilStyles.listItem} key={id}>
      <Link href={`/posts/${id}`}>{title}</Link>
      <br />
      <small className={utilStyles.lightText}>
        <Date dateString={date} />
      </small>
    </li>
  );
}

export default PostItem;
