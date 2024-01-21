import {computed, reactive, watch} from "vue";
import sectionTypes from "@/helpers/sectionTypes.js";
import {debounce} from "@/helpers/index.js";

const state = reactive({
    form: {
        title: '',
        description: '',
        image: '',
        sections: [
            {
                _id: 1,
                name: sectionTypes.PROFILE,
                title: '',
                isShow: true
            },
            {
                _id: 2,
                name: sectionTypes.EMPLOYMENT,
                title: '',
                isShow: true,
                items: []
            },
            {
                _id: 3,
                name: sectionTypes.SKILLS,
                title: '',
                isShow: true,
                items: []
            },
            {
                _id: 4,
                name: sectionTypes.DETAILS,
                title: '',
                isShow: true,
                items: []
            },
            {
                _id: 5,
                name: sectionTypes.EDUCATION,
                title: '',
                isShow: true,
                items: []
            },
        ]
    },
    config: {}
})

if (localStorage.getItem('formData')) {
    state.form = JSON.parse(localStorage.getItem('formData'))
}

const saveToLocal = debounce(() => localStorage.setItem('formData', JSON.stringify(state.form)), 3000)

watch(() => state.form, (value, oldValue) => {
    saveToLocal()
}, {
    deep: true
})

export function useState() {
    const cvTitle = computed(() => {
        return state.form.title
    })

    function setCvTitle(title) {
        state.form.title = title
    }

    const cvDescription = computed(() => {
        return state.form.description
    })

    function setCvDescription(value) {
        state.form.description = value
    }

    const cvSections = computed(() => {
        return state.form.sections
    })

    function setCvSectionTitle({id, value}) {
        const section = getSectionById(id)

        if (!section) return

        section.title = value
    }

    function addSectionItem({sectionId, value}) {
        const section = getSectionById(sectionId)

        if (!section) return

        section.items.push({...value, _id: Date.now()})

    }

    function removeSectionItem({sectionId, itemId}) {
        const section = getSectionById(sectionId)

        if (!section) return

        const itemIndex = section.items.findIndex(item => item?._id === itemId)

        if (itemIndex < 0) return

        section.items.splice(itemIndex, 1)

    }

    function getSectionById(id) {
        return state.form.sections.find(section => section._id === id)
    }

    const sectionByName = (name) => computed(() => {
        return state.form.sections?.find((section) => section?.name === name)
    })

    const form = computed(() => state.form)

    const showedSections = computed(() => {
        return state.form.sections.filter(section => section.isShow)
    })

    const isShowSection = (name) => computed(() => {
        return state.form.sections.find(section => section.name === name).isShow
    })

    const image = computed(() => {
        return state.form.image
    })

    function setImage(val) {
        state.form.image = val
    }

    return {
        cvTitle,
        setCvTitle,

        cvDescription,
        setCvDescription,

        cvSections,
        setCvSectionTitle,

        addSectionItem,
        removeSectionItem,
        form,

        sectionByName,
        showedSections,
        isShowSection,

        image,
        setImage
    }
}