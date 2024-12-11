import './Input.style.css';

const Input = ({
    style = {},

    border,
    borderRadius,
    padding,
    fontSize,

    label,
    placeholder,

    value,

    required,

    onChange,
}) => {

    /* ===== RENDER ==== */
    return (
        <div className='input-container'>
            <span className={`bold large ${required ? 'required' : ''}`}>{label}</span>
            <input
                placeholder={placeholder}
                value={value}
                onChange={onChange}

                style={{
                    border: border,
                    borderRadius: borderRadius,
                    padding: padding,
                    fontSize: fontSize,
                    ...style
                }}
            />
        </div>
    );
};

export default Input;