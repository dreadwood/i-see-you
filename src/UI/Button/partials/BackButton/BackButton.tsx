'use client'

interface ClientLinkProps {
  className: string
  children: JSX.Element
}

export default function BackButton({
  className,
  children
}: ClientLinkProps): JSX.Element {
  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back()
    } else {
      window.location.href = '/'
    }
  }

  return (
    <button className={className} type="button" onClick={() => goBack()}>
      {children}
    </button>
  )
}
