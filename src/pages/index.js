import Head from "next/head";
import db from "../../firebase";
import Header from "../components/Header";
import Product from "../components/Product";

export default function Home({ items }) {

  return (
    <div>
      <Head>
        <title>Track Impression</title>
      </Head>
      <Header />
      <main className='flex flex-col items-center mx-auto max-w-screen-md'>
        {items.map((item) => (
          <Product key={item.id} id={item.id} title={item.title} price={item.price} description={item.description} category={item.category} image={item.image} />
        ))}
      </main>
    </div>
  );
}

export async function getServerSideProps(context){
  const items = await fetch('https://fakestoreapi.com/products').then(res => res.json())
  
  return { props: {
    items: items
  } 
}}