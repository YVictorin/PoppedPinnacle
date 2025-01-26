export default function ContactSubmitButton({ disabled = false}) {
    return disabled ? (  
      <>
      <button className="group-invalid:pointer-events-none group-invalid:opacity-30" 
              type="submit" 
              style={{ 
                      backgroundColor: '#f8f9fa', 
                      color: '#000',
                      fontSize: "1.1em", 
                      fontWeight: '500', 
                      outline: 'none',
                      textTransform: 'uppercase',
                      padding: '0.5em 1em',
                      borderRadius: "2em",
                      cursor: "pointer"
                    }}>
                Send Message
              </button>
      </>
    ) : (
        <>
      <button type="submit" 
              style={{ 
                      backgroundColor: '#f8f9fa', 
                      color: '#000',
                      fontSize: "1.1em", 
                      fontWeight: '500', 
                      outline: 'none',
                      textTransform: 'uppercase',
                      padding: '0.5em 1em',
                      borderRadius: "2em",
                      cursor: "pointer"
                    }}>
                Send Message
              </button>
      </>
    )
  }