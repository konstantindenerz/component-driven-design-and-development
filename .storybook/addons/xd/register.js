/** @jsx jsx */
import React from 'react';
import { addons, types } from '@storybook/addons';
import { css, jsx } from '@storybook/theming';
import { AddonPanel } from '@storybook/components';
import { useParameter } from '@storybook/api';

const ADDON_ID = 'adobexd';
const PANEL_ID = `${ADDON_ID}/panel`;
const PARAM_KEY = 'design';
const keepjsx = jsx;

const DesignPanel = () => {
  const config = useParameter(PARAM_KEY, null);
  if (config && config.review) {
    const url = config.review.replace('view', 'embed');
    return (
      <div css={containerStyle}>
        <div css={iframeContainerStyle}>
          <iframe css={iframeStyle} src={url} allowFullScreen />
        </div>
        <a css={linkStyle} href={config.review} target="_blank">
          View spec
        </a>
      </div>
    );
  } else {
    return (
      <div css={centerMessageStyle}>
        No design available, use parameter.design.review (URL) to provide design
      </div>
    );
  }
};

addons.register(ADDON_ID, api => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Design',
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <DesignPanel />
      </AddonPanel>
    ),
  });
});

const iframeStyle = css`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  margin-bottom: 0;
  z-index: 1;
`;

const containerStyle = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

const iframeContainerStyle = css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const centerMessageStyle = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  place-items: center;
`;

const linkStyle = css`
  display: grid;
  place-items: center;
  height: 36px;
  left: 0;
  bottom: 0;
  padding: 0 20px;
  border-top-right-radius: 4px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(250, 255, 255, 0.16) 100%);
  backdrop-filter: blur(15px) brightness(1.1);
  z-index: 1111111;
  position: absolute;
  opacity: 0.4;
  color: rgba(0, 0, 0, 0.87);
  transition: all 0.3s ease;

  :hover {
    opacity: 1;
    background: linear-gradient(90deg, rgba(224, 139, 62, 1) 0%, rgba(250, 0, 255, 0.16) 100%);
    color: black;
  }
`;
