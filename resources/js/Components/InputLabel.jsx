export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`form-check-label text-muted ` + className}>
            {value ? value : children}
        </label>
    );
}
