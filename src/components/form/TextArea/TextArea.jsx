import './TextArea.style.css';

const TextArea = ({
    label,
    placeholder,
    value,
    onChange,

    height,
    borderRadius,

    required,
    optional,
}) => {

    /* ===== STYLES ===== */

    /* ===== RENDER ===== */
    return (
        <div className='textarea-container'>
            <span
                className={`bold large ${required ? 'required' : ''}`}
                style={{
                    color: optional ? 'var(--gray-color)' : '#000000'
                }}
            >{label}</span>
            <textarea
                placeholder={placeholder}
                value={value}
                onChange={onChange}

                style={{
                    height: height ? height : '100%',
                    borderRadius: borderRadius ? borderRadius : '',
                }}
            />
        </div>
    );
};

export default TextArea;