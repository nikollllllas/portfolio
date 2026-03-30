export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer mt-auto px-4 pb-12 pt-10 text-muted">
      <div className="page-wrap flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:text-left">
        <p className="m-0 text-sm">
          © {year} - Nikollas Ohta.
        </p>
      </div>
    </footer>
  )
}
