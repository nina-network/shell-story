

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Shell Story</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Header title="Shell Story - Treasures Untold" />
        <div className="file-upload">
          Upload a photo of your seashell...
          <form action="/action_page.php">
            <label id="customButton" for="fileInput">Add your shell! </label>
            <input type="file" id="fileInput" accept="image/*" class="customFile"></input>
            <input type="submit"></input>
          </form>
        </div>

      </main>

      <Footer />
    </div>
  )
}
