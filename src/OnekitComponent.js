/* eslint-disable camelcase */
import STRING from 'oneutil/STRING'
import wxs_behavior from './behavior/wxs_behavior'
import wx from './wx'

export default function OnekitComponent(object) {
  const properties = {}
  const swan_object = {
    behaviors: [wxs_behavior],
    data() {
      ''
    },
    onInit(query) {
      let created
      if (object.lifetimes && object.lifetimes.created) {
        created = object.lifetimes.created
      } else if (object.created) {
        created = object.created
      } else {
        created = function () { }
      }
      created.call(this, query)
    },
    attached() {
      for (const k of Object.keys(this.props)) {
        const v = this.props[k]
        properties[k] = v
        this.data[k] = v
      }
      let attached
      if (object.lifetimes && object.lifetimes.attached) {
        attached = object.lifetimes.attached
      } else if (object.attached) {
        attached = object.attached
      } else {
        attached = function () { }
      }
      attached.call(this)
      // //////
      let ready
      if (object.lifetimes && object.lifetimes.ready) {
        ready = object.lifetimes.ready
      } else if (object.ready) {
        ready = object.ready
      } else {
        ready = function () { }
      }
      ready.call(this)
    },
    didUnmount() {
      let detached
      if (object.lifetimes && object.lifetimes.detached) {
        detached = object.lifetimes.detached
      } else if (object.detached) {
        detached = object.detached
      } else {
        detached = function () { }
      }
      detached.call(this)
    },
    methods: {
      get properties() {
        return properties
      },

    }
  }
  if (object) {
    if (!object.methods) { object.methods = {} }
    object.methods.triggerEvent = function (name, data) {
      const funcName = `on${STRING.firstUpper(name)}`
      if (this.props[funcName]) {
        this.props[funcName](data)
      }
    }
    object.methods.createSelectorQuery = wx.createSelectorQuery
  }
  for (const key of Object.keys(object)) {
    const value = object[key]
    if (!value) {
      continue
    }
    switch (key) {
      case 'properties':
        swan_object.props = {}
        for (const k of Object.keys(value)) {
          const p = value[k]
          const v = (p && p.value ? p.value : null)
          swan_object.props[k] = v
          properties[k] = v
        }
        break
      case 'methods':
        for (const k of Object.keys(value)) {
          swan_object.methods[k] = value[k]
        }
        break
      case 'data':
        for (const k of Object.keys(value)) {
          swan_object.data[k] = value[k]
        }
        break
      case 'behaviors':
        swan_object.behaviors = value
        break
      default:
        swan_object[key] = value
        break
    }
  }
  return Component(swan_object)
}
