import Icon from '@/components/Icon/Icon'

interface ButtonContentProps {
  text: string
  iconLeft?: string
  iconRight?: string
}

export default function ButtonContent({
  text,
  iconLeft,
  iconRight
}: ButtonContentProps): JSX.Element {
  return (
    <>
      {iconLeft && <Icon name={iconLeft} width={16} height={16} />}
      <span>{text}</span>
      {iconRight && <Icon name={iconRight} width={16} height={16} />}
    </>
  )
}
