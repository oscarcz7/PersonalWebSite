import Oshyn from '@/images/logos/oshyn.svg'
import KrugerColor from '@/images/logos/kruger-color.svg'
import SenecaColor from '@/images/logos/seneca-color.svg'


import logoVanilla from '@/images/logos/vanilla.svg'
import logoFleek from '@/images/logos/fleeksvg.svg'
import logoUblue from '@/images/logos/ublue.png'

import logoGolang from '@/images/logos/icons8-golang.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import logoCaptainhook from '@/images/logos/captainhook.svg'  
const siteMeta = {
    title: "Oscar Catota",
    description: "Oscar Catota is a full stack software developer",
    copyright: "oecz7",
    author: {
        name: "Oscar Catota",
        email: "ocatota@icloud.com",
        twitter: "https://twitter.com/oecz7",
        mastodon: "https://tty0.social/@bketelsen",
        instagram: "https://instagram.com/bketelsen",
        github: "https://github.com/bketelsen",
        linkedin: "https://linkedin.com/in/brianketelsen",
        twitch: "https://twitch.tv/bketelsen",
        youtube: "https://youtube.com/@bketelsen",
    },
    siteUrl: "https://oecz7"
}

export const resume = [
    {
      company: 'Oshyn Inc',
      title: 'Associate Front End Developer',
      logo: Oshyn,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Seneca Corp.',
      title: 'Full Stack Developer - Contractor',
      logo: SenecaColor,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'KrugerCorp',
      title: 'Full Stack Technical Consultant',
      logo: KrugerColor,
      start: '2022',
      end: '2023',
    },
  ]
export const projects = [
  {
    name: 'Fleek',
    description:
      'Install and manage all the tools you need to be productive.',
    link: { href: 'https://getfleek.dev', label: 'getfleek.dev' },
    logo: logoFleek,
  },
  {
    name: 'Universal Blue',
    description:
      'Custom Operating System images based on Fedora.',
    link: { href: 'https://ublue.it', label: 'Universal Blue' },
    logo: logoUblue,
  },
  {
    name: 'Bluefin',
    description:
      'The next generation Linux workstation. Built for cloud-native, using cloud-native.',
    link: { href: 'https://projectbluefin.io', label: 'Bluefin' },
    logo: logoUblue,
  },
  {
    name: 'Vanilla OS',
    description:
      'Vanilla OS is an immutable and atomic Ubuntu Linux-based Point Release distribution, that receives updates at the right time, neither before nor after, without sacrificing security and functionality.',
    link: { href: 'https://vanillaos.org', label: 'vanillaos.org' },
    logo: logoVanilla,
  },
  {
    name: 'Captain Hook',
    description:
      'Custom commands as webhooks.',
    link: { href: 'https://github.com/bketelsen/captainhook', label: 'github.com' },
    logo: logoCaptainhook,
  },
  {
    name: 'Kubernetes',
    description:
      'Production-Grade Container Scheduling and Management',
    link: { href: 'https://github.com/kubernetes/kubernetes', label: 'github.com' },
    logo: logoKubernetes,
  },
  {
    name: 'Go',
    description:
      'Build fast, reliable, and efficient software at scale',
    link: { href: 'https://go.dev', label: 'go.dev' },
    logo: logoGolang,
  },


]
export default siteMeta;