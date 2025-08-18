import clx from 'classnames';
import styles from './index.module.scss';

const ButtonTwo = ({ active, className, ...rest }) => {
  return (
    <button
      // className={`button-one ${className ?? ''} ${active ? 'active' : ''}`}
      className={clx(styles.buttonTwo, className, {
        [styles.active]: active,
      })}
      {...rest}
    >
      <span>Click me</span>
    </button>
  );
};

export default ButtonTwo;
