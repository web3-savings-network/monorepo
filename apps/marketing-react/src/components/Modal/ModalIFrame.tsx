import React, { MouseEventHandler, useEffect, useState } from "react";
import classnames from "classnames";
// @ts-ignore
import { useSpring, animated } from "react-spring";

interface IModalIFrame {
  children: any;
  className: string;
  hideModal: Function | MouseEventHandler;
  position: string;
}

export const ModalIFrame = ({
  children,
  className,
  hideModal,
}: IModalIFrame) => {
  const [show, setShow] = useState(false);

  // Animate Background
  const animateBackground = useSpring({
    from: {
      background: "#000",
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
    from: { opacity: 0, transform: "translate3d(250px, 0px, 0px)" },
    to: { opacity: 1, transform: "translate3d(0px, 0px, 0px)" },
    enter: { opacity: 1, transform: "translate3d(0px, 0px, 0px)" },
    leave: { opacity: 0, transform: "translate3d(250px, 0px, 0px)" },
    reverse: show,
    delay: 100,
  });

  // Style Panel
  const stylePanel = classnames(
    "fixed top-20 bottom-20 left-20 right-20  w-100 w-5/4 z-100",
    className
  );

  const handleCloseModal = (e:any) => {
    setShow(true);
    setTimeout(() => {
      hideModal(e);
    }, 400);
  };

  useEffect(() => {}, []);

  return (
    <>
      <animated.div
        onClick={handleCloseModal}
        className={"fixed top-0 bottom-0 left-0 right-0 z-10"}
        style={{ ...animateBackground, zIndex: 999 }}
      />
      <animated.div
        className={stylePanel}
        style={{ ...animatePanel, zIndex: 1000 }}
      >
        <div className="overflow-auto h-full">{children}</div>
      </animated.div>
    </>
  );
};

ModalIFrame.defaultProps = {
  className: "",
  position: "right",
};

export default ModalIFrame;
