import clx from 'classnames'

const ButtonOne = ({ active, className, ...rest }) => {
  return (
    <button 
    // className={`button-one ${className ?? ''} ${active ? 'active' : ''}`}
    className={clx('button-one', className, {
      'active': active,
    })}
      {...rest}>
      <span>Click me</span>
    </button>
  );
};

export default ButtonOne;
