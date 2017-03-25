export const  screens = [
  { 
    screen: 'chat',  // chat, imgChat, headScreen, img
    pause: '',      // ? "0:0.0" || '', default '0:3.0' pause after ending animation screen
    bg: '',         // ? path to img '/img/1.jpeg' || '',
    events: [
      {
        type: '',   // img || text || fade
        value: '',  // src || text || black || white
        author: '', // ? string || ''
        duration: ''// ? default '0:1.0' = 1 sec.
      },
    ]
  },
  { 
    screen: 'imgChat',
    pause: '',      // ? "0:0.0", ''
    bg: '',         // ? path to img '/img/1.jpeg' || '',
    events: [
      {
        type: '',   // img || text
        value: '',  // src || text
        author: '', // ? string || ''
        duration: ''// ? default '0:1.0'
      },
    ]
  },
  { 
    screen: 'img',
    pause: '',      // ? "0:0.0", ''
    bg: '',         // ? path to img '/img/1.jpeg' || '',
    events: [
      {
        type: 'img',   // img
        value: '',  // src
        duration: ''    // ? default '0:1.0'
      },
    ]
  },
  { 
    screen: 'headScreen',
    pause: '',      // ? "0:2.0" || '' default '0:3.0'
    bg: '',         // ? path to img '/img/1.jpeg' || '',
    events: [
      {
        type: '',   // img || text
        value: '',  // src || text
        author: '', // ? string || ''
        duration: ''    // ? default '0:1.0'
      },
    ]
  },
  { 
    screen: 'imgChat',  // chat, imgChat, headScreen
    pause: '',      // "0:0.0", ''
    props: {
      bg: '',       // path to img '/img/1.jpeg' || '',
    }
  },
  { 
    screen: 'headScreen',  // chat, imgChat, headScreen
    pause: '',      // "0:0.0", ''
    props: {
      bg: '',       // path to img '/img/1.jpeg' || '',
      title: 'Master Challange', // string
      part: '2', // string || ''
    }
  },
]
