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
  checkCollisions: (spaceshipRect: DOMRect) => void;
}>(null!);

const CollisionProvider = ({ children }: { children: ReactNode }) => {
  const collidableElements = useRef<HTMLDivElement[]>([]);

  const refCallback = useCallback((node: HTMLDivElement) => {
    collidableElements.current.push(node);
    console.log(collidableElements);
  }, []);

  const checkCollisions = useCallback((spaceshipRect: DOMRect) => {});

  return (
    <CollisionContext.Provider value={{ refCallback, checkCollisions }}>
      {children}
    </CollisionContext.Provider>
  );
};

export default CollisionProvider;
