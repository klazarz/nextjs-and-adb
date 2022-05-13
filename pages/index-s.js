import Head from 'next/head'
import Title from '../components/Title'
import { getEmps } from '../lib/emps';

export async function getStaticProps() {
  const emps = await getEmps(0);
  return {
    props: {emps},
  };
}

export default function Home({emps}) {
  return (
    <>
      <Head>
        <title>HR Manager</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <main>
        <Title>HR Manager</Title>
        <div className="px-4">
          <p>List of employees</p>
          <ul className="text-sm">
            {emps.map((emp) => (
              <li key={emp.employee_id}>
               {emp.last_name}, {emp.first_name}
              </li>
            ))}
          </ul>
          <ul className="text-sm">
              <li>
               {emps.offset}
              </li>
          </ul>
          <ul className="text-sm">
              <li>
               {emps.hasMore ? 1 : 0}
              </li>
          </ul>
        </div>
      </main>
    </>
  );
}
