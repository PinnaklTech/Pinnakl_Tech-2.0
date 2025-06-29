import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface UseLoadingOptions {
  initialLoadDuration?: number;
  routeTransitionDuration?: number;
  minLoadingTime?: number;
}

export const useLoading = (options: UseLoadingOptions = {}) => {
  const {
    initialLoadDuration = 1200,
    routeTransitionDuration = 800,
    minLoadingTime = 500
  } = options;

  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isRouteLoading, setIsRouteLoading] = useState(false);
  const [hasInitiallyLoaded, setHasInitiallyLoaded] = useState(false);
  
  const location = useLocation();

  // Handle initial page load
  useEffect(() => {
    const handleInitialLoad = async () => {
      const startTime = Date.now();

      // Wait for essential assets to load
      await Promise.all([
        // Wait for fonts to load
        document.fonts.ready,
        // Wait for critical images to load
        ...Array.from(document.images).map(img => {
          if (img.complete) return Promise.resolve();
          return new Promise(resolve => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      ]);

      // Ensure minimum loading time for smooth UX
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

      setTimeout(() => {
        setIsInitialLoading(false);
        setHasInitiallyLoaded(true);
      }, remainingTime);
    };

    if (!hasInitiallyLoaded) {
      // Add a maximum timeout for initial loading
      const maxTimeout = setTimeout(() => {
        setIsInitialLoading(false);
        setHasInitiallyLoaded(true);
      }, initialLoadDuration);

      handleInitialLoad();

      return () => clearTimeout(maxTimeout);
    }
  }, [hasInitiallyLoaded, initialLoadDuration, minLoadingTime]);

  // Handle route transitions
  useEffect(() => {
    if (!hasInitiallyLoaded) return;

    setIsRouteLoading(true);

    const timer = setTimeout(() => {
      setIsRouteLoading(false);
    }, routeTransitionDuration);

    return () => clearTimeout(timer);
  }, [location.pathname, hasInitiallyLoaded, routeTransitionDuration]);

  const isLoading = isInitialLoading || isRouteLoading;

  return {
    isLoading,
    isInitialLoading,
    isRouteLoading,
    hasInitiallyLoaded
  };
};