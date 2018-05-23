import Vue from 'vue'
import Cantest from '../../src/components/Cantest.vue'

//挂载元素并返回已渲染的文本的工具函数
function getRenderedText(Component,propsData){
    const Constructor = Vue.extend(Component);
    const vm = new Constructor({propsData: propsData}).$mount();
    return vm.$el.textContent;
}

describe('Cantest',() => {
    it('props == hello',() => {
        expect(getRenderedText(Cantest, { msg: 'hello' })).toEqual('hello')
        expect(getRenderedText(Cantest, { msg: 'bye' })).toEqual('bye')
    })

    it('异步断言更新',() => {
        const vm = new Vue(Cantest).$mount();
        vm.msg = 'foo';

        Vue.nextTick(()=>{
            expect(vm.$el.textContent).toEqual('foo')
        })
    })
})