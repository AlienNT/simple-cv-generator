export const sectionNames = {
    SKILLS: 'skills',
    EDUCATION: 'education',
    EMPLOYMENT: 'employment',
    DETAILS: 'details',
    PROFILE: 'profile',
    PHOTO: 'photo'

}
export const sectionFields = {
    SKILLS: {
        TITLE: {
            name: 'title',
            value: null
        }

    },
    EDUCATION: {
        SPECIALITY: {
            name: 'speciality',
            value: null
        },
        EDUCATIONAL_INSTITUTION: {
            name: 'educational institution',
            value: null
        },
        DATES: {
            name: 'dates',
            value: null
        }
    },
    EMPLOYMENT: {
        POSITION: {
            name: 'position',
            value: null
        },
        COMPANY: {
            name: 'company',
            value: null
        },
        DESCRIPTION: {
            name: 'description',
            value: null
        },
        DATES: {
            name: 'dates',
            value: null
        },
    },
    DETAILS: {
        TITLE: {
            name: 'title',
            value: null
        },
        VALUE: {
            name: 'value',
            value: null
        },
        TYPE: {
            name: 'type',
            value: null
        }

    },
    PROFILE: {
        TITLE: {
            name: 'title',
            value: null
        },
        DESCRIPTION: {
            name: 'description',
            value: null
        }
    }
}

export const fieldTypes = {
    INPUT: 'input',
    TEXTAREA: 'textarea',
    DATE: 'date'
}

export const checkFieldType = {
    EMAIL: {
        type: 'email',
        regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    PHONE: {
        type: 'phone',
        regex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    },
    LINK: {
        type: 'link',
        regex: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
    },
    TEXT: {
        type: 'text'
    }
}