import React,{useState} from 'react'
import QuotesForm from './QuotesForm'
import axios from 'axios'

const AddQuote = (props) => {
    const { addItem } = props
    const [isSaved, setIsSaved] = useState(false);
    const formSubmission = (formData) => {
      addItem(formData)
      setIsSaved(true);
    }
    const toggleIsSaved = () => {
        setIsSaved(false);
         };
    return (
        <div className="addquote">
            <QuotesForm formSubmission={formSubmission}
             isSaved={isSaved}
             toggleIsSaved={toggleIsSaved}
            />
        </div>
    )
}

export default AddQuote