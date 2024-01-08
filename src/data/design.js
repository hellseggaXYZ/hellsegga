import HistOfComp from "@/components/media/HistOfComp"
import LlmIde from "@/components/media/LlmIde"
import Igloo from "@/components/media/Igloo"
import BasicComponent from "@/components/media/BasicComponent"
import Skip from "@/components/media/Skip"
import { urlMap } from "./people"

export const designs = [
  {
    name: 'History of computing',
    category: 'animation',
    media: (<HistOfComp />),
    color: '#666666',
    url: 'https://www.figma.com/community/file/1318302567221633887/history-of-computing',
    collaborators: [
      {
        name: 'SHAOBO.Z',
        url: urlMap['SHAOBO.Z']
      },
      {
        name: 'CHRIS.C',
        url: urlMap['CHRIS.C']
      },
    ]
  },
  {
    name: 'LLM Powered ide',
    category: 'animated components',
    media: (<LlmIde />),
    color: '#666666',
    url: 'https://www.figma.com/community/file/1311725605282104466/code-animations-for-a-llm-powered-ide',
    collaborators: [
      {
        name: 'SHAOBO.Z',
        url: urlMap['SHAOBO.Z']
      },
      {
        name: 'SHEERY.X',
        url: urlMap['SHEERY.X']
      },
    ]
  },
  {
    name: 'Basic Components',
    category: 'component library',
    media: (<BasicComponent />),
    color: '#666666',
    url: 'https://www.figma.com/community/file/1311566269817082686/components-a-basic-component-library-for-your-software',
    collaborators: [
      {
        name: 'SHAOBO.Z',
        url: urlMap['SHAOBO.Z']
      },
      {
        name: 'EMMIE.F',
        url: urlMap['EMMIE.F']
      },
    ]
  },
  {
    name: 'igloo',
    category: 'user interface',
    media: (<Igloo />),
    color: '#666666',
    url: 'https://www.figma.com/community/file/1303871759301894413/igloo-an-organic-non-overwhelming-interface-for-your-relationships',
    collaborators: [
      {
        name: 'SHAOBO.Z',
        url: urlMap['SHAOBO.Z']
      },
      {
        name: 'SHEERY.X',
        url: urlMap['SHEERY.X']
      },
    ]
  },
  {
    name: 'skip',
    category: 'user interface',
    media: (<Skip />),
    color: '#666666',
    url: 'https://www.figma.com/community/file/1298100984070394658/skip-an-ai-powered-collaborative-workspace',
    collaborators: [
      {
        name: 'SHAOBO.Z',
        url: urlMap['SHAOBO.Z']
      },
      {
        name: 'SHEERY.X',
        url: urlMap['SHEERY.X']
      },
    ]
  },
]
