import Head from 'next/head'
import { attributes, react as HomeContent } from '../content/home.md'

interface Cat {
  name: string
  description: string
}

interface Foo {
  title: string
  cats: Cat[]
}

export default function Home() {
  const { title, cats }: Foo = attributes

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>
      <article>
        <h1>{title}</h1>
        <HomeContent />
        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </>
  )
}
