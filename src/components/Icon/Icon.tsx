interface IconProps {
  name: string
  width?: number
  height?: number
  className?: string
}

export default function Icon({
  name,
  width,
  height,
  className
}: IconProps): JSX.Element {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`/_next/static/sptites/spritemap.svg#${name}`} />
    </svg>
  )
}
