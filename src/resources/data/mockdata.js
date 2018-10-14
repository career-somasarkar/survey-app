
export const SURVEY_DATA = [
    {
      id: 1,
      text: "What is your favourit color?",
      optionType: "RADIO",
      options: [
        {
          id: 1,
          text: "Red"
        },
        {
          id: 2,
          text: "Green"
        },
        {
          id: 3,
          text: "Blue"
        },
        {
          id: 4,
          text: "Orange"
        }
      ],
      answer: {
        selectedOption: {
          id: 1
        },
        value: null
      }
    },
    {
      id: 2,
      text: "Describe your hobbies:",
      optionType: "OPEN_TEXT",
      options: [
        
      ],
      answer: {
        selectedOption: null,
        value: "Please type"
      }
    },
    
    {
      id: 3,
      text: "Q3",
      optionType: "DROP_DOWN",
      options: [
        {
          id: 1,
          text: "a"
        },
        {
          id: 2,
          text: "b"
        },
        {
          id: 3,
          text: "c"
        },
        {
          id: 4,
          text: "d"
        }
      ],
      answer: {
        selectedOption: {
          id: 4
        },
        value: null
      }
    },
    {
      id: 4,
      text: "",
      optionType: "SUMMARY",
      options: [],
      answer: {
        selectedOption: null,
        value: "Some text"
      }
    },
  ]
 ; 
  