import { promises as fs } from 'fs';
import path from 'path';

import { Grid, Typography, Divider } from '@mui/material';
import Markdown from 'markdown-to-jsx';
import type { Metadata } from 'next';
import { serialize } from 'next-mdx-remote/serialize';

import CustomMDX from '../components/mdx';
import Post from '../types/post';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Here are some things that preoccupy my mind.',
};

interface BlogProps {
  posts: ReadonlyArray<Post>;
  title: string;
}

const workDirPath = process.cwd();
const contentPath = path.join(workDirPath, '/content');
// const filePath = path.join(workDirPath, contentPath, `${params.slug}.mdx`);

async function getPosts(): Promise<Post[]> {
  const raw = await fs.readFile(contentPath, 'utf-8');

  const content = await serialize(raw, {
    parseFrontmatter: true,
  });

  const frontmatter = content.frontmatter as Frontmatter;

  return {
    frontmatter,
    content,
  };
}

export default async function Page(props: BlogProps) {
  const { title } = props;
  const posts = await fetch('');

  return (
    <section>
      {/* <Main title="From the firehose" posts={posts} /> */}
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          '& .markdown': {
            py: 3,
          },
        }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Divider />
        {posts.map((post) => (
          //className="markdown"
          <CustomMDX key={post.slug}>{post.content}</CustomMDX>
        ))}
      </Grid>
    </section>
  );
}
