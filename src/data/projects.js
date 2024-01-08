import { urlMap } from "./people"
import Image from "next/image"

import BohausLogo from "@/svg/bohaus"
import LourLogo from "@/svg/lour"
import PlatzLogo from "@/svg/platz"
import Zero55Logo from "@/svg/055"
import LinearaLogo from "@/svg/lineara"
import TomoLogo from "@/svg/tomo"
import PlatzLightLogo from "@/svg/platzLight"
import SpinningLineara from "@/components/media/Lineara"

export const projects = [
  {
    name: 'BOHAUS',
    date: 'Fall, 2023',
    description: 'An open sourced 3D printing furniture project.',
    url: 'https://bohaus.design',
    logo: (<BohausLogo />),
    collaborators: [
      {
        name: 'SHAOBO.Z',
        url: urlMap['SHAOBO.Z']
      },
      {
        name: 'LUCAS.I',
        url: urlMap['LUCAS.I']
      },
      {
        name: 'CHRIS.C',
        url: urlMap['CHRIS.C']
      },
    ]
  },
  {
    name: 'LOUR',
    date: 'Summer, 2023',
    description: 'Color palette generator based on historic art movements, powered by a generative model trained on the artbench dataset.',
    url: 'https://lour.ink',
    logo: (<LourLogo />),
    hoverLogo: (<Image
      src={"/lour.gif?" + Date.now()} 
      alt="Description of GIF"
      width={70} // Adjust as needed
      height={70} // Adjust as needed
    />),
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
    logo: (<PlatzLogo />),
    hoverLogo: (<PlatzLightLogo />),
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
    url: 'https://tomo-git-mw-new-controls-yulilith.vercel.app/',
    logo: (<TomoLogo />),
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
    logo: (<LinearaLogo />),
    hoverLogo: (<SpinningLineara />),
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
    logo: (<Zero55Logo />),
    hoverLogo: (<Image
      src={"/055.gif?" + Date.now()} 
      alt="Description of GIF"
      width={70} // Adjust as needed
      height={34} // Adjust as needed
    />),
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
