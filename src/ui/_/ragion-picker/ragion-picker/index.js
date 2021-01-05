/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable camelcase */
import provinces from './data/provices.json'
import allCitys from './data/citys.json'
import allTowns from './data/towns.json'

Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    headerText: {
      type: String,
      value: null
    },
    disabled: {
      type: Boolean,
      value: false
    },
    value: {
      type: Array,
      value: ['北京市', '北京市', '东城区']
    },
    customItem: {
      type: String,
      value: ''
    }
  },
  data: {
    provinces,
    ragion: {value: [], code: [], postcode: null}
  },
  attached() {
    const value = this.properties.value
    this.init(value)
  },
  methods: {
    init(value) {
      console.log('ragion-picker init')
      for (let p = 0; p < this.data.provinces.length; p++) {
        if (this.data.provinces[p].name === value[0]) {
          const i = [this.properties.customItem ? (p + 1) : p]
          this.setData({provinceIndexes: i})
          this.provinceChange(p)
          break
        }
      }
      for (let c = 0; c < this.data.citys.length; c++) {
        if (this.data.citys[c].name === value[1]) {
          const i = [this.properties.customItem ? (c + 1) : c]
          this.setData({cityIndexes: i})
          this.cityChange(c)
          break
        }
      }
      for (let t = 0; t < this.data.towns.length; t++) {
        if (this.data.towns[t].name === value[2]) {
          const i = [this.properties.customItem ? (t + 1) : t]
          this.setData({townIndexes: i})
          this.townChange(t)
          break
        }
      }
    },
    provinceChange(index) {
      console.log('ragion-picker provinceChange')
      if (index < 0) {
        this.data.ragion.value[0] = this.properties.customItem
        this.data.ragion.code = []
        this.setData({citys: [], cityIndexes: [0]})
        return
      }
      const province = this.data.provinces[index]
      const citys = allCitys[province.id]
      //
      this.data.ragion.value[0] = province.name
      this.data.ragion.code[0] = province.id
      //
      const i = this.properties.customItem ? 0 : 1
      this.setData({citys, cityIndexes: [i]})
    },
    cityChange(index) {
      console.log('ragion-picker cityChange')
      if (index < 0) {
        this.data.ragion.value[1] = this.properties.customItem
        switch (this.data.ragion.code.length) {
          case 0:
            break
          case 1:
          case 2:
          case 3:
            this.data.ragion.code = [this.data.ragion.code[0]]
            break
          default:
            break
        }
        this.setData({towns: [], townIndexes: [0]})
        return
      }
      const city = this.data.citys[index]
      const towns = allTowns[city.id]
      //
      this.data.ragion.value[1] = city.name
      this.data.ragion.code[1] = city.id
      //
      const i = this.properties.customItem ? 0 : 1
      this.setData({towns, townIndexes: [i]})
    },
    townChange(index) {
      console.log('ragion-picker townChange')
      if (index < 0) {
        this.data.ragion.value[2] = this.properties.customItem
        switch (this.data.ragion.code.length) {
          case 0:
            this.data.ragion.code = []
            break
          case 1:
            this.data.ragion.code = [this.data.ragion.code[0]]
            break
          case 2:
            this.data.ragion.code = [this.data.ragion.code[0], this.data.ragion.code[1]]
            break
          default:
            break
        }
        this.data.ragion.postcode = null
        return
      }
      const town = this.data.towns[index]
      //
      this.data.ragion.value[2] = town.name
      this.data.ragion.code[2] = town.id
      this.data.ragion.postcode = town.zipcode
    },
    ragion_show() {
      console.log('ragion-picker ragion_show')
      if (this.properties.disabled) {
        return
      }
      const value = this.data.ragion.value
      this.init(value)
      this.setData({show: true, provinceIndexes: this.data.provinceIndexes})
    },
    ragion_cancle(e) {
      console.log('ragion-picker ragion_cancle')
      this.setData({show: false})
      this.triggerEvent('Cancle', e.detail)
    },
    ragion_confirm(e) {
      console.log('ragion-picker ragion_confirm')
      this.setData({show: false})
      this.triggerEvent('Confirm', e.detail)
    },
    province_change(e) {
      console.log('ragion-picker province_change')
      const index = e.detail.value[0]
      this.data.provinceIndexes = [index]
      this.provinceChange(this.properties.customItem && index === 0 ? -1 : (this.properties.customItem ? (index - 1) : index))
      this.cityChange(this.properties.customItem ? -1 : 0)
      this.townChange(this.properties.customItem ? -1 : 0)
    },
    city_change(e) {
      console.log('ragion-picker city_change')
      const index = e.detail.value[0]
      this.data.cityIndexes = [index]
      this.cityChange(this.properties.customItem && index === 0 ? -1 : (this.properties.customItem ? (index - 1) : index))
      this.townChange(this.properties.customItem ? -1 : 0)
    },
    town_change(e) {
      console.log('ragion-picker town_change')
      const index = e.detail.value[0]
      this.data.townIndexes = [index]
      this.townChange(this.properties.customItem && index === 0 ? -1 : (this.properties.customItem ? (index - 1) : index))
    }
  },
})
