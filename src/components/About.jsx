import Reveal from './Reveal.jsx'

const SPECS = [
  { label: 'Founder', value: 'Amaan' },
  { label: 'Status', value: 'Udyam Registered' },
  { label: 'Based in', value: 'India' },
  { label: 'Building now', value: 'Apps & Websites' },
  { label: 'Drafting next', value: 'Games & 3D' },
]

export default function About() {
  return (
    <section id="about" className="grid-dark" style={{ padding: '110px 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56 }} >
        <div>
          <Reveal direction="up" delay={80}>
            <p className="eyebrow" style={{ color: 'var(--amber)', marginBottom: 12 }}>03 / ABOUT</p>
          </Reveal>
          <Reveal direction="up" delay={140}>
            <h2 className="section-title" style={{ color: '#fff', marginBottom: 24 }}>
              Built by one founder.<br />Drafted for what's next.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={220}>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 520 }}>
              Amaan Web Tech started as one developer building apps and websites
              for people who needed them done properly. It's now a registered
              company with a clear roadmap: keep shipping reliable apps and
              sites today, and put in the groundwork — engines, pipelines, and
              3D tooling — to start building games next.
            </p>
          </Reveal>
        </div>

        <Reveal direction="up" delay={260}>
          <div
            className="spec-card"
            style={{
            border: '1px solid var(--line-on-dark)',
            borderRadius: 4,
            padding: 0,
            alignSelf: 'start',
          }}
        >
          <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--line-on-dark)' }}>
            <span className="eyebrow" style={{ color: 'var(--amber)' }}>TITLE BLOCK</span>
          </div>
          {SPECS.map((s, i) => (
            <div
              key={s.label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '16px 20px',
                borderBottom: i === SPECS.length - 1 ? 'none' : '1px solid var(--line-on-dark)',
              }}
            >
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</span>
              <span style={{ fontFamily: 'var(--font-mono)', color: '#fff', fontSize: '0.85rem', fontWeight: 500 }}>
                {s.value}
              </span>
            </div>
          ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
