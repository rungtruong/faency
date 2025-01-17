import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { VariantProps } from '../../stitches.config';
import { Badge, COLORS } from './Badge';
import { Flex } from '../Flex';
import { modifyVariantsForStory } from '../../utils/modifyVariantsForStory';
import { UnstyledLink } from '../Link';

type BadgeVariants = VariantProps<typeof Badge>;
type BadgeProps = BadgeVariants & {};

const BaseBadge = (props: BadgeProps): JSX.Element => <Badge {...props} />;
const BadgeForStory = modifyVariantsForStory<BadgeVariants, BadgeProps>(BaseBadge);

export default {
  title: 'Components/Badge',
  component: BadgeForStory,
  argTypes: {
    size: { control: 'inline-radio' },
    variant: { control: 'select' },
  },
} as ComponentMeta<typeof BadgeForStory>;

export const Colors: ComponentStory<typeof BadgeForStory> = (args) => (
  <Flex css={{ gap: '$3' }}>
    <Badge {...args}>Default</Badge>
    {COLORS.map((color) => (
      <Badge key={color} {...args} variant={color}>
        {color}
      </Badge>
    ))}
  </Flex>
);

Colors.args = {
  interactive: false,
  size: 'small',
  variant: 'gray',
};

export const AlphaBackground = Colors.bind({});

AlphaBackground.args = {
  alphaBg: true,
};

export const Small: ComponentStory<typeof BadgeForStory> = (args) => (
  <Badge {...args}>Small badge</Badge>
);

Small.args = {
  interactive: false,
  size: 'small',
  variant: 'blue',
};

export const Large: ComponentStory<typeof BadgeForStory> = (args) => (
  <Badge {...args}>Large badge</Badge>
);

Large.args = {
  interactive: false,
  size: 'large',
  variant: 'green',
};

export const Interactive: ComponentStory<typeof BadgeForStory> = (args) => (
  <Flex css={{ gap: '$3' }}>
    <Badge {...args}>Default</Badge>
    {COLORS.map((color) => (
      <Badge {...args} variant={color}>
        {color}
      </Badge>
    ))}
  </Flex>
);

Interactive.args = {
  interactive: true,
  size: 'small',
  variant: 'gray',
};

const Customize: ComponentStory<typeof BadgeForStory> = (args) => (
  <Badge css={{ c: '$hiContrast' }} {...args}>
    Customize
  </Badge>
);

export const BadgeLink: ComponentStory<typeof BadgeForStory> = (args) => (
  <Badge asChild interactive {...args}>
    <UnstyledLink href="https://traefik.io">Link</UnstyledLink>
  </Badge>
);
