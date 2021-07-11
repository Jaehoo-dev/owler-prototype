const logoBlock = {
  id: 1,
  type: '', // web, email
  tag: 'tbody',
  attrs: null,
  children: [
    {
      tag: 'tr',
      attrs: null,
      children: [
        {
          tag: 'td',
          attrs: null,
          children: [
            {
              tag: 'table',
              attrs: { width: '100%' },
              children: [
                {
                  tag: 'td',
                  attrs: {
                    style: {
                      backgroundColor: '#388cda',
                      padding: '10px',
                      textAlign: 'center',
                    },
                  },
                  children: [
                    {
                      tag: 'a',
                      attrs: { href: 'google.com' },
                      children: ['Logo'],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const logoBlock2 = {
  id: 2,
  tag: 'tbody',
  attrs: null,
  children: [
    {
      tag: 'tr',
      attrs: null,
      children: [
        {
          tag: 'td',
          attrs: null,
          children: [
            {
              tag: 'table',
              attrs: { width: '100%' },
              children: [
                {
                  tag: 'td',
                  attrs: {
                    style: {
                      backgroundColor: '#388cda',
                      padding: '10px',
                      textAlign: 'center',
                    },
                  },
                  children: [
                    {
                      tag: 'span',
                      attrs: { href: 'google.com' },
                      children: ['Some Text'],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const textBlock = {
  tag: 'div',
  classes: ['asd', 'fds', 'faosd'],
  children: [
    {
      tag: 'div',
      classes: ['qqq'],
      children: ['hi'],
    },
  ],
};

const mockBlocks = [logoBlock, logoBlock2];

export default mockBlocks;
