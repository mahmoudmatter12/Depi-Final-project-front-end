"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "@/utils/motion"
import Btn from "@/components/reUsed/btn"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  // Memoize the animation variants to prevent unnecessary recalculations
  const animations = useMemo(
    () => ({
      container: fadeIn("up", "tween", 0.5, 1),
      heading: textVariant(0.3),
      paragraph: textVariant(0.5),
      buttons: textVariant(0.7),
    }),
    [],
  )

  return (
    <motion.section
      variants={animations.container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-16"
    >
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 rounded-2xl p-8 md:p-12 border border-gray-800 max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              variants={animations.heading}
              className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent"
            >
              Ready to Transform Your Institution?
            </motion.h2>
            <motion.p variants={animations.paragraph} className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of educational institutions revolutionizing their operations with our platform.
            </motion.p>
            <motion.div variants={animations.buttons} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Btn type="fill" className="p-7 flex items-center gap-2">
                  Schedule a Demo <ArrowRight className="w-4 h-4" />
                </Btn>
              </Link>
              <Link href="/pricing">
                <Btn type="out_line" className="p-7">
                  View Pricing
                </Btn>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
