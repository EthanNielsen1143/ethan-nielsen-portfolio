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
  spaceShipMovedCallback: any;
}>(null!);

const CollisionProvider = ({ children }: { children: ReactNode }) => {
  const collidableElements = useRef<HTMLDivElement[]>([]);

  const refCallback = useCallback((node: HTMLDivElement) => {
    collidableElements.current.push(node);
    console.log(collidableElements);
  }, []);

  const spaceShipMovedCallback = () => {
    // console.log("Space ship freaking moved");
  };

  return (
    <CollisionContext.Provider value={{ refCallback, spaceShipMovedCallback }}>
      {children}
    </CollisionContext.Provider>
  );
};

export default CollisionProvider;
