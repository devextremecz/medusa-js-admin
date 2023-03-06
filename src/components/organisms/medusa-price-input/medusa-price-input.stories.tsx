import React from 'react';

import { ComponentMeta } from '@storybook/react';

import MedusaPriceInput from '.';
import { currencies } from '../../../utils/currencies';

function C(args) {
  return <MedusaPriceInput {...args} currency={currencies[args.currency]} onChange={console.log} />;
}

export default {
  title: 'Organisms/MedusaPriceInput',
  component: MedusaPriceInput,
  argTypes: {
    amount: {
      description:
        'Amount as received from the medusa server. Try both non-divisible and divisible currencies',
    },
    currency: {
      description: 'desc',
      control: {
        type: 'select',
      },
      options: Object.values(currencies).map((c) => c.code),
    },
  },
} as ComponentMeta<typeof MedusaPriceInput>;

const Template = (args) => <C {...args} />;

export const Default = Template.bind({});
Default.args = {
  currency: 'USD',
  amount: 1999,
};
