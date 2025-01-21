"use client";

import { ChakraProvider, SystemContext } from "@chakra-ui/react";

import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

interface ProviderProps extends ColorModeProviderProps {
  system: SystemContext;
}

export function Provider({ system, ...props }: ProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
