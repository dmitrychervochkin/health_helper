import styled from 'styled-components';

const initialState = [
	{
		id: 1,
		title: 'Календарь тренировок',
		discription:
			'faefb ahefb uahebfuha eufbaeuhfbuab efuhabehb fahueb fubafe hbaufba fhbua ebfuab efuhahfb uahfu abebe uafb',
	},
	{
		id: 2,
		title: 'Энергозатратность упражнений',
		discription:
			'faefb ahefb uahebfuha eufbaeuhfbuab efuhabehb fahueb fubafe hbaufba fhbua ebfuab efuhahfb uahfu abebe uafb',
	},
	{
		id: 3,
		title: 'Планирование тренировок',
		discription:
			'faefb ahefb uahebfuha eufbaeuhfbuab efuhabehb fahueb fubafe hbaufba fhbua ebfuab efuhahfb uahfu abebe uafb',
	},
	{
		id: 4,
		title: 'Раздел сообщество',
		discription:
			'faefb ahefb uahebfuha eufbaeuhfbuab efuhabehb fahueb fubafe hbaufba fhbua ebfuab efuhahfb uahfu abebe uafb',
	},
	{
		id: 5,
		title: 'Раздел плейлисты',
		discription:
			'faefb ahefb uahebfuha eufbaeuhfbuab efuhabehb fahueb fubafe hbaufba fhbua ebfuab efuhahfb uahfu abebe uafb',
	},
];

const NewFeaturesContainer = ({ className, isDropdownOpen, setIsDropdownOpen }) => {
	return (
		<div
			className={className}
			id="new-features-dropdown-window"
			style={{
				overflow: isDropdownOpen ? 'visible' : 'hidden',
				maxHeight: isDropdownOpen ? '700px' : '1px',
				opacity: isDropdownOpen ? 1 : 0,
			}}
		>
			<div>
				Что нового в разработке?
				<ul style={{ color: '#a2a2a2' }}>
					{initialState.map(({ id, title, discription }) => (
						<div key={id}>
							<li className="new-feature" key={id}>
								{title}
							</li>
							<div className="new-features-more-info">
								<div
									style={{
										borderBottom: '2px solid #a2a2a2',
										padding: '0 0 10px 0',
										margin: '0 0 10px 0',
									}}
								>
									{title}
								</div>
								<div style={{ color: '#a2a2a2' }}>{discription}</div>
							</div>
						</div>
					))}
				</ul>
			</div>
		</div>
	);
};

export const NewFeatures = styled(NewFeaturesContainer)`
	box-shadow: 0 0 10px 5px #141414;
	transition: opacity 0.3s, max-height 0.3s;
	position: absolute;
	right: 0;
	margin: 10px;
	border-radius: 20px;
	width: 300px;
	background-color: #222222;
	padding: 20px;

	li {
		margin-bottom: 10px;
	}

	.new-features-more-info {
		transition: opacity 0.5s;
		top: 0;
		border-radius: 20px;
		left: -300px;
		position: absolute;
		width: 300px;
		height: 100%;
		background-color: #646464;
		opacity: 0;
		padding: 20px;
		color: white;
	}

	.new-feature {
		cursor: default;
		transition: color 0.5s;

		&:hover + .new-features-more-info {
			opacity: 1;
		}
		&:hover {
			color: white;
		}
	}
`;
