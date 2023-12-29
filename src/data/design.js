import HistOfComp from "@/components/media/HistOfComp"
import LlmIde from "@/components/media/LlmIde"
import Igloo from "@/components/media/igloo"
import BasicComponent from "@/components/media/BasicComponent"
import Skip from "@/components/media/skip"

export const designs = [
  {
    name: 'History of computing',
    category: 'animation',
    media: (<HistOfComp />),
    color: '#000000',
    collaborators: [
      {
        name: 'SHAOBO.Z',
        url: 'https://boboland.xyz',
      },
      {
        name: 'CHRIS.C',
        url: 'https://hanzhangcao.com/',
      },
    ]
  },
  {
    name: 'LLM Powered ide',
    category: 'animated components',
    media: (<LlmIde />),
    color: '#000000',
    collaborators: [
      {
        name: 'SHAOBO.Z',
        url: 'https://boboland.xyz',
      },
      {
        name: 'SHEERY.X',
      },
    ]
  },
  {
    name: 'Basic Components',
    category: 'component library',
    media: (<BasicComponent />),
    color: '#999999',
    collaborators: [
      {
        name: 'SHAOBO.Z',
        url: 'https://boboland.xyz',
      },
      {
        name: 'EMMIE.F',
      },
    ]
  },
  {
    name: 'igloo',
    category: 'user interface',
    media: (<Igloo />),
    color: '#999999',
    collaborators: [
      {
        name: 'SHAOBO.Z',
        url: 'https://boboland.xyz',
      },
      {
        name: 'SHEERY.X',
      },
    ]
  },
  {
    name: 'skip',
    category: 'user interface',
    media: (<Skip />),
    color: '#999999',
    collaborators: [
      {
        name: 'SHAOBO.Z',
        url: 'https://boboland.xyz',
      },
      {
        name: 'SHEERY.X',
      },
    ]
  },
]