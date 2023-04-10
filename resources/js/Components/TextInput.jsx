import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="form-group">
            <input
                {...props}
                type={type}
                className={
                    'form-control form-control-lg '+
                    className
                }
                ref={input}
            />
        </div>
    );
});
