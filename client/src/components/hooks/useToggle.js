import { useCallback, useState } from 'react'

const useToggle = (initialValue = false) => {
    const [open, setOpen] = useState(initialValue)

    const toggle = useCallback(() => {
        setOpen(v => !v);
    }, []) 

    return [open, toggle]
}

export default useToggle
