import React from 'react';

const connect = (mapStateToProps, mapDispatchToProps) =>
    Component => {
        return class extends React.Component {
            render() {
                // const {store} = this.props; // !!!
                return ( <
                    Component { ...mapStateToProps(store.getState(), this.props)
                    } { ...mapDispatchToProps(store.dispatch, this.props)
                    }
                    />
                )
            }

            componentDidMount() {
                // const {store} = this.props; // !!!
                store.subscribe(this.handleChange)
            }

            handleChange = () => {
                this.forceUpdate()
            }
        }
    }

export default connect;
