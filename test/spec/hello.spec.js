import Vue from 'vue'
import hello from '../../src/components/hello.vue'

describe('hello',() => {
    it('hello world',() => {
        let vm = new Vue(hello).$mount();
        expect(vm.title).toEqual('hello world')
    })
})