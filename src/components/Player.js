import React from 'react'
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player'

function Player(props) {
	return (
		<ReactPlayer url='https://www.youtube.com/watch?v=6VCStEpYQPg&feature=emb_rel_err' playing/>
		);
}

/*
Player.propTypes = {
	content: PropTypes.string.isRequired
};
*/
export default Player;

/*
<div class="react-player" style="width: 100%; height: 100%;">
<div style="width: 100%; height: 100%;">
<iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/oUFJJNQGwhk?autoplay=1&amp;mute=0&amp;controls=0&amp;origin=https%3A%2F%2Fcookpete.com&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1" id="widget2">
</iframe>
</div>
</div>
*/