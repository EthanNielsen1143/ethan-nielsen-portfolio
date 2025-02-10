import { createContext, ReactNode, useCallback, useRef } from "react";

export const CollisionContext = createContext<{
  collidableElementsCallback: (elementObject: {
    element: HTMLDivElement | null;
    collisionCallback: () => void;
    collisionEndCallback?: () => void;
  }) => void;
  spaceShipMovedCallback: () => void;
}>(null!);

const CollisionProvider = ({ children }: { children: ReactNode }) => {
  const collidableElements = useRef<
    {
      element: HTMLDivElement | null;
      collisionCallback: () => void;
      collisionEndCallback?: () => void;
    }[]
  >([]);

  const collidableElementsCallback = useCallback(
    (elementObject: {
      element: HTMLDivElement | null;
      collisionCallback: () => void;
      collisionEndCallback?: () => void;
    }) => {
      if (!elementObject.element) return;

      const isAlreadyRegistered = collidableElements.current.some(
        (e) => e.element === elementObject.element
      );

      if (!isAlreadyRegistered) {
        collidableElements.current.push(elementObject);
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
            console.log("Collision STARTED with:", collidableElement);
            activeCollisions.add(collidableElement);
            collidables[i].collisionCallback();
          }
        } else {
          if (activeCollisions.has(collidableElement)) {
            console.log("Collision ENDED with:", collidableElement);
            activeCollisions.delete(collidableElement);

            collidables[i].collisionEndCallback?.();
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
