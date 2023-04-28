export const members = [
  {
    id: 0,
    name: 'Vic Easy',
    time() {
      let currentTime = new Date().toLocaleTimeString('en-US')
      let postedTime = new Date('4/14/2023')
      let elapsed = (currentTime - postedTime) / 1000
      return elapsed
    },
  },
  {
    id: 1,
    name: 'Anne Couture',
    time() {
      let currentTime = new Date().toLocaleTimeString('en-US')
      let postedTime = new Date('4/18/2023 13:00:48')
      let elapsed = (currentTime - postedTime) / 1000
      return elapsed
    },
  },
]

/*
export const cards = [
  {
    featured: [
      {
        backgroundimage: './assets/images/icons/VirtualReality.png',
        curtainimage: '',
        name: 'Game Play',
        info: 'Always a new challenge. Great place to make new friends.',
        online: '28,628',
        members: '527,955',
      },
      {
        backgroundimage: './assets/images/icons/VirtualReality.png',
        curtainimage: '',
        name: 'Game Play',
        info: 'Always a new challenge. Great place to make new friends.',
        online: '28,628',
        members: '527,955',
      },
    ],
  },
  { popular: [{bac}, {}] },
]
*/
export const cards = [
  {
    id: 'feature',
    backgroundimage: './src/assets/images/icons/VirtualReality.png',
    curtainimage: './src/assets/images/icons/FeatureCurtain.png',
    name: 'Game Play',
    info: 'Always a new challenge. Great place to make new friends.',
    online: '28,628',
    members: '527,955',
    tag: 'gaming',
  },
  {
    id: 'feature',
    backgroundimage: './src/assets/images/icons/VirtualReality.png',
    curtainimage: './src/assets/images/icons/FeatureCurtain.png',
    name: 'Virtual Reality',
    info: 'Always a new challenge. Great place to make new friends.',
    online: '28,628',
    members: '527,955',
    tag: 'gaming',
  },
  {
    id: 'popular',
    backgroundimage: './src/assets/images/icons/3dArt.png',
    curtainimage: './src/assets/images/icons/3dArtCurtain.png',
    name: '3D Art',
    info: 'A great place to discuss art.',
    members: '1,109,278',
    tag: 'student hub',
  },
  {
    id: 'popular',
    backgroundimage: './src/assets/images/icons/NFT.png',
    curtainimage: './src/assets/images/icons/NFTCurtain.png',
    name: 'NFT',
    info: 'An NFT community so that everyone can share their NFTs.',
    online: '',
    members: '887,789',
    tag: 'Science',
  },
  {
    id: 'recent',
    backgroundimage: './src/assets/images/icons/VirtualReality.png',
    curtainimage: '',
    name: 'Movie Recapped',
    info: 'Always a new challenge. Great place to make new friends.',
    online: '',
    members: '',
    tag: 'entertainment',
  },
  {
    id: 'recent',
    backgroundimage: './src/assets/images/icons/VirtualReality.png',
    curtainimage: '',
    name: 'Science',
    info: 'Always a new challenge. Great place to make new friends.',
    online: '',
    members: '527,955',
    tag: 'science',
  },
  {
    id: 'recent',
    backgroundimage: './assets/images/icons/VirtualReality.png',
    curtainimage: '',
    name: 'Space',
    info: 'Always a new challenge. Great place to make new friends.',
    online: '',
    members: '527,955',
    tag: 'education',
  },
  {
    id: 'recent',
    backgroundimage: './assets/images/icons/VirtualReality.png',
    curtainimage: '',
    name: 'Sport',
    info: 'Always a new challenge. Great place to make new friends.',
    online: '',
    members: '527,955',
    tag: 'entertainment',
  },
]
