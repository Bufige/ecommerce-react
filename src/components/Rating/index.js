import React from 'react';
import "./styles.css";

export default function Rating({value = 0}) {
	return <div className="ratings">
		<div className="empty-stars"></div>
		<div className="full-stars" style={{width: value + '%'}}></div>
  </div>
}