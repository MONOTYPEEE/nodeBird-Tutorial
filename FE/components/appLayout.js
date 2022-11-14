import PropTypes from 'prop-types';

const appLayout = ({ children }) => {
    return(
        <div>
            <div>공통 메뉴</div>
            {children}
        </div>
    );
}

appLayout.PropTypes={
    children: PropTypes.node.isRequired,
};

export default appLayout;