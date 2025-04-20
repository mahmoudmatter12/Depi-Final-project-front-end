import Link from "next/link"

export function HeroSection() {
  return (
    <section className="py-20 px-4 mt-10">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Manage Your College <span className="text-cyan-400">Effortlessly</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          A unified platform for students, teachers, and administrators to streamline enrollment, assignments, and
          academic tracking.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/get-started"
            className="px-4 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
          >
            Get started
          </Link>
          <Link
            href="/login"
            className="px-7 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/10 transition-colors flex items-center justify-center"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  )
}
