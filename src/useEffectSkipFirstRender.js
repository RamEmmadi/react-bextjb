import React, { useRef, useEffect } from 'react';

export default useEffectSkipFirstRender = (callback) => {
  const ref = useRef('INITIAL_RENDER');

  useEffect(() => {
    if (ref === 'INITIAL_RENDER' && callback) {
      callback();
    }
  }, []);
};
