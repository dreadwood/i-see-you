import type { Metadata } from 'next'
import '@style/global/index.scss'

export const metadata: Metadata = {
  title: '“Я тебя вижу...” — Марафон инициация',
  description:
    'Авторский курс Юрия Менячихина инициирует общение с внутренним Ребенком, внутренним Подростком и внутренним Взрослым. В результате детство наполняется теплом, юность освобождается от ответственности за взрослую жизнь, а зрелость открывается любви и творчеству.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
