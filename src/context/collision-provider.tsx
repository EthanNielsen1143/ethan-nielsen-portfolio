import {
  createContext,
  LegacyRef,
  ReactNode,
  useCallback,
  //   useEffect,
  useRef,
} from "react";

export const CollisionContext = createContext<{
  refCallback: LegacyRef<HTMLDivElement>;
}>({
  // @ts-expect-error this is a placeholder function.
  // eslint-disable-next-line
  refCallback: (node: HTMLDivElement) => {},
});

const CollisionProvider = ({ children }: { children: ReactNode }) => {
  const collidableElements = useRef<HTMLDivElement[]>([]);

  const refCallback = useCallback((node: HTMLDivElement) => {
    collidableElements.current.push(node);
  }, []);

  return (
    <CollisionContext.Provider value={{ refCallback }}>
      {children}
    </CollisionContext.Provider>
  );
};

export default CollisionProvider;
