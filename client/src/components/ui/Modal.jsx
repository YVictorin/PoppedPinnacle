
export default function Modal({ open, children, onClose}) {
    if(!open) return null
    const MODAL_STYLES = {
        backgroundColor : 'red',
        width: '500px',
        height: '500px',
      }
    return (
        <div style={MODAL_STYLES}>
            <button onClick={onClose}>Close Modal</button>
            {children}
        </div>
    )
}