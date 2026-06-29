import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(11,43,69,0.96)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--line-on-dark)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(6px)' : 'none',
        transition: 'background 0.25s ease, border-color 0.25s ease',
      }}
    >
      <nav className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: '#fff' }}>
            Amaan Web Tech
          </span>
          <span className="eyebrow" style={{ color: 'var(--amber)' }}>// AWT</span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="nav-desktop">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="eyebrow"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary">Start a Project</a>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
          className="nav-toggle"
          style={{ background: 'none', color: '#fff', display: 'none' }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="nav-mobile-panel" style={{ background: 'var(--blue-deep)', borderTop: '1px solid var(--line-on-dark)' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '16px 24px 24px' }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="eyebrow"
                style={{ color: 'rgba(255,255,255,0.85)', padding: '12px 0', borderBottom: '1px solid var(--line-on-dark)' }}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary" style={{ marginTop: 16, justifyContent: 'center' }}>
              Start a Project
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-toggle { display: flex !important; align-items: center; }
        }
      `}</style>
    </header>
  )
}
