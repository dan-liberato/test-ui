import React from "react";
import {
	InputField
} from "./styles"

const Input = ({ type, name, value, placeholder, onChange }) => {
	return (
		<InputField
			type={type}
			name={name}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			required
		/>
	)
}
export default Input;
