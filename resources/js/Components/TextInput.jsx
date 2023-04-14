import "../styles/admin/vendors/mdi/css/materialdesignicons.min.css";
import "../styles/admin/vendors/css/vendor.bundle.base.css";
import "../styles/admin/css/style.css";

// import "../styles/admin/vendors/js/vendor.bundle.base.js";
// import "../styles/admin/js/off-canvas.js";
// import "../styles/admin/js/hoverable-collapse.js";
// import "../styles/admin/js/misc.js";



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
