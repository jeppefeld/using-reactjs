import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';
import MenuItem from 'material-ui/MenuItem';
import { translate } from 'admin-on-rest';

import IconInfo from 'material-ui/svg-icons/action/info';
import IconSettings from 'material-ui/svg-icons/action/settings';
import PostIcon from 'material-ui/svg-icons/action/book';
import CommentIcon from 'material-ui/svg-icons/communication/chat-bubble';
import IconCode from 'material-ui/svg-icons/action/code';
import Divider from 'material-ui/Divider';

//import { isDev } from './MyConfig';

const Menu = ({ resources, onMenuTap, translate, logout }) => ( // eslint-disable-line
  <div>
    <MenuItem
      key="visnav"
      containerElement={<Link to={`/visnav`} />}
      primaryText={translate(`pos.vis.nav`)}
      leftIcon={<IconCode />}
      //onTouchTap={onMenuTap}
    />

    <MenuItem
      key="visexample"
      containerElement={<Link to={`/visexample`} />}
      primaryText={translate(`pos.vis.example`)}
      leftIcon={<IconCode />}
      //onTouchTap={onMenuTap}
    />

    <Divider />

    {/* <MenuItem
      key="gqlexample"
      containerElement={<Link to={`/gqlexample`} />}
      primaryText={translate(`pos.gql.example`)}
      leftIcon={<IconCode />}
      //onTouchTap={onMenuTap}
    /> */}

    <Divider />
    <MenuItem
      key="posts"
      containerElement={<Link to={`/posts`} />}
      primaryText={translate(`resources.posts.name`, { smart_count: 2 })}
      leftIcon={<PostIcon />}
      //onTouchTap={onMenuTap}
    />
    <MenuItem
      key="comments"
      containerElement={<Link to={`/comments`} />}
      primaryText={translate(`resources.comments.name`, { smart_count: 2 })}
      leftIcon={<CommentIcon />}
      //onTouchTap={onMenuTap}
    />

    <MenuItem
      key="config"
      containerElement={<Link to={`/config`} />}
      primaryText={translate(`pos.configuration`)}
      leftIcon={<IconSettings />}
      //onTouchTap={onMenuTap}
    />

    <Divider />
    <MenuItem
      key="tbd"
      containerElement={<Link to={`/tbd`} />}
      primaryText="TBD"
      leftIcon={<IconInfo />}
      //onTouchTap={onMenuTap}
    />

    {/*
          <Divider />
         {logout}
        */}
  </div>
);

const enhance = compose(
  connect(state => ({
    theme: state.theme,
    locale: state.locale,
  })),
  translate,
);

export default enhance(Menu);
