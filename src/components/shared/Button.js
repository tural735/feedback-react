import PropTypes from 'prop-types';
function Button({children,version,type,isDisabled}) {
    return (
        <button disabled={isDisabled} type={type} className={`btn btn-${version}`}>
            {children}
        </button>
    )
}

Button.defaultProps={
    version: 'primary',
    type: 'button',
    isDisabled: false,
}
Button.prototype={
    children:PropTypes.node.isRequired,
    version:PropTypes.string,
    type:PropTypes.string,
    isDisabled:PropTypes.bool,

}

export default Button






// import PropTypes from 'prop-types';
// function Button({children,reverse}) {
//     return (
//         <button>
//             {children}
//         </button>
//     )
// }

// Button.defaultProps={
//     reverse: false,
//   }
//   Button.propTypes={
//     children: PropTypes.node.isRequired,
//     reverse: PropTypes.bool
//   }

// export default Button