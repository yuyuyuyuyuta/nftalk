import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-3">
        <Chat />
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
