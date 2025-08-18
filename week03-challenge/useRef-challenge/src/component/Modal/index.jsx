import { useEffect, useRef, useState } from 'react';
export default () => {
  // const [open, setOpen] = useState(false);
  const ref = useRef();
  // useEffect(() => {
  //   // const modal = document.querySelector('dialog');
  //   // console.log('sel', modal);
  //   console.dir(ref.current);
  // }, []);

  return (
    <>
      <button onClick={() => ref.current.showModal()}>Open Modal</button>
      <dialog
        ref={ref}
        onClose={() => {
          console.log(ref.current.returnValue);
        }}
      >
        <h2>
          My Modal <button onClick={() => ref.current.close()}>x</button>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, fugiat!
        </p>
        <form method='dialog'>
          <button value='cancel'>Cancel</button>
          <button value='default'>OK</button>
        </form>
      </dialog>
    </>
  );
};

