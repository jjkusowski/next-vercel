import InPageMenuUI from "./InPageMenuUI";
import { InPageMenuUIComponent } from "./interfaces";

export default {
  component: InPageMenuUI,
  title: "InPageMenu",
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#F8F8F8",
        },
      ],
    },
  },
};

const Template: InPageMenuUIComponent = (args) => <InPageMenuUI {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  primary: {
    text: [
      {
        type: "heading2",
        text: "What's on this page",
        spans: Array(0),
        label: "w-3/4 leading-tight md:w-full md:col-span-1 md:p-6",
      },
    ],
  },
  items: [
    {
      target_id: "test1",
      text: [
        {
          type: "paragraph",
          text: "Test Item 1",
          spans: [],
        },
      ],
    },
    {
      target_id: "test2",
      text: [
        {
          type: "paragraph",
          text: "Test Item 2",
          spans: [],
        },
      ],
    },
    {
      target_id: "test3",
      text: [
        {
          type: "paragraph",
          text: "Test Item 3",
          spans: [],
        },
      ],
    },
  ],
};
