import Image from 'next/future/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/photos/ocatota.jpg'
import siteMeta from '@/data/siteMeta'
import { NextSeo } from 'next-seo'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <NextSeo
        title="About - Oscar Catota"
        description={siteMeta.description}
        canonical="https://oecz.dev/about"
        openGraph={{
          url: 'https://oecz.dev/about',
          images: [
            {
              url: `https://og.oecz.dev/api/og?title=About&desc=${siteMeta.description}`,
              width: 1200,
              height: 600,
              alt: 'oscar catota',
              type: 'image/jpeg',
            },
          ],
          siteName: 'oecz.dev',
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 py-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="object-contain p-3 aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Oscar Catota. I live in Quito, Ecuador, where I craft modern
              web experiences and bring ideas to life through code.
            </h1>
            <div className="mt-6 text-lg prose space-y-7 text-zinc-600 dark:prose-invert dark:text-zinc-400">
              <p>
                Hey there! Thanks for stopping by. I’m Oscar — a frontend
                developer with 4 years of experience building responsive,
                accessible, and user-friendly websites and applications. While
                frontend is my specialty, I also enjoy exploring backend
                technologies when the project calls for it.
              </p>
              <p>
                A few highlights about me and what I enjoy:
                <ul role="list">
                  <li>
                    Frontend Developer: Focused on building clean, maintainable
                    interfaces with React, Next.js, and Tailwind CSS.
                  </li>
                  <li>
                    Team Member at Oshyn Inc.: Collaborating on digital
                    solutions for global clients.
                  </li>
                  <li>
                    UI/UX Enthusiast: I care deeply about design, usability, and
                    the way people interact with technology.
                  </li>
                  <li>
                    Passionate About Sports: Whether it’s playing or watching,
                    sports keep me balanced and inspired.
                  </li>
                  <li>
                    Curious Learner: Always exploring new tools, frameworks, and
                    design patterns to grow as a developer. I believe great
                    digital experiences are built at the intersection of code,
                    design, and empathy.
                  </li>
                </ul>
                I’m here to learn, build, and contribute wherever I can.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href={siteMeta.author.github}
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href={siteMeta.author.linkedin}
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href={`mailto:${siteMeta.author.email}`}
                icon={MailIcon}
                className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
              >
                {siteMeta.author.email}
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
