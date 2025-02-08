import {
  createContext,
  LegacyRef,
  ReactNode,
  useCallback,
  //   useEffect,
  useRef,
} from "react";

export const CollisionContext = createContext<{
  collidableElementsCallback: (elementObject: {
    element: HTMLDivElement | null;
    collisionCallback: () => void;
  }) => void;
  spaceShipMovedCallback: any;
}>(null!);

const CollisionProvider = ({ children }: { children: ReactNode }) => {
  const collidableElements = useRef<
    {
      element: HTMLDivElement | null;
      collisionCallback: () => void;
    }[]
  >([]);

  const collidableElementsCallback = useCallback(
    (elementObject: {
      element: HTMLDivElement | null;
      collisionCallback: () => void;
    }) => {
      if (!elementObject.element) return;
      const isAlreadyRegistered = collidableElements.current.some(
        (e) => e.element === elementObject.element
      );

      if (!isAlreadyRegistered) {
        collidableElements.current.push(elementObject);
      } else {
        console.warn("Element is already registered:", elementObject.element);
      }
    },
    []
  );

  const activeCollisions = new Set<HTMLDivElement>();

  const spaceShipMovedCallback = () => {
    const spaceShip = collidableElements.current.find(
      (element) => element?.element?.id === "spaceShip"
    );

    if (!spaceShip?.element) return;

    const collidables = collidableElements.current.filter(
      (element) => element.element?.id !== "spaceShip"
    );

    for (let i = 0; i < collidables.length; i++) {
      const spaceshipRect = spaceShip.element.getBoundingClientRect();
      const collidableRect = collidables[i].element?.getBoundingClientRect();
      if (!collidableRect) continue;

      const isColliding =
        spaceshipRect.left < collidableRect.right &&
        spaceshipRect.right > collidableRect.left &&
        spaceshipRect.top < collidableRect.bottom &&
        spaceshipRect.bottom > collidableRect.top;

      const collidableElement = collidables[i].element;

      if (collidableElement) {
        if (isColliding) {
          if (!activeCollisions.has(collidableElement)) {
            // First time colliding with this object
            console.log("Collision STARTED with:", collidableElement);
            activeCollisions.add(collidableElement);
            collidables[i].collisionCallback(); // Run callback once
          }
        } else {
          if (activeCollisions.has(collidableElement)) {
            // Object was colliding, but now it's not
            console.log("Collision ENDED with:", collidableElement);
            activeCollisions.delete(collidableElement);
          }
        }
      }
    }
  };

  return (
    <CollisionContext.Provider
      value={{ collidableElementsCallback, spaceShipMovedCallback }}
    >
      {children}
    </CollisionContext.Provider>
  );
};

export default CollisionProvider;
