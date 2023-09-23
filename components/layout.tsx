import '@/components/globals.css'
import 'github-markdown-css/github-markdown-light.css'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='p-16'>
        <div className='markdown-body'>
          {children}
        </div>
      </body>
    </html>
  )
}
