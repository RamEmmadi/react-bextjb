import React, { useRef, useEffect } from 'react';

const useEffectSkipFirstRender = (callback) => {
  const ref = useRef(0);
  React.useEffect(() => {
    if (ref.current === 0) {
      callback();
      ref.current++;
    }
  }, []);
  return;
};

export default useEffectSkipFirstRender;
