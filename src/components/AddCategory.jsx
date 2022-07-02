import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inpuValue, setInpuValue] = useState('');

    const onInpuChange = ({ target }) => {
        setInpuValue(target.value);
    }

    const onSubmit = (event) => {
        const newValue = inpuValue.trim();
        event.preventDefault();
        if (newValue.length <= 1) return;
        onNewCategory(newValue);
        setInpuValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Search gif"
                value={inpuValue}
                onChange={onInpuChange}
            />
        </form>
    );
}
