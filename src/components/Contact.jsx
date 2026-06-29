import { useState } from 'react'
import { Mail, Send, Instagram, Linkedin, Github } from 'lucide-react'
import Reveal from './Reveal.jsx'

const SOCIALS = [
  { icon: Instagram, href: 'https://www.instagram.com/amaan.web.tech?igsh=amE0cXR3NG1ydm56', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/amaan-web-tech-63ab83304?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/amaan719/', label: 'GitHub' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    /*
      ⚠️ This is a static site — there's no backend to send email.
      Easiest fix: replace this function's body with a request to
      Formspree (formspree.io) or EmailJS (emailjs.com) — both have
      free tiers built exactly for static-site contact forms.
      For now this just opens the user's email app with the message filled in.
    */
    const subject = encodeURIComponent(`New enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:amaan.web.developer.8791@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="grid-dark" style={{ padding: '110px 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 56 }}>
        <div>
          <Reveal direction="up" delay={80}>
            <p className="eyebrow" style={{ color: 'var(--amber)', marginBottom: 12 }}>04 / GET IN TOUCH</p>
          </Reveal>
          <Reveal direction="up" delay={140}>
            <h2 className="section-title" style={{ color: '#fff', marginBottom: 24 }}>
              Have a project<br />in mind?
            </h2>
          </Reveal>
          <Reveal direction="up" delay={220}>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 32, maxWidth: 420 }}>
              Tell us what you're building — an app, a website, or something
              further out — and we'll get back to you.
            </p>
          </Reveal>

          <Reveal direction="up" delay={260}>
            <a href="mailto:amaan.web.developer.8791@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#fff', marginBottom: 28 }}>
              <Mail size={18} color="var(--amber)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>amaan.web.developer.8791@gmail.com</span>
            </a>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <div style={{ display: 'flex', gap: 14 }}>
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 4,
                    border: '1px solid var(--line-on-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.75)',
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal direction="up" delay={320}>
          <form onSubmit={handleSubmit} className="corner-frame contact-card" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--line-on-dark)', borderRadius: 4, padding: 32, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
          <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
          <Field label="Message" name="message" textarea value={form.message} onChange={handleChange} required />

          <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', marginTop: 8 }}>
            {sent ? 'Opening your email…' : 'Send message'} <Send size={15} />
          </button>
        </form>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function Field({ label, name, type = 'text', textarea, ...rest }) {
  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid var(--line-on-dark)',
    borderRadius: 3,
    padding: '11px 14px',
    color: '#fff',
    fontFamily: 'var(--font-body)',
    fontSize: '0.92rem',
  }
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} style={{ ...inputStyle, resize: 'vertical' }} {...rest} />
      ) : (
        <input name={name} type={type} style={inputStyle} {...rest} />
      )}
    </label>
  )
}
