import {computed, defineAsyncComponent, h, reactive, render} from "vue";

const state = reactive({
    isShow: false
})

const dialogElement = computed(() => defineAsyncComponent(() =>
    import('@/components/UI/DialogPopup.vue'))
)

export function useDialog() {
    const isShow = computed(() => {
        return state.isShow
    })

    function setIsShow(val) {
        state.isShow = val
    }

    async function createDialog({element = dialogElement.value, title}) {
        return new Promise((resolve => {
            setIsShow(true)

            render(h(element, {
                onOk: () =>     resolve(true),
                onCancel: () => resolve(false),
                title
            }), document.body)

        })).finally(() => setIsShow(false))
    }

    return {
        isShow,
        setIsShow,
        createDialog
    }
}