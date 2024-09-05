import path from 'path'
import SVGSpritemapPlugin from 'svg-spritemap-webpack-plugin'

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp']
  },
  webpack(config) {
    const SVGSpritemap = new SVGSpritemapPlugin('src/assets/sprites/**/*.svg', {
      output: {
        filename: 'static/sptites/spritemap.svg'
      },
      sprite: {
        prefix: false
      }
    })

    config.resolve.alias['fonts'] = path.resolve('src/assets/fonts')
    config.resolve.alias['~var'] = path.resolve(
      'src/assets/style/common/index.scss'
    )
    config.plugins.push(SVGSpritemap)

    return config
  }
}

export default nextConfig
