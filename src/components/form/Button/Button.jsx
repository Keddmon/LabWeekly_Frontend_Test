import './Button.style.css';

const Button = ({
    label,

    onClick,

    disabled = false,

    width,
    height,
    padding,
    fontSize,
    color,
    backgroundColor,
    style = {},

}) => {

    /* ===== STYLES ===== */
    const styles = {
        width: width ? width : '100%',
        height: height ? height : 'auto',
        backgroundColor:
            disabled ?
                ('var(--gray-color)')
                :
                (backgroundColor ? backgroundColor : 'var(--primary-color)'),
        padding: padding ? padding : '10px 0',
        border: 'none',
        fontSize: fontSize ? fontSize : '1rem',
        color: color ? color : '#FFFFFF',
    }

    /* ===== RENDER ===== */
    return (
        <>
            <button
                style={{
                    cursor: disabled ? 'not-allowed' : 'pointer',
                    ...styles,
                    ...style,
                }}
                onClick={onClick}
                disabled={disabled}
            >
                {label}
            </button>
        </>
    );
};

export default Button;