import { ArrowRight, ArrowDown } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <section id="top" className="grid-dark" style={{ position: 'relative', paddingTop: 160, paddingBottom: 110, overflow: 'hidden' }}>
      <CornerMark style={{ top: 28, left: 24 }} />
      <CornerMark style={{ top: 28, right: 24 }} flip />
      <CornerMark style={{ bottom: 28, left: 24 }} />
      <CornerMark style={{ bottom: 28, right: 24 }} flip />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 36, alignItems: 'center' }}>
          <div>
            <Reveal direction="up" delay={60}>
              <p className="eyebrow" style={{ color: 'var(--amber)', marginBottom: 18 }}>
                DWG NO. AWT-2026 &nbsp;·&nbsp; UDYAM REGISTERED &nbsp;·&nbsp; INDIA
              </p>
            </Reveal>

            <Reveal direction="up" delay={140}>
              <h1
                className="section-title"
                style={{ color: '#fff', fontSize: 'clamp(2.4rem, 7vw, 4.6rem)', maxWidth: 780 }}
              >
                From blueprint
                <br />
                to <span style={{ color: 'var(--amber)' }}>build.</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={220}>
              <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.1rem', maxWidth: 540, marginTop: 24, lineHeight: 1.6 }}>
                Amaan Web Tech designs and ships apps and websites today — and is drafting the toolkit to build games and 3D worlds next.
              </p>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <div style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap' }}>
                <a href="#work" className="btn btn-primary">
                  View the work <ArrowRight size={16} />
                </a>
                <a href="#contact" className="btn btn-outline">
                  Start a project
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal direction="up" delay={260}>
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  border: '1px solid rgba(255,255,255,0.16)',
                  borderRadius: 24,
                  padding: 12,
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.22)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px) rotate(-1deg) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 24px 70px rgba(0, 0, 0, 0.3)'
                  e.currentTarget.style.borderColor = 'rgba(255, 139, 61, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) rotate(0deg) scale(1)'
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.22)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.16)'
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}projects/developer-image.jpeg`}
                  alt="Amaan Web Tech developer"
                  style={{ width: '100%', borderRadius: 16, objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }}
                />
              </div>

              <div
                style={{
                  position: 'absolute',
                  right: 16,
                  bottom: 16,
                  width: 110,
                  height: 110,
                  borderRadius: 24,
                  padding: 12,
                  border: '1px solid rgba(255,255,255,0.18)',
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 14px 36px rgba(0, 0, 0, 0.22)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px) rotate(2deg) scale(1.04)'
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 0, 0, 0.24)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) rotate(0deg) scale(1)'
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.18)'
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}projects/developer-logo.png`}
                  alt="Amaan Web Tech logo"
                  style={{ width: '100%', height: '100%', borderRadius: 14, objectFit: 'contain', display: 'block', background: '#fff', padding: 4 }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal direction="up" delay={380}>
        <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.45)' }}>
          <span className="eyebrow" style={{ fontSize: '0.65rem' }}>SCROLL</span>
          <ArrowDown size={14} />
        </div>
      </Reveal>
    </section>
  )
}

function CornerMark({ style, flip = false }) {
  return (
    <div
      style={{
        position: 'absolute',
        width: 22,
        height: 22,
        zIndex: 1,
        ...style,
      }}
    >
      <div style={{ position: 'absolute', top: 0, [flip ? 'right' : 'left']: 0, width: '100%', height: 1.5, background: 'var(--amber)' }} />
      <div style={{ position: 'absolute', top: 0, [flip ? 'right' : 'left']: 0, height: '100%', width: 1.5, background: 'var(--amber)' }} />
    </div>
  )
}
