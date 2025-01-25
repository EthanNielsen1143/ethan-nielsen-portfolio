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
  const collidableElements = useRef<
    {
      element: HTMLDivElement;
      collisionCallback: () => void;
    }[]
  >([]);

  const refCallback = useCallback((node: HTMLDivElement) => {
    collidableElements.current.push(node);
  }, []);

  const spaceShipMovedCallback = () => {
    const spaceShip = collidableElements.current.find((element) => {
      return element.id == "spaceShip";
    });

    if (!spaceShip) return;
    const spaceShipIndex = collidableElements.current.indexOf(spaceShip);
    const collidables = [...collidableElements.current];
    collidables.splice(spaceShipIndex, 1);

    for (let i = 0; i < collidables.length; i++) {
      const spaceshipRect = spaceShip.getBoundingClientRect();
      const collidableRect = collidables[i].getBoundingClientRect();

      // console.log(spaceshipRect, collidableRect);

      const isColliding =
        spaceshipRect.left < collidableRect.right &&
        spaceshipRect.right > collidableRect.left &&
        spaceshipRect.top < collidableRect.bottom &&
        spaceshipRect.bottom > collidableRect.top;

      if (isColliding) {
        console.log("we collilding");
      }
    }
  };

  return (
    <CollisionContext.Provider value={{ refCallback, spaceShipMovedCallback }}>
      {children}
    </CollisionContext.Provider>
  );
};

export default CollisionProvider;
