import type { Metadata } from 'next'
import Nav from '../components/Nav'

export const metadata: Metadata = {
  title: 'Alfred - AI 비서 | 전설의 경리',
  description: 'Alfred - AI 비서. 곧 만나보실 수 있습니다.',
}

export default function AlfredPage() {
  return (
    <>
      <Nav />
      <div className="container">
        <main className="content">
          <div className="logo-section">
            <h1 className="brand">Alfred - AI 비서</h1>
          </div>

          <div className="coming-soon">
            <span className="badge">Coming Soon</span>
          </div>
        </main>

        <footer className="footer">
          <p>&copy; 2025 전설의 경리. All rights reserved.</p>
        </footer>
      </div>

      <div className="bg-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </>
  )
}
