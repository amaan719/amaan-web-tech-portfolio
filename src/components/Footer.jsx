export default function Footer() {
  return (
    <footer style={{ background: 'var(--blue-deep)', borderTop: '1px solid var(--line-on-dark)', padding: '28px 0' }}>
      <div
        className="container"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img
            src="/projects/developer-logo.png"
            alt="Amaan Web Tech logo"
            style={{ width: 100, height: 50, borderRadius: 12, objectFit: 'cover', background: '#fff', padding: 4 }}
          />
          <div>
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 2 }}>
              Developed By : Amaan Web Tech
            </div>
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.45)' }}>
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>
        </div>
        <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Apps · Websites · Games (soon) · 3D (soon)
        </span>
      </div>
    </footer>
  )
}
