export default function Page({ params }: { params: { slug: string } }) {
  return <h1>Blog post slug: {params.slug}</h1>;
}
