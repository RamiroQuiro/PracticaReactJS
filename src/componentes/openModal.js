import React, { Suspense, lazy } from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";


export default function ()  {
  const Modal = lazy(() => import('./Modal.js'));
  const modalDiv = document.createElement('div');
  modalDiv.id = "modal";
  document.body.appendChild(modalDiv);

  const root = createRoot(modalDiv);
  root.render(
      <Modal ></Modal>
      )
};
