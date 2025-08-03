import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const badBots = [
  'go-http', 'curl', 'python', 'axios', 'java', 'httpclient',
  'libwww-perl', 'wget', 'httpx', 'ruby', 'node-fetch',
  'discord-crawler', 'scrapy', 'aiohttp', 'okhttp', 'powershell'
]

export function middleware(request: NextRequest) {
  const ua = request.headers.get('user-agent')?.toLowerCase() || ''
  const method = request.method
  const pathname = request.nextUrl.pathname

  const isBadBot = badBots.some(bot => ua.includes(bot))
  if (isBadBot || method === 'OPTIONS') {
    return new NextResponse('Bot Blocked', { status: 403 })
  }

  const response = NextResponse.next()

  if (pathname.endsWith('.svg') || pathname.endsWith('.ico')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }

  return response
}

export const config = {
  matcher: [
    '/favicon.ico',
    '/**/*.svg',
    '/**/*.ico',
    '/**'
  ],
}
