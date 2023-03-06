import * as React from 'react';

import { v4 as uuidv4 } from 'uuid';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import EditDenominationsModal from '.';
import Button from '../../fundamentals/button';

export default {
  title: 'Organisms/EditDenominationModal',
  component: EditDenominationsModal,
} as ComponentMeta<typeof EditDenominationsModal>;

const Template: ComponentStory<typeof EditDenominationsModal> = (args) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="primary" size="small">
        Edit denominations
      </Button>
      {isOpen && <EditDenominationsModal {...args} handleClose={() => setOpen(false)} />}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  denominations: [],
  onSubmit: console.log,
  currencyCodes: ['USD', 'EUR', 'GBP', 'DKK', 'NOK', 'SEK'],
};
