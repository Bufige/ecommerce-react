import React, {useState} from 'react';

import { Container, Input, Search} from './styles';

export default function SearchBar(props) {
	const [text, setText] = useState('');
	const onClick = () => {
		if(props.onClick) {
			props.onClick(text);
		}
	}

	const handleChange = (e) => {
		setText(e.target.value);
		if(props.onChange) {
			props.onChange(e.target.value);
		}
	}
	return <Container>
		<Input placeholder="Search" value={text} onChange={handleChange} />
		<Search className="fas fa-search fa-lg" onClick={onClick}/>
	</Container>
}