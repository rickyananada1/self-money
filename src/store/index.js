import { reactive } from 'vue';

export const store = reactive({
  isInited: false,
  setInited(b) {
    this.isInited = b;
  },
  menus: [],
  menuInput: [],
  isError: false,
  isTimeOut: false,
  isLoading: false,
  showMessage: false,
  message: "",
  setTimeOut(b) {
    this.isTimeOut = b;
  },
  setError(b) {
    this.isError = b;
  },
  setLoading(b) {
    this.isLoading = b;
  },
  setMessage(m) {
    this.message = m;
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  },
  setMenus(m) {
    this.menus = m;
  },
  pushRouter(i, p) {
    this.menus[i].path = p;
  },
  addMenu(m) {
    this.menus.push(m);
  },
  pushInputRouter(m) {
    this.menuInput.push(m)
  },
  addMenu(m) {
    this.menus.push(m);
  },
  editAble: false,
  setEditAble(b) {
    this.editAble = b;
  },
  addAble: false,
  setAddAble(b) {
    this.addAble = b;
  },
  removeAble: false,
  setRemoveAble(b) {
    this.removeAble = b;
  },
})
