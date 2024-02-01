import Image from 'next/image';

import styles from './page.module.css';

export default function Page() {
  return (
    <section className={styles.main}>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">{`hey, I'm bojana 👋`}</h1>

      <div className={styles.center}>WIP</div>
      <div className={styles.description}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </section>
  );
}
