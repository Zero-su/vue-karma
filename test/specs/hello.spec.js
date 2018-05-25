import Vue from 'vue'
import hello from '@/components/hello.vue'

describe('hello', () => {
    it('hello world', () => {
        var vm = new Vue(hello).$mount();
        expect(vm.title).to.equal('hello world')
    })
})