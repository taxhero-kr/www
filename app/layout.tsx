import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '전설의 경리 - Coming Soon',
  description: '전설의 경리 - 스마트한 세무 업무의 새로운 기준. 곧 만나보실 수 있습니다.',
  openGraph: {
    title: '전설의 경리 - Coming Soon',
    description: '스마트한 세무 업무의 새로운 기준. 곧 만나보실 수 있습니다.',
    type: 'website',
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📊</text></svg>",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>{children}</body>
    </html>
  )
}
