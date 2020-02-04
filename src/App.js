import React, { Component, Fragment } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Errores from './containers/Errores/Errores';
import PageHeaders from './components/PageHeader/PageHeader';
import { Layout } from 'antd';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Layout>
					<PageHeaders />
					<Errores />
				</Layout>
			</Fragment>
		);
	}
}

export default App;
