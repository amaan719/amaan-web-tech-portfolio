import { Smartphone, Globe, Gamepad2, Boxes } from 'lucide-react'
import Reveal from './Reveal.jsx'

const SERVICES = [
  {
    icon: Smartphone,
    title: 'App Development',
    status: 'live',
    desc: 'Android, iOS, and cross-platform apps built for speed and real-world use, from first sketch to app store listing.',
  },
  {
    icon: Globe,
    title: 'Website Development',
    status: 'live',
    desc: 'Fast, responsive websites and web apps that load quickly, rank well, and convert visitors into customers.',
  },
  {
    icon: Gamepad2,
    title: 'Game Development',
    status: 'dev',
    desc: "Next on the drafting table — building the team and toolkit to start shipping games in the coming years.",
  },
  {
    icon: Boxes,
    title: '3D Modeling',
    status: 'dev',
    desc: 'Asset, character, and environment modeling to support game development and immersive product work.',
  },
]

export default function Services() {
  return (
    <section id="services" className="grid-light" style={{ padding: '110px 0' }}>
      <div className="container">
        <Reveal direction="up" delay={80}>
          <p className="eyebrow" style={{ color: 'var(--blue-mid)', marginBottom: 12 }}>02 / WHAT WE BUILD</p>
        </Reveal>
        <Reveal direction="up" delay={140}>
          <h2 className="section-title" style={{ color: 'var(--ink)', maxWidth: 600, marginBottom: 56 }}>
            Two services shipping now. Two more on the way.
          </h2>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
          {SERVICES.map((s, index) => (
            <Reveal key={s.title} delay={180 + index * 90}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon: Icon, title, status, desc }) {
  return (
    <div
      className="service-card"
      style={{
        background: '#fff',
        border: '1px solid var(--line-on-light)',
        borderRadius: 4,
        padding: 28,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ width: 44, height: 44, borderRadius: 4, background: 'var(--blue-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon size={22} color="var(--amber)" />
        </div>
        <span className={`status-tag ${status === 'live' ? 'status-live' : 'status-dev'}`}>
          {status === 'live' ? 'Live' : 'In development'}
        </span>
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700 }}>{title}</h3>
      <p style={{ color: '#4a5560', fontSize: '0.92rem', lineHeight: 1.6 }}>{desc}</p>
    </div>
  )
}
