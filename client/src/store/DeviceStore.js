import {makeAutoObservable} from "mobx";

export default class DeviceStore {

  constructor() {
    this._types = [
      {id: 1, name: 'Холодильник'},
      {id: 2, name: 'Смартфон'}
    ]
    this._brands = [
      {id: 1, name: 'Samsung'},
      {id: 2, name: 'Apple'}
    ]
    this._devices = [
      {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.router-switch.com%2Fiphone-12-pro.html&psig=AOvVaw3nok4vQArMshQ7BeBKbNyy&ust=1642442299595000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjWvMLstvUCFQAAAAAdAAAAABAD'},
      {id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.router-switch.com%2Fiphone-12-pro.html&psig=AOvVaw3nok4vQArMshQ7BeBKbNyy&ust=1642442299595000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjWvMLstvUCFQAAAAAdAAAAABAD'},
      {id: 3, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.router-switch.com%2Fiphone-12-pro.html&psig=AOvVaw3nok4vQArMshQ7BeBKbNyy&ust=1642442299595000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjWvMLstvUCFQAAAAAdAAAAABAD'},
      {id: 4, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.router-switch.com%2Fiphone-12-pro.html&psig=AOvVaw3nok4vQArMshQ7BeBKbNyy&ust=1642442299595000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjWvMLstvUCFQAAAAAdAAAAABAD'},
    ]
    this._selectedType = {}
    this._selectedBrand = {}
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands
  }

  setDevice(device) {
    this._devices = device
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }

  get devices() {
    return this._devices
  }

  get selectedType() {
    return this._selectedType
  }

  get selectedBrand() {
    return this._selectedBrand
  }
}