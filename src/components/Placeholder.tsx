// Stand-in for an image that hasn't been added yet. Pass `src` to show the real image instead.
export function Placeholder({
  label,
  src,
  alt = '',
  className = '',
}: {
  label: string
  src?: string
  alt?: string
  className?: string
}) {
  if (src) return <img className={`media ${className}`} src={src} alt={alt} />
  return (
    <div className={`media placeholder ${className}`} role="img" aria-label={`${label} (placeholder)`}>
      <span>{label}</span>
    </div>
  )
}
