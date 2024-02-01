import type { Metadata } from 'next';

import CustomMDX from '../components/mdx';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Here are some things that preoccupy my mind.',
};

export default function BlogPage() {
  return (
    <section>
      <CustomMDX>These are my blog posts in **MARKDOWN**</CustomMDX>
    </section>
  );
}
