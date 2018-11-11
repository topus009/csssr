import React from 'react';

const connect = (mapStateToProps, mapDispatchToProps) =>
    Component => {
        return class extends React.Component {
            render() {
                const {store} = window;
                return (
                    <Component
                        {...this.props}
                        {...mapStateToProps(store.getState(), this.props)}
                        {...mapDispatchToProps(store.dispatch, this.props)}
                    />
                )
            }

            componentDidMount() {
                window.store.subscribe(this.handleChange)
            }

            handleChange = () => {
                this.forceUpdate()
            }
        }
    }

export default connect;
