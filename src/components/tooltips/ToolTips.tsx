import React from 'react'
import { TOOLTIP_IDS } from '../../utils/tooltips';
import { Tooltip } from 'react-tooltip';

const ToolTips = () => {
  return (
		<>
			{TOOLTIP_IDS.map((id, index) => (
				<Tooltip style={{zIndex: "1000"}} key={index} id={id} noArrow/>
			))}
		</>
	);
}

export default ToolTips