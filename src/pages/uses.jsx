import { NextSeo } from 'next-seo'
import siteMeta from '@/data/siteMeta'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <NextSeo
        title="Uses - Oscar Catota"
        description={siteMeta.description}
        canonical="https://oecz.dev/uses"
        openGraph={{
          url: 'https://oecz.dev/uses',
          images: [
            {
              url: `https://og.oecz.dev/api/og?title=Uses&desc=Things I use every day to get my work done.`,
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          siteName: 'oecz.dev',
        }}
      />
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="14” MacBook Pro, M3, 8GB RAM (2023)">
              Super thin to be the best friend to work
            </Tool>
            <Tool title="Redragon Keyboard">
              The best friend for long term code typing.
            </Tool>
            <Tool title="Apple Magic Trackpad">
              It even works on Linux. Who knew?
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
