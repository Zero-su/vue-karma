import Vue from 'vue'
import test from '../../src/components/test.vue'

describe('test', () => {
    it('hello test', () => {
        let vm = new Vue(test).$mount();
        expect(vm.data).toEqual('555')
    })
})