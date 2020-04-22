//TODO: this a temporary way to display these svg
import React from 'react'
import PropTypes from 'prop-types'

const MarketForexIcon = ({ dynamic_id }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
        <defs>
            <linearGradient id={dynamic_id} x1="0%" x2="100%" y1="71.461%" y2="28.539%">
                <stop offset="0%" stopColor="#FF444F" />
                <stop offset="100%" stopColor="#FF6444" />
            </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
            <path d="M0 0H64V64H0z" />
            <path
                fill={`url(#${dynamic_id})`}
                fillRule="nonzero"
                d="M37 13c.351 0 .677.184.857.486L43 22.056l5.143-8.57c.158-.264.427-.438.727-.477L49 13h10c.793 0 1.27.878.84 1.543L49.186 31.006l11.66 18.46c.399.633-.013 1.448-.73 1.528L60 51H50c-.342 0-.66-.175-.844-.463L43 40.862l-6.156 9.675c-.161.252-.425.418-.717.455L36 51H26c-.788 0-1.266-.868-.845-1.534l11.658-18.46-7.814-12.076L29 22c0 .552-.448 1-1 1H13v6h11c.513 0 .936.386.993.883L25 30v8c0 .552-.448 1-1 1H13v11c0 .513-.386.936-.883.993L12 51H4c-.552 0-1-.448-1-1V14c0-.552.448-1 1-1zm-10 2H5v34h6V38c0-.513.386-.936.883-.993L12 37h11v-6H12c-.513 0-.936-.386-.993-.883L11 30v-8c0-.552.448-1 1-1h15v-6zm9.434 0H29v.25l9.84 15.207c.164.254.202.565.113.846l-.046.118-.062.113L27.813 49h7.638l6.705-10.537c.37-.581 1.19-.615 1.613-.102l.075.102L50.548 49h7.638L47.155 31.534c-.185-.293-.204-.658-.057-.965l.062-.112L57.161 15h-7.596l-5.708 9.514c-.365.61-1.218.646-1.64.108l-.074-.108L36.434 15z"
            />
        </g>
    </svg>
)
MarketForexIcon.propTypes = {
    dynamic_id: PropTypes.string,
}
export default MarketForexIcon
