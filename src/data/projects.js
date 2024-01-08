import Lour from "@/components/media/Lour"
import Platz from "@/components/media/Platz"
import Zero55 from "@/components/media/Zero55"
import Lineara from "@/components/media/Lineara"
import TomoLogo from "@/svg/tomo"
import { urlMap } from "./people"

export const projects = [
  {
    name: 'LOUR',
    date: 'Summer, 2023',
    description: 'Color palette generator based on historic art movements, powered by a generative model trained on the artbench dataset.',
    url: 'https://lour.ink',
    image: (<Lour />),
    collaborators: [
      {
        name: 'SHAOBO.Z',
        url: urlMap['SHAOBO.Z']
      },
      {
        name: 'PEIYUAN.L',
        url: urlMap['PEIYUAN.L']
      },
      {
        name: 'MARCO.W',
        url: urlMap['MARCO.W']
      },
    ]
  },
  {
    name: 'Platz',
    date: 'Spring, 2023',
    description: 'An open source infinite canvas based website template.',
    url: 'https://www.platz.ooo/',
    image: (<Platz />),
    collaborators: [
      {
        name: 'MARCO.W',
        url: urlMap['MARCO.W']
      },
      {
        name: 'SHAOBO.Z',
        url: urlMap['SHAOBO.Z']
      },
      {
        name: 'MARCO.Y',
        url: urlMap['MARCO.Y']
      },
      {
        name: 'DALU.L',
        url: urlMap['DALU.L']
      }
    ]
  },
  {
    name: 'TOMO',
    date: 'Spring, 2023',
    description: 'A collection of AI powered toys created with the aim of researching how AI can help build interactions that inspire curiosity, creativity, and compassion.',
    image: (<TomoLogo />),
    url: 'https://tomo-git-mw-new-controls-yulilith.vercel.app/',
    collaborators: [
      {
        name: 'LILITH.Y',
        url: urlMap['LILITH.Y']
      },
      {
        name: 'MARCO.W',
        url: urlMap['MARCO.W']
      },
    ]
  },
  {
    name: 'linear a',
    date: 'Fall, 2022',
    description: 'Experimental attempt at running ml algorithm in zero-knowledge proofs.',
    image: (<Lineara />),
    url: 'https://zk-ml.xyz/',
    collaborators: [
      {
        name: 'PEIYUAN.L',
        url: urlMap['PEIYUAN.L']
      },
      {
        name: 'SHAOBO.Z',
        url:  urlMap['SHAOBO.Z']
      },
    ]
  },
  {
    name: '055',
    date: 'Summer, 2022',
    description: 'A collection of AI generated NFTs that only shows its original content to those that have access to its secret. Only the owner have access to the original image off-chain, with only a thumbnail version available on-chain.',
    image: (<Zero55 />),
    url: 'https://youtu.be/1_QF4B1ITV4',
    note: 'This project is deprecated because the metamask account that was used to deploy the contract was compromised.',
    collaborators: [
      {
        name: 'SHAOBO.Z',
        url: urlMap['SHAOBO.Z']
      },
      {
        name: 'PEIYUAN.L',
        url: urlMap['PEIYUAN.L'],
      },
      {
        name: 'MARCO.Y',
        url: urlMap['MARCO.Y'],
      },
    ]
  },
]
