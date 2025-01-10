export default function Input({ label, text, handleChange }) {
    return (
        <label>
            {label}
            {' '}
            <input
                value={text}
                onChange={handleChange}
            />
        </label>
    );
}
