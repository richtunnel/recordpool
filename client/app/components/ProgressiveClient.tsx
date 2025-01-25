import React, { useState, useEffect, lazy, Suspense } from "react";

interface Components {
  children?: any;
}

const ProgressiveClient: React.FC<Components> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Enable client-side rendering after the component mounts
  }, []);


  if (!isClient) {
    return null; // Only render content on the client-side
  }

  return  <>{children}</>;
};

export default ProgressiveClient;
