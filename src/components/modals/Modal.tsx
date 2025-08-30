import { Component, JSX, createEffect } from "solid-js";
import Button from "../base/Button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
}

const Modal: Component<ModalProps> = (props) => {
  let dialogRef: HTMLDialogElement | undefined;

  // Function ref ensures each modal gets its own ref
  const setDialogRef = (el: HTMLDialogElement) => {
    dialogRef = el;
  };

  // Use createEffect to react to prop changes
  createEffect(() => {
    if (!dialogRef) return;
    if (props.open && !dialogRef.open) {
      dialogRef.showModal();
    } else if (!props.open && dialogRef.open) {
      dialogRef.close();
    }
  });

  // Close handler for dialog
  const handleClose = () => {
    props.onClose();
    if (dialogRef && dialogRef.open) dialogRef.close();
  };

  return (
    <dialog
      ref={setDialogRef}
      class="bg-background text-foreground h-screen max-h-screen w-screen max-w-screen p-0"
      onClose={props.onClose}
    >
      <div class="bg-primary-transparent flex h-full w-full items-center justify-center overflow-hidden p-2 sm:p-4 lg:p-8">
        <div class="absolute top-4 right-4 sm:top-8 sm:right-8 lg:top-16 lg:right-16">
          <Button onClick={handleClose} icon="CloseIcon" isIconOnly />
        </div>
        <div class="flex h-full w-full items-center justify-center overflow-hidden rounded-xl">
          <div class="bg-background h-full w-full overflow-y-auto p-2 sm:p-4 lg:p-8">
            {props.children}
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
