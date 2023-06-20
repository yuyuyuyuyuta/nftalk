import type { AppProps } from 'next/app'
import type { LayoutProps } from '@vercel/examples-ui/layout'
import { getLayout } from '@vercel/examples-ui'

import '@vercel/examples-ui/globals.css'

function App({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component)

  return (
      <div>
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='w-full max-w-lg px-10 py-2 mx-auto bg-white rounded-lg shadow-xl'>
                <div className='max-w-md mx-auto space-y-6'>
                    <h2 className="flex flex-row flex-nowrap items-center my-8">
                        <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                        <span className="flex-none block mx-4   px-4 py-2.5 text-xs leading-none font-medium uppercase bg-black text-white">
                            NFT Character
                        </span>
                        <span className="flex-grow block border-t border-black" aria-hidden="true" role="presentation"></span>
                    </h2>
                </div>
                <Component {...pageProps} />
            </div>
        </div>
      </div>
  )
}

export default App
