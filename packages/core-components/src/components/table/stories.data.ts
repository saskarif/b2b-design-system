import { html } from 'lit-html';

export const sampleData = {
  columns: ['Name', 'Column 1', 'Column 2', 'Column 3'],
  rows: [
    [
      'Name A',
      'Content 1',
      'Content 1',
      html` <b2b-button size="50">Action</b2b-button>`,
    ],
    [
      'Name B',
      'Content 2',
      'Content 2',
      html` <b2b-button size="50">Action</b2b-button>`,
    ],
    [
      'Name C',
      'Content 3',
      'Content 3',
      html` <b2b-button size="50">Action</b2b-button>`,
    ],
    [
      'Name D',
      'Content 4',
      'Very, very, long, long data text that wraps over to next line',
      html` <b2b-button size="50">Action</b2b-button>`,
    ],
  ],
};

export const smallSampleData = {
  columns: ['Column 1', 'Column 2', 'Column 3'],
  rows: [
    ['Name A', 'Content 1', html` <b2b-button size="50">Action</b2b-button>`],
    [
      'Name D',
      'Very long data text that wraps over to next line, Very long data text that wraps over to next line',
      html` <b2b-button size="50">Action</b2b-button>`,
    ],
  ],
};

export const longSampleData = {
  columns: [
    'Name',
    'Column 1',
    'Column 2',
    'Column 3',
    'Column 4',
    'Column 5',
    'Column 6',
    'Column 7',
  ],
  rows: [
    [
      'Name A',
      'Content 1',
      'Content 1',
      html` <b2b-button>Action</b2b-button>`,
      'Content 1',
      'Content 1',
      'Content 1',
      'Content 1',
    ],
    [
      'Name B',
      'Content 2',
      'Content 2',
      html` <b2b-button>Action</b2b-button>`,
      'Content 2',
      'Content 2',
      'Content 2',
      'Content 2',
    ],
    [
      'Name C',
      'Content 3',
      'Content 3',
      html` <b2b-button>Action</b2b-button>`,
      'Content 3',
      'Content 3',
      'Content 3',
      'Content 3',
    ],
    [
      'Name D',
      'Content 4',
      'Very, very, long, long data text that wraps over to next line',
      html` <b2b-button>Action</b2b-button>`,
      'Content 4',
      'Content 4',
      'Content 4',
      'Content 4',
    ],
  ],
};

export const userSampleData = {
  columns: [
    { id: 0, name: 'Balance' },
    { id: 1, name: 'Age' },
    { id: 2, name: 'Name' },
    { id: 3, name: 'Company' },
    { id: 4, name: 'Email' },
    { id: 5, name: 'Address' },
    { id: 6, name: 'Favorite Fruit' },
  ],
  rows: [
    [
      '$3,798.17',
      40,
      'Case Koch',
      'PORTICO',
      'casekoch@portico.com',
      '568 Brigham Street, Deltaville, Montana, 2774',
      'apple',
    ],
    [
      '$3,414.92',
      21,
      'Nolan Vega',
      'COMVEYOR',
      'nolanvega@comveyor.com',
      '757 Monroe Place, Vowinckel, Marshall Islands, 2888',
      'apple',
    ],
    [
      '$2,046.57',
      31,
      'Trujillo Clayton',
      'HAIRPORT',
      'trujilloclayton@hairport.com',
      '634 Losee Terrace, Elizaville, Idaho, 9442',
      'banana',
    ],
    [
      '$1,774.38',
      35,
      'Deidre Blankenship',
      'DAIDO',
      'deidreblankenship@daido.com',
      '515 Empire Boulevard, Nogal, Federated States Of Micronesia, 9670',
      'apple',
    ],
    [
      '$2,606.67',
      32,
      'Corinne Carroll',
      'CONFERIA',
      'corinnecarroll@conferia.com',
      '121 Bergen Avenue, Cumminsville, Delaware, 6623',
      'banana',
    ],
    [
      '$1,175.82',
      28,
      'Spears Espinoza',
      'PRISMATIC',
      'spearsespinoza@prismatic.com',
      '493 Batchelder Street, Barrelville, Utah, 7869',
      'apple',
    ],
    [
      '$3,017.62',
      27,
      'Lawanda Lott',
      'TINGLES',
      'lawandalott@tingles.com',
      '643 Diamond Street, Englevale, Virginia, 4744',
      'banana',
    ],
    [
      '$3,433.23',
      28,
      'Cross Collier',
      'HALAP',
      'crosscollier@halap.com',
      '673 Onderdonk Avenue, Lacomb, Louisiana, 1429',
      'apple',
    ],
    [
      '$2,332.88',
      23,
      'Tommie Moss',
      'SHADEASE',
      'tommiemoss@shadease.com',
      '151 Rutland Road, Corinne, Alaska, 1551',
      'apple',
    ],
  ],
};
