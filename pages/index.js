import Head from 'next/head'
import { useEffect, useState } from 'react';
import Title from '../components/Title'
import { getEmps } from '../lib/emps';



export default function Home() {

  const [emps, setEmps] = useState([]);
  useEffect(() => {
    getEmps().then(setEmps);
  }, []);

  console.log(emps)
  return (
    <>
      <Head>
        <title>HR Manager</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <main>
        <Title>HR Manager</Title>
        <div className="px-4">
          <p>List of emmployees</p>
          <ul>
            {emps.map((emp) => (
              <li key={emp.employee_id}>
                {emp.last_name}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
