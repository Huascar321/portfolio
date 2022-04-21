import React from 'react';

function PortfolioHeader() {
	return (
		<header>
			<div className="logo-container">
				<span className="logo-container__svg" />
				<span className="logo-container__title">Huáscar Suárez</span>
			</div>
			<ul>
				<li>Proyectos</li>
				<li>Certificaciones</li>
				<li><span className="github-logo" />Source</li>
			</ul>
			<div className="light-button">
				<span className="light-button--icon" />
			</div>
		</header>
	);
}

export { PortfolioHeader };
