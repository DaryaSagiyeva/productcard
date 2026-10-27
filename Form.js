class Form {
  constructor(id) {
    this.id = id;
    this.form = document.getElementById(id);
  }

  reset() {
    this.form.reset();
  }

  validate() {
    return this.form.checkValidity();
  }

  getValues() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData);
  }
}
export default Form;
