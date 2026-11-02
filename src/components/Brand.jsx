import webnestMark from '../assets/webnest-w.webp'

export default function Brand({ compact = false }) {
  return (
    <a className={`brand${compact ? ' brand--compact' : ''}`} href="/" aria-label="WebNest — página inicial">
      <span className="brand__mark" aria-hidden="true"><img src={webnestMark} alt="" /></span>
      <span className="brand__copy"><strong>Web<span>Nest</span></strong>{!compact && <small>Desenvolvimento de sites</small>}</span>
    </a>
  )
}
