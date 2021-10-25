import React, { createContext } from 'react'

export const ContactContext = createContext()

const ContactContextProvider = (props) => {
	return (
		<ContactContext.Provider value={{  }}>
			{props.children}
		</ContactContext.Provider>
	)
}

export default ContactContextProvider
