import Head from 'next/head'
import Title from '../components/Title'

export default function Home() {
  return (
    <>
      <Head>
        <title>HR Manager</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <main><Title>HR Manager</Title></main>
    </>
  );
}
