import html2pdf from "html2pdf.js";
import {computed, reactive} from "vue";
const state = reactive({
    converted: null
})
export function useHtmlToPdf () {
    function convert(document) {

        const res = html2pdf().from(document);
        console.warn('convert result', res)
        state.converted = res
        return res
    }

    const converted = computed(() => state.converted)
    return {
        convert,
        converted
    }
}