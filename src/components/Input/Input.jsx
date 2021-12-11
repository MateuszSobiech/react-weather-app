import React from 'react';
import { changeInput } from 'store';
import { useDispatch, useSelector } from 'react-redux';

const Input = () => {
  const ref = React.useRef();
  const inputValue = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeInput(e.target.value));
  };

  React.useEffect(() => {
    ref.current.focus();
  }, []);

  return <input ref={ref} type="text" value={inputValue} onChange={handleChange} />;
};

export default Input;
