import { Metadata } from 'next';

type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  coverImage: string;
  ogImage: {
    url: string;
  };
  content: string;
  metadata: Metadata & {
    slug: string;
    date?: string;
    image?: string;
  };
};

export default Post;
