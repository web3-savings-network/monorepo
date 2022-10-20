import { useState } from 'react';

import classnames from 'classnames';
import { useSpring, animated } from 'react-spring';

interface IModalPanel {
  children: any;
  className: string;
  hideModal: Function;
  position: string;
}

export const ModalPanel = ({ children, className, hideModal, position = 'right' }: IModalPanel) => {
  const [show, setShow] = useState(false);

  // Animate Background
  const animateBackground = useSpring({
    from: {
      background: '#000',
      opacity: 0,
    },
    to: {
      opacity: 0.25,
    },
    reverse: show,
    delay: 0,
  });

  // Animate Panel
  const animatePanel = useSpring({
    from: { opacity: 0, transform: 'translate3d(250px, 0px, 0px)' },
    to: { opacity: 1, transform: 'translate3d(0px, 0px, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(0px, 0px, 0px)' },
    leave: { opacity: 0, transform: 'translate3d(250px, 0px, 0px)' },
    reverse: show,
    delay: 100,
  });

  // Style Panel
  const stylePanel = classnames('fixed top-0 bottom-0 bg-white p-10 w-100 w-1/4 z-100', className, {
    'right-0': position === 'right',
    'left-0': position === 'left',
  });

  const handleCloseModal = () => {
    setShow(true);
    setTimeout(() => {
      hideModal();
    }, 400);
  };

  return (
    <>
      <animated.div
        onClick={handleCloseModal}
        className={'fixed top-0 bottom-0 left-0 right-0 z-10'}
        style={{ ...animateBackground, zIndex: 999 }}
      />
      <animated.div className={stylePanel} style={{ ...animatePanel, zIndex: 1000 }}>
        <div>{children}</div>
      </animated.div>
    </>
  );
};

ModalPanel.defaultProps = {
  className: '',
  position: 'right',
};

export default ModalPanel;
