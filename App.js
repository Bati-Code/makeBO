import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Counter from './views/Counter'

const App = () => {

	return (
		<RecoilRoot>
			<BrowserRouter>
				<Switch>
					<Route path="/" render={() => <Counter />} />
				</Switch>
			</BrowserRouter>
		</RecoilRoot>
	)
}

export default App;
