'use client';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { StytchProvider } from "@stytch/nextjs";
import { createStytchUIClient } from "@stytch/nextjs/ui";

const stytch = createStytchUIClient(
  "public-token-test-526219d4-38af-4a0f-bae5-0ae628122345"
);


const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-1 h-full'>
          <StytchProvider stytch={stytch}>
            {children}
          </StytchProvider>
        </div>

      </body>
    </html>
  )
}
