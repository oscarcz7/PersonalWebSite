'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/Button'

const UnderConstruction = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="max-w-xl p-10 text-center">
        <div className="mb-3">
          <svg
            className="w-16 h-16 mx-auto text-teal-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93M12 2a10 10 0 100 20 10 10 0 000-20z"
            />
          </svg>
          <h1 className="my-2 text-2xl font-bold text-gray-800">
            Page Under Construction
          </h1>
          <p className="text-gray-600">
            We’re working hard to improve your experience. Please check back
            soon!
          </p>
        </div>

        <Button
          href="/"
          className="w-full mt-6 group"
        >
          Back to Home
          {/* <ArrowDownIcon className="w-4 h-4 transition stroke-zinc-400 group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" /> */}
        </Button>
      </div>
    </div>
  )
}

export default UnderConstruction
