// todo: create url mapping here from this list
// todo: other projects will reference this list


export const people = [
  {
    name: 'SHAOBO.Z',
    url: 'https://boboland.xyz',
    role: ['design', 'engineering'],
    projects: [],
  },
  {
    name: 'PEIYUAN.L',
    url: 'https://www.liaopeiyuan.com/',
    role: ['engineering'],
    projects: [],
  },
  {
    name: 'MARCO.W',
    url: 'https://www.marcowang.xyz/',
    role: ['engineering'],
    projects: [],
  },
  {
    name: 'MARCO.Y',
    url: 'https://www.linkedin.com/in/marco-yu-ba21661ab/',
    role: ['engineering'],
    projects: [],
  },
  {
    name: 'LILITH.Y',
    url: 'https://lilithyu.com/',
    role: ['design', 'engineering'],
    projects: [],
  },
  {
    name: 'DALU.L',
    url: 'https://www.daluliu.com/',
    role: ['engineering'],
    projects: [],
  },
  {
    name: 'CHRIS.C',
    url: 'https://hanzhangcao.com/',
    role: ['design'],
    projects: [],
  },
  {
    name: 'LUCAS.I',
    url: 'https://lucasiezzi.com/',
    role: ['design', 'engineering'],
    projects: [],
  },
  {
    name: 'SHEERY.X',
    url: 'https://www.linkedin.com/in/sherry-yx/',
    role: ['design'],
    projects: [],
  },
  {
    name: 'EMMIE.F',
    url: 'https://www.linkedin.com/in/emersonfister/',
    role: ['design'],
    projects: [],
  }
]

// create a map from name to url
export const urlMap = people.reduce((acc, person) => {
  acc[person.name] = person.url
  return acc
}, {})