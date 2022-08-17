import type { NextApiRequest, NextApiResponse } from 'next';

const metadata = [
  {
    key: 1,
  	attibutes: [
  	  {
  	  	trait_type: 'Shape',
  	  	value: 'Triangle'
  	  },
  	  {
  	  	trait_type: 'Mood',
  	  	value: 'Bored'
  	  }
  	],
  	description: 'An bored triangle.',
  	image: 'https://i.imgur.com/jbqceVX.jpeg',
  	name: 'Bored Triangle'
  },
  {
    key: 2,
  	attibutes: [
  	  {
  	  	trait_type: 'Shape',
  	  	value: 'Rectangle'
  	  },
  	  {
  	  	trait_type: 'Mood',
  	  	value: 'Bored'
  	  }
  	],
  	description: 'An bored rectangle.',
  	image: 'https://i.imgur.com/Q0THwAr.jpeg',
  	name: 'Bored Rectangle'
  },
  {
    key: 3,
  	attibutes: [
  	  {
  	  	trait_type: 'Shape',
  	  	value: 'Circle'
  	  },
  	  {
  	  	trait_type: 'Mood',
  	  	value: 'Bored'
  	  }
  	],
  	description: 'An bored circle.',
  	image: 'https://i.imgur.com/byExR3k.jpeg',
  	name: 'Bored Circle'
  }
];

const defaultResponse = {
    key: 3,
    attibutes: [
      {
        trait_type: 'Shape',
        value: 'Circle'
      },
      {
        trait_type: 'Mood',
        value: 'Bored'
      }
    ],
    description: 'Sherk Mexicano',
    image: 'https://${HOST}/sherk-buchon.jpeg',
    name: 'El Sherk'
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const item = metadata.find((item) => +req.query?.id === item.key);
  const hostname = req?.headers?.host || '';
  res.status(200).json(item || JSON.parse(JSON.stringify(defaultResponse).replace('${HOST}', hostname)));
}
