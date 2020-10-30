import { useState } from 'react';

const useForm: (
    initialState: Pick<string, any>,
) => [
    { values: Pick<string, any>; loading: boolean },
    (event: React.ChangeEvent<HTMLInputElement>) => void,
    (callback: () => void) => (event: React.FormEvent<HTMLFormElement>) => void,
] = (initialState: Pick<string, any>) => {
    const [values, setValues] = useState<Pick<string, any>>(initialState);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const auxValues = { ...values };
        auxValues[event.target.name] = event.target.value;
        console.log(auxValues);

        setValues(auxValues);
    };

    const handleSubmit = (callback: () => void) => (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        console.log(loading);
        console.log(loading);
        setLoading(false);
    };

    return [{ values, loading }, handleInputChange, handleSubmit];
};

export default useForm;
