import type { Preview } from "@storybook/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "../src/app/globals.css";

const createClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60_000
      }
    }
  });

const QueryDecorator: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [client] = React.useState(createClient);

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story) => (
      <QueryDecorator>
        <Story />
      </QueryDecorator>
    )
  ]
};

export default preview;
