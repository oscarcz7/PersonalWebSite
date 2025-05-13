
import logoOshyn from '@/images/logos/oshyn.svg'
import losgoSeneca from '@/images/logos/seneca-color.svg'
import logoKruger from '@/images/logos/kruger-color.svg'
import logoVerndale from '@/images/logos/verndale.jpeg'
import logoVanilla from '@/images/logos/vanilla.svg'
import logoFleek from '@/images/logos/fleeksvg.svg'
import logoUblue from '@/images/logos/ublue.png'

import logoGolang from '@/images/logos/icons8-golang.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import logoCaptainhook from '@/images/logos/captainhook.svg'  
const siteMeta = {
    title: "Oscar Catota",
    description: "Oscar Catota is a Frontend Developer, UI enthusiast, and digital problem solver..",
    copyright: "Oscar Catota, EC-UIO",
    author: {
        name: "Oscar Catota",
        email: "ocatota@icloud.com",
        github: "https://github.com/oscarcz7",
        linkedin: "https://www.linkedin.com/in/oscar-catota/",
    },
    siteUrl: "https://oecz.dev"
}
 export const resume = [
    {
      company: 'OSHYN.',
      title: 'Front End Developer 2',
      logo: logoOshyn,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Seneca Corporación S.A.S.',
      title: 'Fullstack Developer',
      logo: losgoSeneca,
      start: '2023',
      end: '2025',
    },
    {
      company: 'Kruger Corp',
      title: 'Technical Consultant',
      logo: logoKruger,
      start: '2022',
      end: '2023',
    },
    {
      company: 'Verndale',
      title: 'Sitecore Content Entry Specialist',
      logo: logoVerndale,
      start: '2022',
      end: '2022',
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