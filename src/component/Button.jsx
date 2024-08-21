import React from 'react' 
import { useDispatch } from 'react-redux';

function Button(props) {
  const {
    value,
    className,
    sliceMethod
  } = props;

  const dispatch = useDispatch()

  return (
    <div>
      <button
        className={`px-5 w-full sm:w-[127px] py-2 rounded mx-2 ${className}`}
        onClick={() => dispatch(sliceMethod())}>
        {value}
      </button>
    </div>
  )
}

export default Button
