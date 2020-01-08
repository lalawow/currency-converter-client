import React from 'react'
import { withRouter } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from "./containers/home"

//第二页，分类模块的文件使用react-loadable按需加载并且代码分割
class App extends React.Component {

    render() {

        return (
            <div>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Redirect to="/home"></Redirect>
                </Switch>
            </div>
        )
    }
}
export default withRouter(App)