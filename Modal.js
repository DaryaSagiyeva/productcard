class Modal {
  constructor(id) {
    this.id = id;
    this.modal = document.getElementById(id);
    this.overlay = document.querySelector(".overlay");
    this.closeButton = document.querySelector(".modal__close");
    this.listenClose();
  }

  open() {
    this.modal.classList.add("modal-showed");
    this.overlay.classList.add("overlay-showed");
  }

  close() {
    this.modal.classList.remove("modal-showed");
    this.overlay.classList.remove("overlay-showed");
  }
  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  listenClose() {
    this.closeButton.addEventListener("click", () => {
      this.close();
    });
  }
}

export default Modal;
