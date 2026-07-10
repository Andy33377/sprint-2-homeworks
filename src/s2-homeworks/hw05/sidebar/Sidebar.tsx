import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import s from "./Sidebar.module.css";
import { PATH } from "../Pages";
import closeIcon from "./closeOutline.svg";

type PropsType = {
  open: boolean;
  handleClose: () => void;
};

export const Sidebar: FC<PropsType> = ({ open, handleClose }) => {
  const sidebarClass = s.sidebar + (open ? " " + s.open : "");

  const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? s.active : "";

  return (
    <>
      {open && <div className={s.background} onClick={handleClose} />}

      <aside className={sidebarClass}>
        <button className={s.close} onClick={handleClose} type="button">
          <img src={closeIcon} alt="close sidebar" id="hw5-menu-close" />
        </button>

        <nav id="hw5-menu" className={s.nav}>
          <NavLink
            id="hw5-pre-junior-link"
            to={PATH.PRE_JUNIOR}
            onClick={handleClose}
            className={getLinkClassName}
          >
            Pre-junior
          </NavLink>

          <NavLink
            id="hw5-junior-link"
            to={PATH.JUNIOR}
            onClick={handleClose}
            className={getLinkClassName}
          >
            Junior
          </NavLink>

          <NavLink
            id="hw5-junior-plus-link"
            to={PATH.JUNIOR_PLUS}
            onClick={handleClose}
            className={getLinkClassName}
          >
            Junior Plus
          </NavLink>
        </nav>
      </aside>
    </>
  );
};
