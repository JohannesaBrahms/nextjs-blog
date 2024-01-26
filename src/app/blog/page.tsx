import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    "Here are some things that preoccupy my mind.",
};

export default function BlogPage() {
  return (
    <section>
      These are my blog posts
    </section>
  )}