import { ComponentStory, ComponentMeta } from "@storybook/react";
import MainContainer from "./Page-app-container";
import { IProps, MetricUi } from "../metricfun.types";
import { metricsState, metricProps } from "./Fixtures";
export default {
  title: "Metric-fun/Main-container",
  component: MainContainer,
  argTypes: {
    dispatchMsg: { action: "msg" },
  },
} as ComponentMeta<typeof MainContainer>;
//
const Template: ComponentStory<typeof MainContainer> = (args) => (
  <MainContainer {...args} />
);

const props: Omit<IProps, "dispatchMsg" | "dispatchMsg"> = {
  ...metricsState,
  isDark: true,
};

export const Login = Template.bind({});
Login.args = { ...props };

export const UserLogged = Template.bind({});
UserLogged.args = {
  ...props,
  isLogged: true,
  userName: "Alice",
  metrics: [...Array(4)].fill({ ...metricProps }).map((metricProps) => ({
    ...metricProps,
    isEditable: false,
    name: "Siouxie",
    chartTypeSelected: "Area",
  })),
};