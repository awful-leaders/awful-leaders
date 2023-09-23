import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
}
 
const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})
export default withMDX(nextConfig)
