import React from 'react';
import "./styles.css";

export default function Rating({value = 0}) {
	return <div class="ratings">
		<div class="empty-stars"></div>
		<div class="full-stars" style={{width: value + '%'}}></div>
  </div>
}