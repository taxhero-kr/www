export default function Home() {
  return (
    <>
      <div className="container">
        <main className="content">
          <div className="logo-section">
            <span className="logo-icon">📊</span>
            <h1 className="brand">전설의 경리</h1>
          </div>

          <p className="tagline">스마트한 세무 업무의 새로운 기준</p>

          <div className="coming-soon">
            <span className="badge">Coming Soon</span>
          </div>

          <p className="description">
            더 쉽고, 더 빠르고, 더 정확한<br />
            경리 업무 솔루션을 준비하고 있습니다.
          </p>

          <div className="contact">
            <p>문의: <a href="mailto:dev@itda.work">dev@itda.work</a></p>
          </div>
        </main>

        <footer className="footer">
          <p>&copy; 2025 전설의 경리. All rights reserved.</p>
        </footer>
      </div>

      {/* Decorative elements */}
      <div className="bg-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </>
  )
}
