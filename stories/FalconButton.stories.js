import { hbs } from 'ember-cli-htmlbars';
import { withDesign } from 'storybook-addon-designs';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Falcon Button',
  argTypes: {
    buttonText: { control: 'text' },
    id: { control: 'text'},
    type: {
      options: ['primary', 'secondary', 'call-to-action'],
      control: { type: 'radio' }
    },
    disabled: { control: 'boolean' },
  },
  args: {
    buttonText: 'Click Me',
    id: 'submit-form',
    type: 'primary',
    disabled: false
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/50g3QfeokQIFAkN1zFgVDv/Nucleus-UI%3A-Mobile-App-UI-Component-Library-%E2%80%93-LITE-(Community)?type=design&node-id=44-341&mode=design&t=6QRSN7yy73Y2n5jE-4',
      accessToken: 'figd_k2IdMqW81WI8xHz1gZFCvW9zTapIrmUchwSmPD8T'
    }
  }
}

export const FalconButton = (args) => ({
  template: hbs`
    <FalconButton
      @id={{this.id}}
      class={{this.type}}
      @disabled={{this.disabled}}>
      {{this.buttonText}}
    </FalconButton>
  `,
  context: args
})

