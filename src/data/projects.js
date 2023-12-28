import LourLogo from "@/svg/lour"
import PlatzLogo from "@/svg/platz"
import Zero55Logo from "@/svg/055"
import LinearaLogo from "@/svg/lineara"
import TomoLogo from "@/svg/tomo"

export const projects = [
  {
    name: 'LOUR',
    date: 'Summer, 2023',
    description: 'Color palette generator based on historic art movements, powered by a generative model trained on the artbench dataset.',
    external_url: 'https://lour.ink',
    image: (<LourLogo />),
    collaborators: [
      {
        name: 'SHAOBO.Z',
        url: 'https://boboland.xyz',
      },
      {
        name: 'PEIYUAN.L',
        url: 'https://www.liaopeiyuan.com/',
      }
    ]
  },
  {
    name: 'Platz',
    date: 'Spring, 2023',
    description: 'An open source infinite canvas based website template.',
    external_url: 'https://www.platz.ooo/',
    github_url: 'https://github.com/szgbo/platz',
    image: (<PlatzLogo />),
    collaborators: [
      {
        name: 'MARCO.W',
        url: 'https://www.marcowang.xyz/',
      },
      {
        name: 'SHAOBO.Z',
        url: 'https://boboland.xyz',
      },
      {
        name: 'MARCO.Y',
        url: 'https://www.linkedin.com/in/marco-yu-ba21661ab/',
      },
      {
        name: 'DALU.LIU',
        url: 'https://www.daluliu.com/',
      }
    ]
  },
  {
    name: 'linear a',
    date: 'Fall, 2022',
    description: 'Experimental attempt at running ml algorithm in zero-knowledge proofs.',
    image: (<LinearaLogo />),
    collaborators: [
      {
        name: 'PEIYUAN.L',
        url: 'https://www.liaopeiyuan.com/',
      },
      {
        name: 'SHAOBO.Z',
        url: 'https://boboland.xyz',
      },
    ]
  },
  {
    name: '055',
    date: 'Summer, 2022',
    description: 'A collection of AI generated NFTs that only shows its original content to those that have access to its secret. Only the owner have access to the original image off-chain, with only a thumbnail version available on-chain.',
    image: (<Zero55Logo />),
    note: 'This project is deprecated because the metamask account that was used to deploy the contract was compromised.',
    collaborators: [
      {
        name: 'SHAOBO.Z',
        url: 'https://boboland.xyz',
      },
      {
        name: 'PEIYUAN.L',
        url: 'https://www.liaopeiyuan.com/',
      },
      {
        name: 'MARCO.Y',
        url: 'https://www.linkedin.com/in/marco-yu-ba21661ab/',
      },
    ]
  },
  {
    name: 'TOMO',
    date: 'Spring, 2023',
    description: 'TOMO is a collection of AI powered toys created with the aim of researching how AI can help build interactions that inspire curiosity, creativity, and compassion. This site is for testing the software, which will eventually live inside physical toys and exhibited at an in-person exhibition. Thank you for trying it out and please give some feedback!',
    image: (<TomoLogo />),
    external_url: 'https://tomo-git-mw-new-controls-yulilith.vercel.app/',
    collaborators: [
      {
        name: 'LILITH.Y',
        url: 'https://lilithyu.com/',
      },
      {
        name: 'MARCO.W',
        url: 'https://www.marcowang.xyz/',
      },
      {
        name: 'SHAOBO.Z',
        url: 'https://boboland.xyz',
      },
    ]
  }
]