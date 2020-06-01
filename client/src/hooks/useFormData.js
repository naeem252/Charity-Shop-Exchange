import { useState, useRef } from 'react'

export default function useFormData(initialData = {}, isInitialDataForPlaceholder = null) {
  
  const [formData, setFormData] = useState(initialData)

  const initialFormData = useRef(initialData).current

  const onChange = (target) => {
    if (!target) return;

    let value = target.value;

    const path = target.name.split(".");

    setFormData(formData => (
      {
        ...formData, 
        [path[0]]: {
          ...formData[path[0]],
          [path[1]]: value
        }
      }
    ));
  }

  return [formData, onChange, initialFormData, isInitialDataForPlaceholder]
}