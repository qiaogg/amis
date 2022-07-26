import React = require('react');
import {render} from '@testing-library/react';
import '../../src';
import {render as amisRender} from '../../src';
import {makeEnv} from '../helper';

test('Renderer:steps', () => {
  const {container} = render(
    amisRender(
      {
        type: 'page',
        body: [
          {
            type: 'steps',
            value: 1,
            steps: [
              {
                title: 'Firs3',
                subTitle: 'this is subTitle',
                description: 'this is description'
              },
              {
                title: 'Second'
              },
              {
                title: 'Last'
              }
            ]
          }
        ]
      },
      {},
      makeEnv({})
    )
  );

  expect(container).toMatchSnapshot();
});
