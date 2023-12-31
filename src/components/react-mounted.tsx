import { useEffect, useState } from "react";

// More info https://www.joshwcomeau.com/react/the-perils-of-rehydration/
export default function ReactMounted({ children, ...delegated }: any) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
}
