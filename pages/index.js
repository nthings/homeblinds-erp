
import Head from 'next/head'
import CustomerList from '../components/CustomerList'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blinds Management System</title>
      </Head>

      <main className="container mx-auto p-4">
        <CustomerList />
      </main>
    </div>
  )
}
