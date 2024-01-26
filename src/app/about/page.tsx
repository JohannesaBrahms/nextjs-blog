import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    "Here's my journey so far.",
};

export default function AboutPage() {
  return (
    <section>
      This is about me
    </section>
  )
}