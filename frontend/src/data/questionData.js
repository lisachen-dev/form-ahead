const questionData = [
    {
         id: "fullName",
         isRequired: true,
         type: "text",
         prompt: "Name:",
         placeholder: "Ash Ketchum"
    },
    {
        id: "phone",
        isRequired: true,
        type: "tel",
        prompt: "Phone Number:",
        placeholder: "e.g. 123-456-7890"
    },
    {
        id: "email",
        isRequired: true,
        type: "email",
        prompt: "Email:",
        placeholder: "e.g. user@email.com"
    },
    {
        id: "guestCount",
        isRequired: true,
        type: "number",
        min: 1,
        max: 100,
        step: 1,
        prompt: "Including yourself, how many people are you bringing?",
        placeholder: 1,
        contextNote: "Note: This helps us avoid double-counting. You can also send this link to others if they want to submit their own response."
    },
    {
        id: "allergies",
        isRequired: false,
        type: "textarea",
        prompt: "Please note any allergies or dietary restrictions we should know about.",
        columns: "30",
        rows: "3",
        placeholder:"e.g. pineapple, gluten, dairy..."
    },
    {
        id: "paymentMethod",
        type: "select",
        prompt: "If we're sharing food or drinks, how do you prefer to handle the cost?",
        methods: [
            {
                value: "",
                display: "-- Select --"
            },
            {
                value: "split",
                display: "Split the check evenly"
            },
            {
                value: "self",
                display: "Pay only for what I ordered"
            },
            {
                value: "ambivalent",
                display: "I'm flexible / I don't care"
            }
        ]
    },
    {
        id: "availableDays",
        type: "checkbox",
        prompt: "Choose your availability: ",
        options: [
            {
                label: "Friday May 16",
                value: "option1"
            },
            {
                label: "Saturday May 17",
                value: "option2"
            },
            {
                label: "Sunday May 18",
                value: "option3"
            }
        ]
    },
    {
        id: "additionalNotes",
        isRequired: false,
        type: "textarea",
        columns: "50",
        rows: "3",
        prompt: "Additional Notes:",
        placeholder: "Is there anything else I need to know?"
    }
]

export default questionData;