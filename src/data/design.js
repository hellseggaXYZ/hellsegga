import HistOfComp from "@/components/media/HistOfComp"
import LlmIde from "@/components/media/LlmIde"

export const designs = [
  {
    name: 'History of computing',
    category: 'animation',
    media: (<HistOfComp />),
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
    collaborators: [
      {
        name: 'SHAOBO.Z',
        url: 'https://boboland.xyz',
      },
      {
        name: 'SHEERY.X',
        url: 'https://www.sherryxu.com/',
      },
    ]
  },
]