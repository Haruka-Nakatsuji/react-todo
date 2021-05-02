import React from 'react';

export const WhisperList = (props) => {
	const { list, userName, whisperMsg, onClick } = props;

	return (
		list.map((whisper, index) => {
		return (
			<li key={whisper}>
			<div className="flex">
			<div className="profile-img"></div>
			<div className="whisper-content">
				<span className="user-name">{userName[index]}</span>
				<div className="whisper-msg">
				{whisperMsg[index]}
				</div>
			</div>
			</div>
			<img src="" />
			<button className="delete" onClick={() => onClick(index)} >削除</button>
			</li>
			);
		})
	);
}