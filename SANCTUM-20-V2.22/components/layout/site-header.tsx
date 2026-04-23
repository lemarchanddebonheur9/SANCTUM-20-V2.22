import Link from 'next/link'
import { LogoSanctum } from '@/components/ui/logo-sanctum'

export function SiteHeader() {
  return (
    <header className="border-b border-cyan-500/10 p-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-bold tracking-[0.18em]">
          <LogoSanctum /> SANCTUM
        </Link>
      </div>
    </header>
  )
}
