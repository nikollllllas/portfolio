import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { useLocale } from '#/hooks/use-locale'
import { Button } from '@/components/ui/button'

const OPTIONS = [
  { locale: 'pt' as const, to: '/', label: 'PT' },
  { locale: 'en' as const, to: '/en', label: 'EN' },
]

export function LanguageToggle() {
  const { locale } = useLocale()

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-[var(--line)] p-0.5">
      {OPTIONS.map(option => {
        const active = locale === option.locale

        return (
          <Button
            key={option.locale}
            asChild
            size="sm"
            variant="ghost"
            className="relative h-7 rounded-full px-2.5 text-xs hover:bg-transparent"
          >
            <Link
              to={option.to}
              className={active ? 'text-primary-foreground' : undefined}
            >
              {active && (
                <motion.span
                  layoutId="lang-thumb"
                  className="absolute inset-0 -z-10 rounded-full bg-primary"
                  transition={{ type: 'spring', stiffness: 500, damping: 32 }}
                />
              )}
              {option.label}
            </Link>
          </Button>
        )
      })}
    </div>
  )
}
