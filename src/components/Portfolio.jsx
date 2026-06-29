import { ExternalLink } from 'lucide-react'
import Reveal from './Reveal.jsx'

/*
  ⚠️ REPLACE THESE WITH YOUR REAL PROJECTS.
  Add an image to /public (e.g. /public/projects/your-image.jpg)
  and point `image` at it: "/projects/your-image.jpg"
*/
const PROJECTS = [
  {
    title: 'Local Business Website',
    tag: 'Website',
    desc: 'A fast, mobile-first website built for a local business to take bookings online.',
    image: `${import.meta.env.BASE_URL}projects/image1.png`,
  },
  {
    title: 'Bharat Enginnering Works',
    tag: 'App',
    desc: 'A simple, responsive web app built for a local business to showcase their services and portfolio.',
    image: `${import.meta.env.BASE_URL}projects/image2.png`,
  },
  {
    title: 'Food Website',
    tag: 'Website',
    desc: 'A fast, mobile-first website built for a local business to take bookings online.',
    image: `${import.meta.env.BASE_URL}projects/image3.png`,
  },
]

export default function Portfolio() {
  return (
    <section id="work" className="grid-light" style={{ padding: '110px 0' }}>
      <div className="container">
        <Reveal direction="up" delay={80}>
          <p className="eyebrow" style={{ color: 'var(--blue-mid)', marginBottom: 12 }}>01 / SELECTED WORK</p>
        </Reveal>
        <Reveal direction="up" delay={140}>
          <h2 className="section-title" style={{ color: 'var(--ink)', maxWidth: 600, marginBottom: 56 }}>
            A few things on the drafting table.
          </h2>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {PROJECTS.map((p, index) => (
            <Reveal key={p.title} delay={180 + index * 90}>
              <ProjectCard {...p} />
            </Reveal>
          ))}
        </div>

        
      </div>
    </section>
  )
}

function ProjectCard({ title, tag, desc, image }) {
  return (
    <div
      className="project-card"
      style={{
        background: '#fff',
        border: '1px solid var(--line-on-light)',
        borderRadius: 14,
        overflow: 'hidden',
        boxShadow: '0 12px 28px rgba(15, 23, 42, 0.06)',
      }}
    >
      <div
        style={{
          height: 190,
          backgroundColor: 'var(--blue-deep)',
          backgroundImage: image
            ? `url(${image})`
            : 'linear-gradient(var(--line-on-dark) 1px, transparent 1px), linear-gradient(90deg, var(--line-on-dark) 1px, transparent 1px)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: image ? 'cover' : '24px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: image ? 'linear-gradient(180deg, rgba(11,43,69,0.05) 0%, rgba(11,43,69,0.3) 100%)' : 'none',
          }}
        />
        {!image && (
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.4)', position: 'relative', zIndex: 1 }}>
            NO PREVIEW YET
          </span>
        )}
      </div>
      <div style={{ padding: 22 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <span className="eyebrow" style={{ color: 'var(--amber)' }}>{tag}</span>
          <ExternalLink size={15} color="#9aa3aa" />
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', marginBottom: 6 }}>{title}</h3>
        <p style={{ color: '#566069', fontSize: '0.88rem', lineHeight: 1.55 }}>{desc}</p>
      </div>
    </div>
  )
}
