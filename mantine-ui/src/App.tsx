// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { DoubleHeader } from "./components/DoubleHeader";
import { FooterCentered } from "./components/FooterCentered";
import { TableSelection } from "./components/TableSelection";

export default function App() {
  return (
    <MantineProvider>
      <DoubleHeader />
      <TableSelection />
      <TableSelection />
      <TableSelection />
      <FooterCentered />
    </MantineProvider>
  );
}
